import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE, ADMIN_SESSION_SECONDS, adminUsername,
  createAdminSession, isAdminAuthenticated, verifyAdminCredentials,
} from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function GET() {
  const authenticated = await isAdminAuthenticated();
  return NextResponse.json(
    { authenticated, username: authenticated ? adminUsername() : undefined },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  try {
    if (!verifyAdminCredentials(body?.username, body?.password)) {
      return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
    }
    const response = NextResponse.json({ authenticated: true, username: adminUsername() });
    response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(), {
      httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
      path: "/", maxAge: ADMIN_SESSION_SECONDS,
    });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch {
    return NextResponse.json({ error: "Admin login is not configured on the server." }, { status: 503 });
  }
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
    path: "/", maxAge: 0,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
