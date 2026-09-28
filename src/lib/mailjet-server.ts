import "server-only";
import { buildAdminEmail, buildThankYouEmail } from "@/lib/email-content.mjs";
import { sendMailjetEmails } from "@/lib/mailjet-transport.mjs";
import type { LeadRecord } from "@/lib/supabase";

function config() {
  const apiKey = process.env.MAILJET_API_KEY?.trim();
  const secret = (process.env.MAILJET_SECRET_KEY || process.env.MAILJET_SECRET)?.trim();
  const sender = process.env.MAILJET_FROM_EMAIL?.trim();
  if (!apiKey || !secret || !sender) throw new Error("Mailjet is not configured. Set API key, secret and verified sender on the server.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender)) throw new Error("Mailjet sender email is invalid.");
  return { apiKey, secret, sender, senderName: process.env.MAILJET_FROM_NAME?.trim() || "EazyGrow", sandbox: process.env.MAILJET_SANDBOX_MODE === "true" };
}

export function mailjetStatus() {
  try {
    const value = config();
    return { configured: true, sender: value.sender, senderName: value.senderName, sandbox: value.sandbox };
  } catch {
    return { configured: false, sender: "", senderName: "EazyGrow", sandbox: process.env.MAILJET_SANDBOX_MODE === "true" };
  }
}

export async function sendThankYouEmail(lead: LeadRecord) {
  const content = buildThankYouEmail(lead);
  const result = await sendMailjetEmails([{ email: lead.email, name: lead.name, ...content }], config());
  if (result.failed) throw new Error("Mailjet did not accept the confirmation email.");
  return result.sandbox ? "sandbox" as const : "accepted" as const;
}

export async function sendAdminEmails(recipients: Array<{email: string; name: string}>, subject: string, body: string) {
  const messages = recipients.map((recipient) => ({ ...recipient, ...buildAdminEmail(recipient, subject, body) }));
  return sendMailjetEmails(messages, config());
}
