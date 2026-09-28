/**
 * @param {Array<{email: string, name: string, subject: string, text: string, html: string}>} messages
 * @param {{apiKey: string, secret: string, sender: string, senderName: string, sandbox: boolean}} config
 */
export async function sendMailjetEmails(messages, config) {
  if (!messages.length || messages.length > 50) throw new Error("Choose between 1 and 50 recipients per send.");
  const response = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.apiKey}:${config.secret}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      SandboxMode: config.sandbox,
      Messages: messages.map((message) => ({
        From: { Email: config.sender, Name: config.senderName },
        ReplyTo: { Email: config.sender, Name: config.senderName },
        To: [{ Email: message.email, Name: message.name }],
        Subject: message.subject, TextPart: message.text, HTMLPart: message.html,
      })),
    }),
    signal: AbortSignal.timeout(15000),
  }).catch(() => { throw new Error("Mailjet could not be reached. Check connectivity before retrying; delivery may be uncertain."); });
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    if (typeof error?.ErrorMessage === "string" && error.ErrorMessage.toLowerCase().includes("temporarily blocked")) {
      throw new Error("Mailjet account is temporarily blocked. Contact Mailjet support to enable sending.");
    }
    throw new Error(`Mailjet request failed (HTTP ${response.status}). Check credentials, sender verification and account limits.`);
  }
  const payload = await response.json().catch(() => { throw new Error("Mailjet returned an unreadable response. Check Mailjet before retrying."); });
  const results = messages.map((message, index) => {
    const accepted = payload.Messages?.[index]?.Status === "success";
    return { email: message.email, status: accepted ? (config.sandbox ? "sandbox" : "accepted") : "failed", error: accepted ? undefined : "Mailjet rejected this message. Check sender verification and account limits." };
  });
  return { accepted: results.filter((result) => result.status !== "failed").length, failed: results.filter((result) => result.status === "failed").length, sandbox: config.sandbox, results };
}
