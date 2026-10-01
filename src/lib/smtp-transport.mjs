import nodemailer from "nodemailer";

/** @param {Array<{email: string, name: string, subject: string, text: string, html: string}>} messages */
export async function sendSmtpEmails(messages, config) {
  if (!messages.length || messages.length > 50) throw new Error("Choose between 1 and 50 recipients per send.");
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: false,
    auth: { user: config.user, pass: config.password },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 15000,
  });
  try {
    const results = await Promise.all(messages.map(async (message) => {
      try {
        await transporter.sendMail({
          from: { address: config.sender, name: config.senderName },
          replyTo: { address: config.sender, name: config.senderName },
          to: { address: message.email, name: message.name },
          subject: message.subject,
          text: message.text,
          html: message.html,
        });
        return { email: message.email, status: "accepted" };
      } catch (error) {
        return { email: message.email, status: "failed", error: error instanceof Error ? error.message : "SMTP rejected this message." };
      }
    }));
    return { accepted: results.filter((result) => result.status === "accepted").length, failed: results.filter((result) => result.status === "failed").length, sandbox: false, results };
  } finally {
    transporter.close();
  }
}
