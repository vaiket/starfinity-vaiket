export const MAX_EMAIL_RECIPIENTS = 50;

/** @param {unknown} value */
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

/** @param {string} title @param {string} body @param {Array<[string, string]>} details */
function brandedHtml(title, body, details = []) {
  const summary = details.length ? `<table role="presentation" width="100%" style="margin:24px 0;background:#f4f6fb;border-radius:12px;padding:16px">${details.map(([label, value]) => `<tr><td style="padding:8px;color:#64748b;font-size:13px">${escapeHtml(label)}</td><td style="padding:8px;color:#17213b;font-size:14px;font-weight:600;text-align:right">${escapeHtml(value)}</td></tr>`).join("")}</table>` : "";
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta charset="utf-8"></head><body style="margin:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;color:#17213b"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:28px 12px"><table role="presentation" width="600" style="width:100%;max-width:600px;background:#fff;border-radius:16px;overflow:hidden" cellpadding="0" cellspacing="0"><tr><td style="padding:28px 32px;background:#414288;color:#fff"><div style="font-size:28px;font-weight:700">Eazy<span style="color:#b3e274">Grow</span></div><div style="margin-top:8px;font-size:13px;color:#e1e4ff">Business advisory. Built around you.</div></td></tr><tr><td style="padding:32px"><h1 style="margin:0 0 20px;font-size:24px;line-height:1.4">${escapeHtml(title)}</h1><div style="font-size:15px;line-height:1.8;white-space:pre-wrap">${escapeHtml(body)}</div>${summary}<p style="font-size:14px;line-height:1.7;color:#64748b">Have a question? Reply to this email and our team will help you.</p><p style="margin-top:24px;font-size:15px;font-weight:600">Warm regards,<br>The EazyGrow Team</p></td></tr><tr><td style="padding:22px 32px;background:#f4f6fb;font-size:11px;line-height:1.8;color:#64748b"><strong>Eazygrow Ventures Private Limited</strong><br>Independent private-sector startup advisory and business consulting.<br>Not affiliated with or endorsed by any government agency.</td></tr></table></td></tr></table></body></html>`;
}

/** @param {{name: string, business_name: string, required_funding: string, funding_type: string, id?: string | number}} lead */
export function buildThankYouEmail(lead) {
  const subject = "Thank you for submitting your application | EazyGrow";
  const body = `Hi ${lead.name},\n\nThank you for submitting your application to EazyGrow. We have received your details, and our advisory team will review your request and contact you soon.\n\nThere is no need to submit the form again. Funding approval is subject to the relevant institution's eligibility criteria and assessment.`;
  const type = lead.funding_type.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const details = /** @type {Array<[string, string]>} */ ([["Business", lead.business_name], ["Funding requested", `INR ${new Intl.NumberFormat("en-IN").format(Number(lead.required_funding))}`], ["Service", type]]);
  if (lead.id) details.push(["Application reference", String(lead.id)]);
  return { subject, text: `${body}\n\n${details.map(([key, value]) => `${key}: ${value}`).join("\n")}\n\nWarm regards,\nThe EazyGrow Team\nEazygrow Ventures Private Limited`, html: brandedHtml("Thank you. Your application is with us.", body, details) };
}

/** @param {{name?: string}} recipient @param {string} subject @param {string} body */
export function buildAdminEmail(recipient, subject, body) {
  const name = recipient.name?.trim() || "there";
  const personalize = (/** @type {string} */ value) => value.replace(/\{\{name\}\}/g, () => name);
  const personalizedSubject = personalize(subject);
  const personalizedBody = personalize(body);
  return { subject: personalizedSubject, text: `${personalizedBody}\n\nWarm regards,\nThe EazyGrow Team\nEazygrow Ventures Private Limited`, html: brandedHtml(personalizedSubject, personalizedBody) };
}
