import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "eazygrow-admin-session";
export const ADMIN_SESSION_SECONDS = 8 * 60 * 60;

function config() {
  const username = process.env.ADMIN_USERNAME?.trim() || "admin";
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!password || !secret || secret.length < 32) throw new Error("Admin login is not configured on the server.");
  return { username, password, secret };
}

function equal(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function signature(expires: string) {
  const { username, password, secret } = config();
  return createHmac("sha256", secret).update(JSON.stringify([username, password, expires])).digest("hex");
}

export function verifyAdminCredentials(username: unknown, password: unknown) {
  const configured = config();
  return typeof username === "string" && typeof password === "string"
    && equal(username, configured.username) && equal(password, configured.password);
}

export function createAdminSession() {
  const expires = String(Date.now() + ADMIN_SESSION_SECONDS * 1000);
  return `${expires}.${signature(expires)}`;
}

export async function isAdminAuthenticated() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;
  const [expires, signed, extra] = token.split(".");
  if (extra || !/^\d+$/.test(expires ?? "") || !signed || Number(expires) <= Date.now()) return false;
  try {
    return equal(signed, signature(expires));
  } catch {
    return false;
  }
}

export function adminUsername() {
  return config().username;
}
