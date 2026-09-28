import assert from "node:assert/strict";
import test from "node:test";
import { buildThankYouEmail, buildAdminEmail } from "../../src/lib/email-content.mjs";

test("thank-you mail includes the submission summary and company branding", () => {
  const result = buildThankYouEmail({ name: "Asha", business_name: "Asha Studio", required_funding: "2500000", funding_type: "startup-funding", id: "test-id" });
  assert.match(result.subject, /Thank you/i);
  assert.match(result.text, /Asha Studio/);
  assert.match(result.html, /Eazygrow Ventures Private Limited/);
  assert.match(result.html, /25,00,000/);
});

test("untrusted submission text is escaped in email HTML", () => {
  const result = buildThankYouEmail({ name: '<img src=x onerror="alert(1)">', business_name: "A&B", required_funding: "1", funding_type: "other" });
  assert.ok(!result.html.includes("<img src=x"));
  assert.match(result.html, /&lt;img/);
  assert.match(result.html, /A&amp;B/);
});

test("admin email personalizes names and renders message text safely", () => {
  const result = buildAdminEmail({ name: "Asha" }, "Hello {{name}}", "Hi {{name}}\n<script>unsafe</script>");
  assert.equal(result.subject, "Hello Asha");
  assert.match(result.text, /Hi Asha/);
  assert.ok(!result.html.includes("<script>unsafe</script>"));
  assert.match(result.html, /&lt;script&gt;/);
});
