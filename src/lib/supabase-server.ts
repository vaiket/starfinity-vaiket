import "server-only";
import type { LeadFormPayload, LeadRecord } from "@/lib/supabase";

const TABLE_NAME = "funding_leads";

function readConfiguredEnv(value: string | undefined, placeholders: string[]): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim();
  if (!normalized) return undefined;
  if (placeholders.includes(normalized.toLowerCase())) return undefined;
  return normalized;
}

function parseProjectRefFromUrl(url: string): string | undefined {
  try {
    return new URL(url).hostname.split(".")[0]?.toLowerCase();
  } catch {
    return undefined;
  }
}

function decodeJwtPayload(token: string): Record<string, unknown> | undefined {
  const parts = token.split(".");
  if (parts.length < 2) return undefined;

  try {
    const normalized = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
    const payload = Buffer.from(normalized + padding, "base64").toString("utf8");
    return JSON.parse(payload) as Record<string, unknown>;
  } catch {
    return undefined;
  }
}

function isKeyForSupabaseProject(token: string, supabaseUrl: string) {
  const payload = decodeJwtPayload(token);
  const tokenRef = typeof payload?.ref === "string" ? payload.ref.toLowerCase() : undefined;
  const urlRef = parseProjectRefFromUrl(supabaseUrl);
  if (!tokenRef || !urlRef) return false;
  return tokenRef === urlRef;
}

function readSupabaseUrl() {
  const supabaseUrl = readConfiguredEnv(process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL, [
    "your_supabase_url_here",
    "https://your-project-ref.supabase.co",
  ]);

  if (!supabaseUrl) {
    throw new Error("Missing Supabase URL. Set SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL.");
  }

  return supabaseUrl;
}

function readSupabaseApiKey(supabaseUrl: string) {
  const configuredServiceRoleKey = readConfiguredEnv(process.env.SUPABASE_SERVICE_ROLE_KEY, [
    "your_service_role_key_here",
  ]);
  const configuredAnonKey = readConfiguredEnv(
    process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    ["your_anon_key_here", "your_supabase_anon_key_here"]
  );

  if (configuredServiceRoleKey && isKeyForSupabaseProject(configuredServiceRoleKey, supabaseUrl)) {
    return configuredServiceRoleKey;
  }

  if (configuredAnonKey && isKeyForSupabaseProject(configuredAnonKey, supabaseUrl)) {
    return configuredAnonKey;
  }

  if (configuredServiceRoleKey || configuredAnonKey) {
    throw new Error(
      "Configured Supabase key does not match the configured project URL. Check SUPABASE_URL and your Supabase key."
    );
  }

  throw new Error(
    "Missing Supabase API key. Set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)."
  );
}

function getSupabaseConfig() {
  const supabaseUrl = readSupabaseUrl();
  const apiKey = readSupabaseApiKey(supabaseUrl);

  return {
    apiKey,
    restBase: `${supabaseUrl}/rest/v1`,
  };
}

function buildHeaders() {
  const { apiKey } = getSupabaseConfig();

  return {
    apikey: apiKey,
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

async function readApiError(response: Response, fallbackMessage: string) {
  const text = (await response.text()).trim();
  if (!text) return fallbackMessage;

  try {
    const payload = JSON.parse(text) as {
      message?: string;
      error?: string;
      hint?: string;
      details?: string;
    };
    const message = payload.message ?? payload.error;
    if (!message) return text;
    const extras = [payload.hint, payload.details].filter(Boolean).join(" | ");
    return extras ? `${message} | ${extras}` : message;
  } catch {
    return text;
  }
}

export async function createLeadInSupabase(payload: LeadFormPayload): Promise<LeadRecord> {
  const { restBase } = getSupabaseConfig();

  const response = await fetch(`${restBase}/${TABLE_NAME}`, {
    method: "POST",
    headers: {
      ...buildHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify([payload]),
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await readApiError(response, "Failed to save lead.");
    throw new Error(message);
  }

  const rows = (await response.json()) as LeadRecord[];
  return rows[0];
}

export async function listLeadsFromSupabase(): Promise<LeadRecord[]> {
  const { restBase } = getSupabaseConfig();

  const response = await fetch(`${restBase}/${TABLE_NAME}?select=*&order=created_at.desc`, {
    method: "GET",
    headers: buildHeaders(),
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await readApiError(response, "Failed to load leads.");
    throw new Error(message);
  }

  return (await response.json()) as LeadRecord[];
}
