// lib/withAuth.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyAccess } from "@/lib/auth-tokens";
import { sendError } from "./responseHandler";

export function withAuth(
  handler: (
    req: NextRequest,
    user: { id: string; email: string }
  ) => Promise<NextResponse>
) {
  return async function (req: NextRequest) {
    const accessToken =
      req.cookies.get("access_token")?.value ??
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      return sendError("Unauthorized", "UNAUTHORIZED", 401);
    }

    try {
      const { payload } = await verifyAccess(accessToken);

      const user = {
        id: payload.sub as string,
        email: payload.email as string,
      };

      return handler(req, user);
    } catch (err) {
      console.error("Authentication error:", err);
      return sendError("Unauthorized", "UNAUTHORIZED", 401);
    }
  };
}
