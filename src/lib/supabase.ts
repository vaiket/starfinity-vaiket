export type LeadFormPayload = {
  business_name: string;
  name: string;
  mobile: string;
  email: string;
  required_funding: string;
  funding_type: string;
  status?: string;
};

export type LeadRecord = LeadFormPayload & {
  id?: string | number;
  created_at?: string;
};

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

export async function createLead(payload: LeadFormPayload): Promise<LeadRecord> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await readApiError(response, "Failed to save lead.");
    throw new Error(message);
  }

  return (await response.json()) as LeadRecord;
}

export async function listLeads(): Promise<LeadRecord[]> {
  const response = await fetch("/api/leads", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await readApiError(response, "Failed to load leads.");
    throw new Error(message);
  }

  return (await response.json()) as LeadRecord[];
}
