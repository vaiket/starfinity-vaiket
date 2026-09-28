import assert from "node:assert/strict";
import test from "node:test";
import { sendMailjetEmails } from "../../src/lib/mailjet-transport.mjs";

const config = { apiKey: "test-key", secret: "test-secret", sender: "info@essygrow.com", senderName: "EazyGrow", sandbox: true };
const message = { email: "customer@example.com", name: "Customer", subject: "Hello", text: "Hello", html: "<p>Hello</p>" };

test("Mailjet messages use private one-recipient envelopes and sandbox mode", async (t) => {
  let sent;
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://api.mailjet.com/v3.1/send");
    sent = JSON.parse(options.body);
    return Response.json({ Messages: [{ Status: "success", To: [{ Email: message.email }] }, { Status: "success", To: [{ Email: "second@example.com" }] }] });
  });
  const result = await sendMailjetEmails([message, { ...message, email: "second@example.com" }], config);
  assert.ok(sent, "An outgoing Mailjet request must be made");
  assert.equal(sent.SandboxMode, true);
  assert.equal(sent.Messages.length, 2);
  assert.equal(sent.Messages[0].To.length, 1);
  assert.equal(sent.Messages[1].To.length, 1);
  assert.equal(sent.Messages[0].From.Email, "info@essygrow.com");
  assert.equal(result.accepted, 2);
  assert.equal(result.failed, 0);
});

test("HTTP success with per-message rejection is not reported as sent", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ Messages: [{ Status: "error", Errors: [{ ErrorCode: "send-0008", ErrorMessage: "Private provider detail" }] }] }));
  const result = await sendMailjetEmails([message], config);
  assert.equal(result.accepted, 0);
  assert.equal(result.failed, 1);
  assert.ok(!JSON.stringify(result).includes("Private provider detail"));
});

test("provider authentication errors never disclose credentials", async (t) => {
  t.mock.method(globalThis, "fetch", async () => new Response("test-secret", { status: 401 }));
  await assert.rejects(sendMailjetEmails([message], config), /Mailjet request failed \(HTTP 401\)/);
});
