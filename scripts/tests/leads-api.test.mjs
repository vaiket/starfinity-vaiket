import assert from "node:assert/strict";
import test from "node:test";
import nextEnv from "@next/env";
import { randomUUID } from "node:crypto";

nextEnv.loadEnvConfig(process.cwd());
const base = process.env.TEST_BASE_URL;

test("customer leads require a server-verified admin session", { skip: !base }, async () => {
  const response = await fetch(`${base}/api/leads`);
  assert.equal(response.status, 401);
});

function payload(overrides = {}) {
  return {
    business_name: "Integration Test Business", name: "Form Test", mobile: "9999999999",
    email: `form-test-${randomUUID()}@example.com`, required_funding: "25,00,000",
    funding_type: "working-capital", status: "new", ...overrides,
  };
}

async function serviceRequest(path, options = {}) {
  return fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    },
  });
}

async function submit(data) {
  return fetch(`${base}/api/leads`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
  });
}

async function removeTestLead(id) {
  const response = await serviceRequest(`funding_leads?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
  assert.ok(response.ok, "Only the test submission must be removed successfully");
}

test("invalid email is rejected before saving a lead", { skip: !base }, async () => {
  const response = await submit(payload({ email: "invalid-email" }));
  if (response.status === 201) {
    const created = await response.json();
    await removeTestLead(created.id);
  }
  assert.equal(response.status, 400);
});

test("new submissions cannot set their own workflow status", { skip: !base }, async () => {
  const response = await submit(payload({ status: "won" }));
  assert.equal(response.status, 201);
  const lead = await response.json();
  try {
    assert.equal(lead.status, "new");
  } finally {
    await removeTestLead(lead.id);
  }
});

test("admin login accepts only configured server credentials", { skip: !base }, async () => {
  const rejected = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "wrong", password: "wrong" }),
  });
  assert.equal(rejected.status, 401);
  const accepted = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }),
  });
  assert.equal(accepted.status, 200);
  const cookie = accepted.headers.get("set-cookie");
  assert.ok(cookie?.includes("HttpOnly"), "Session must be inaccessible to browser JavaScript");
  assert.ok(cookie?.includes("SameSite=strict"), "Session must restrict cross-site use");
  const session = await fetch(`${base}/api/admin/session`, { headers: { cookie: cookie.split(";")[0] } });
  assert.equal((await session.json()).authenticated, true);
  const logout = await fetch(`${base}/api/admin/session`, { method: "DELETE", headers: { cookie: cookie.split(";")[0] } });
  assert.equal(logout.status, 200);
  assert.ok(logout.headers.get("set-cookie")?.includes("Max-Age=0"), "Logout must remove the browser session");
});

test("contact and popup submissions persist and appear in the admin lead list", { skip: !base }, async () => {
  const login = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }),
  });
  assert.equal(login.status, 200);
  const cookie = login.headers.get("set-cookie").split(";")[0];
  const createdIds = [];
  try {
    for (const funding_type of ["government-funding", "equipment-finance"]) {
      const input = payload({ funding_type });
      const response = await submit(input);
      assert.equal(response.status, 201);
      const lead = await response.json();
      assert.ok(lead.id, "A persisted submission must have an ID");
      createdIds.push(lead.id);
      assert.equal(lead.required_funding, "2500000");
      const stored = await serviceRequest(`funding_leads?id=eq.${lead.id}&select=id,email,status`);
      assert.equal(stored.status, 200);
      const rows = await stored.json();
      assert.equal(rows.length, 1);
      assert.equal(rows[0].email, input.email);
      assert.equal(rows[0].status, "new");
    }
    const listing = await fetch(`${base}/api/leads`, { headers: { cookie } });
    assert.equal(listing.status, 200);
    const rows = await listing.json();
    for (const id of createdIds) assert.ok(rows.some((row) => row.id === id), "Admin list must include saved form submissions");
  } finally {
    for (const id of createdIds) await removeTestLead(id);
  }
});

test("anonymous Supabase credentials cannot read customer records", { skip: !base }, async () => {
  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/funding_leads?select=id&limit=0`, {
    headers: { apikey: process.env.SUPABASE_ANON_KEY, Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}` },
  });
  assert.ok(response.status === 401 || response.status === 403, "Anonymous database read must be denied");
});

test("missing fields, invalid mobile and invalid funding amounts are rejected", { skip: !base }, async () => {
  for (const overrides of [{ name: "" }, { mobile: "123" }, { required_funding: "0" }, { required_funding: "abc" }, { funding_type: "unknown" }]) {
    const response = await submit(payload(overrides));
    if (response.status === 201) {
      const created = await response.json();
      await removeTestLead(created.id);
    }
    assert.equal(response.status, 400);
  }
  const malformed = await fetch(`${base}/api/leads`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: "{invalid-json",
  });
  assert.equal(malformed.status, 400);
});

test("forged and expired admin sessions cannot list leads", { skip: !base }, async () => {
  const login = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }),
  });
  assert.equal(login.status, 200);
  const cookie = login.headers.get("set-cookie").split(";")[0];
  const name = cookie.slice(0, cookie.indexOf("="));
  for (const forged of [`${name}=${Date.now() + 60000}.invalid-signature`, `${name}=1.${cookie.split(".")[1]}`]) {
    const response = await fetch(`${base}/api/leads`, { headers: { cookie: forged } });
    assert.equal(response.status, 401);
  }
});

test("cross-origin login requests are rejected", { skip: !base }, async () => {
  const response = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json", origin: "https://unrelated.example" },
    body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }),
  });
  assert.equal(response.status, 403);
});
