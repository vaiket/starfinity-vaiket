import "server-only";
import { buildAdminEmail, buildThankYouEmail } from "@/lib/email-content.mjs";
import { sendSmtpEmails } from "@/lib/smtp-transport.mjs";
import type { LeadRecord } from "@/lib/supabase";

function config() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();
  const sender = (process.env.SMTP_FROM_EMAIL || process.env.MAILJET_FROM_EMAIL)?.trim();
  if (!host || !user || !password || !sender) throw new Error("Brevo SMTP is not configured. Set SMTP host, credentials and sender on the server.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender)) throw new Error("Mailjet sender email is invalid.");
  return { host, port, user, password, sender, senderName: process.env.SMTP_FROM_NAME?.trim() || process.env.MAILJET_FROM_NAME?.trim() || "EazyGrow" };
}

export function mailjetStatus() {
  try {
    const value = config();
    return { configured: true, provider: "Brevo SMTP", sender: value.sender, senderName: value.senderName, sandbox: false };
  } catch {
    return { configured: false, provider: "Brevo SMTP", sender: "", senderName: "EazyGrow", sandbox: false };
  }
}

export async function sendThankYouEmail(lead: LeadRecord) {
  const content = buildThankYouEmail(lead);
  const result = await sendSmtpEmails([{ email: lead.email, name: lead.name, ...content }], config());
  if (result.failed) throw new Error("Mailjet did not accept the confirmation email.");
  return "accepted" as const;
}

export async function sendAdminEmails(recipients: Array<{email: string; name: string}>, subject: string, body: string) {
  const messages = recipients.map((recipient) => ({ ...recipient, ...buildAdminEmail(recipient, subject, body) }));
  return sendSmtpEmails(messages, config());
}
