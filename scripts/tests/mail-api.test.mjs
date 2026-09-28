import assert from "node:assert/strict";
import test from "node:test";
import nextEnv from "@next/env";
import { randomUUID } from "node:crypto";

nextEnv.loadEnvConfig(process.cwd());
const base = process.env.TEST_BASE_URL;
const sandbox = process.env.TEST_MAILJET_SANDBOX === "true";
const expectBlocked = process.env.TEST_MAILJET_EXPECT_BLOCKED === "true";

async function login() {
  const response = await fetch(`${base}/api/admin/session`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD }),
  });
  assert.equal(response.status, 200);
  return response.headers.get("set-cookie").split(";")[0];
}

async function send(data, cookie) {
  return fetch(`${base}/api/admin/email`, {
    method: "POST", headers: { "Content-Type": "application/json", ...(cookie ? { cookie } : {}) },
    body: JSON.stringify(data),
  });
}

test("admin email sending requires a verified admin session", { skip: !base }, async () => {
  const response = await send({ recipients: [{ email: "test@example.com", name: "Test" }], subject: "Hello", body: "Hello" });
  assert.equal(response.status, 401);
});

test("new form submission persists its welcome email status", { skip: !base || !sandbox }, async () => {
  const response = await fetch(`${base}/api/leads`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Form Test", business_name: "Mail Test Business", email: `form-test-${randomUUID()}@example.com`, mobile: "9999999999", required_funding: "100000", funding_type: "startup-funding" }),
  });
  assert.equal(response.status, 201);
  const lead = await response.json();
  const headers = { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` };
  try {
    assert.equal(lead.welcome_email_status, "sandbox");
    const stored = await fetch(`${process.env.SUPABASE_URL}/rest/v1/funding_leads?id=eq.${lead.id}&select=welcome_email_status`, { headers });
    assert.equal(stored.status, 200);
    assert.equal((await stored.json())[0].welcome_email_status, "sandbox");
  } finally {
    const cleanup = await fetch(`${process.env.SUPABASE_URL}/rest/v1/funding_leads?id=eq.${lead.id}`, { method: "DELETE", headers });
    assert.ok(cleanup.ok, "Synthetic form record must be removed");
  }
});

test("authenticated admin can send a branded Mailjet sandbox email", { skip: !base || !sandbox }, async () => {
  const cookie = await login();
  const status = await fetch(`${base}/api/admin/email`, { headers: { cookie } });
  assert.equal(status.status, 200);
  assert.equal((await status.json()).sandbox, true, "Live email sends are not permitted by this test");
  const response = await send({ recipients: [{ email: "test@example.com", name: "Test" }], subject: "Hello {{name}}", body: "Thank you for contacting EazyGrow." }, cookie);
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.equal(result.accepted, 1);
  assert.equal(result.failed, 0);
  assert.equal(result.sandbox, true);
});

test("invalid recipients and oversized batches never reach Mailjet", { skip: !base }, async () => {
  const cookie = await login();
  for (const recipients of [[{ email: "invalid", name: "Test" }], Array.from({ length: 51 }, (_, i) => ({ email: `test${i}@example.com`, name: "Test" }))]) {
    const response = await send({ recipients, subject: "Hello", body: "Hello" }, cookie);
    assert.equal(response.status, 400);
  }
});

test("email provider failure does not lose a saved form submission", { skip: !base || !sandbox || !expectBlocked }, async () => {
  const response = await fetch(`${base}/api/leads`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Form Test", business_name: "Mail Test Business", email: `form-test-${randomUUID()}@example.com`, mobile: "9999999999", required_funding: "100000", funding_type: "startup-funding" }),
  });
  assert.equal(response.status, 201);
  const lead = await response.json();
  const headers = { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` };
  try {
    assert.equal(lead.welcome_email_status, "failed");
    const stored = await fetch(`${process.env.SUPABASE_URL}/rest/v1/funding_leads?id=eq.${lead.id}&select=id,welcome_email_status`, { headers });
    assert.equal(stored.status, 200);
    assert.equal((await stored.json())[0].welcome_email_status, "failed");
  } finally {
    assert.ok((await fetch(`${process.env.SUPABASE_URL}/rest/v1/funding_leads?id=eq.${lead.id}`, { method: "DELETE", headers })).ok);
  }
});

test("blocked account is shown to admin without a false success message", { skip: !base || !sandbox || !expectBlocked }, async () => {
  const response = await send({ recipients: [{ email: "test@example.com", name: "Test" }], subject: "Test", body: "Test" }, await login());
  assert.equal(response.status, 502);
  assert.match((await response.json()).error, /account is temporarily blocked/);
});
