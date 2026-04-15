import { NextResponse } from "next/server";
import type { LeadFormPayload } from "@/lib/supabase";
import { createLeadInSupabase, listLeadsFromSupabase } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function asErrorMessage(error: unknown, fallback: string) {
  return error instanceof Error && error.message ? error.message : fallback;
}

function isLeadPayload(value: unknown): value is LeadFormPayload {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  const requiredKeys: Array<keyof LeadFormPayload> = [
    "business_name",
    "name",
    "mobile",
    "email",
    "required_funding",
    "funding_type",
  ];
  return requiredKeys.every((key) => typeof payload[key] === "string" && payload[key]!.toString().trim().length > 0);
}

export async function GET() {
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

  if (!isLeadPayload(body)) {
    return NextResponse.json(
      {
        error: "Invalid lead payload. Required: business_name, name, mobile, email, required_funding, funding_type.",
      },
      { status: 400 }
    );
  }

  try {
    const lead = await createLeadInSupabase(body);
    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: asErrorMessage(error, "Failed to save lead.") },
      { status: 500 }
    );
  }
}
