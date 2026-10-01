import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { mailjetStatus, sendAdminEmails } from "@/lib/mailjet-server";
import { MAX_EMAIL_RECIPIENTS } from "@/lib/email-content.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Admin login required." }, { status: 401 });
  return NextResponse.json(mailjetStatus(), { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Admin login required." }, { status: 401 });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  let body;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  if (!body || typeof body.subject !== "string" || !body.subject.trim() || body.subject.length > 180 || /[\r\n]/.test(body.subject)
    || typeof body.body !== "string" || !body.body.trim() || body.body.length > 12000
    || !Array.isArray(body.recipients) || body.recipients.length < 1 || body.recipients.length > MAX_EMAIL_RECIPIENTS) {
    return NextResponse.json({ error: `Enter a subject, message and 1–${MAX_EMAIL_RECIPIENTS} recipients.` }, { status: 400 });
  }
  const recipients = new Map<string, {email: string; name: string}>();
  for (const recipient of body.recipients) {
    if (!recipient || typeof recipient.email !== "string" || recipient.email.length > 254
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient.email.trim())
      || (recipient.name !== undefined && (typeof recipient.name !== "string" || recipient.name.length > 200 || /[\r\n]/.test(recipient.name)))) {
      return NextResponse.json({ error: "One or more recipient details are invalid." }, { status: 400 });
    }
    const email = recipient.email.trim().toLowerCase();
    recipients.set(email, { email, name: recipient.name?.trim() || "there" });
  }
  try {
    if (body.html !== undefined && typeof body.html !== "boolean") return NextResponse.json({ error: "HTML mode must be a boolean." }, { status: 400 });
    const result = await sendAdminEmails([...recipients.values()], body.subject.trim(), body.body.trim(), body.html === true);
    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Email request failed. Check Mailjet before retrying." }, { status: 502 });
  }
}
