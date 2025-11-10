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

  if (!access) {
    return NextResponse.redirect(redirectUrl);
  }

  try {
    await verifyAccess(access);
    return NextResponse.next();
  } catch {
    // try refreshing transparently (optional)
    const refreshRes = await fetch(new URL("/api/auth/refresh", req.url), {
      method: "POST",
      headers: { cookie: req.headers.get("cookie") ?? "" },
    });
    if (refreshRes.ok) {
      // let it proceed; browser will get new cookies
      return NextResponse.next();
    }
    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher: [
    "/api/protected/:path*",
    "/api/auth/sessions/:path*",
    "/dashboard/:path*",
  ],
};
