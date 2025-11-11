import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAccess } from "@/lib/auth-tokens";

export async function middleware(req: NextRequest) {
  let currentPath = req.nextUrl.pathname + req.nextUrl.search;
  if (!currentPath.startsWith("/")) currentPath = "/";

  const redirectUrl = new URL("/auth", req.url);
  redirectUrl.searchParams.set("from", currentPath);

  const access =
    req.cookies.get("access_token")?.value ||
    req.headers.get("authorization")?.replace("Bearer ", "");

  const refresh = req.cookies.get("refresh_token")?.value;

  console.log(`Access: ${!!access}, Refresh: ${!!refresh}`);

  // ✅ 1. If access exists try verifying it
  if (access) {
    try {
      await verifyAccess(access); // still valid
      return NextResponse.next();
    } catch (e) {
      console.log("❌ Access token invalid or expired");
    }
  }

  // ✅ 2. If refresh is available, try refreshing (only 1 call)
  if (refresh) {
    console.log("➡️ Trying refresh...");

    const refreshRes = await fetch(new URL("/api/auth/refresh", req.url), {
      method: "POST",
      headers: { cookie: req.headers.get("cookie") ?? "" },
    });

    if (refreshRes.ok) {
      console.log("✅ Refresh succeeded. Forwarding new cookies.");

      const res = NextResponse.next();

      refreshRes.headers.forEach((value, key) => {
        if (key.toLowerCase() === "set-cookie") {
          res.headers.append("set-cookie", value);
        }
      });

      return res;
    }

    console.log("⛔ Refresh failed.");
  }

  // ✅ 3. No access token & refresh failed → go to login
  console.log("⛔ Redirecting to login.");
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/api/protected/:path*",
    "/api/auth/sessions/:path*",
    "/dashboard/:path*",
  ],
};
