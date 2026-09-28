import { NextResponse } from "next/server";
import type { LeadFormPayload } from "@/lib/supabase";
import { createLeadInSupabase, listLeadsFromSupabase, updateLeadEmailStatus } from "@/lib/supabase-server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { sendThankYouEmail } from "@/lib/mailjet-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function asErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error && error.message ? error.message : fallback;
}

function normalizeLeadPayload(value: unknown): LeadFormPayload | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  const payload = value as Record<string, unknown>;
  const requiredKeys: Array<keyof LeadFormPayload> = [
    "business_name",
    "name",
    "mobile",
    "email",
    "required_funding",
    "funding_type",
  ];
  if (!requiredKeys.every((key) => typeof payload[key] === "string" && payload[key]!.toString().trim().length > 0)) return undefined;
  const normalized: LeadFormPayload = {
    business_name: (payload.business_name as string).trim(),
    name: (payload.name as string).trim(),
    mobile: (payload.mobile as string).trim(),
    email: (payload.email as string).trim().toLowerCase(),
    required_funding: (payload.required_funding as string).trim().replace(/,/g, ""),
    funding_type: (payload.funding_type as string).trim(),
    status: "new",
  };
  if (normalized.business_name.length < 2 || normalized.business_name.length > 200
    || normalized.name.length < 2 || normalized.name.length > 200
    || !/^\d{10}$/.test(normalized.mobile)
    || normalized.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)
    || !/^\d{1,18}$/.test(normalized.required_funding) || Number(normalized.required_funding) <= 0
    || !["working-capital", "term-loan", "startup-funding", "government-funding", "equipment-finance", "other"].includes(normalized.funding_type)) {
    return undefined;
  }
  return normalized;
}

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Admin login required." }, { status: 401 });
  }
  try {
    const leads = await listLeadsFromSupabase();
    return NextResponse.json(leads, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: asErrorMessage(error, "Failed to load leads.") },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = normalizeLeadPayload(body);
  if (!payload) {
    return NextResponse.json(
      {
        error: "Please enter your name, business name, valid email, 10-digit mobile number, positive funding amount and a valid funding type.",
      },
      { status: 400 }
    );
  }

  try {
    let lead = await createLeadInSupabase(payload);
    let emailStatus: "accepted" | "failed" | "sandbox" = "failed";
    let emailError: string | undefined;
    try {
      emailStatus = await sendThankYouEmail(lead);
    } catch {
      emailError = "Confirmation email could not be sent. The application was saved successfully.";
    }
    if (lead.id !== undefined) {
      try {
        lead = await updateLeadEmailStatus(lead.id, emailStatus, emailError);
      } catch {
        console.warn("A saved application email status could not be updated; do not resend automatically.");
        lead = { ...lead, welcome_email_status: emailStatus, welcome_email_error: emailError || null };
      }
    }
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: asErrorMessage(error, "Failed to save lead.") },
      { status: 500 }
    );
  }
}
