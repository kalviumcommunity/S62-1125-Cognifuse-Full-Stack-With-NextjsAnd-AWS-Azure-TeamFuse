import { NextRequest, NextResponse } from "next/server";
import { verifyAccess } from "@/lib/auth-tokens";
import { sendError } from "./responseHandler";

export function withAuth(
  handler: (
    req: NextRequest,
    user: { id: string; email: string },
    context: { params: Record<string, string> }
  ) => Promise<NextResponse>
) {
  return async function (
    req: NextRequest,
    context: { params: Record<string, string> }
  ) {
    const token =
      req.cookies.get("access_token")?.value ??
      req.headers.get("authorization")?.replace("Bearer ", "");

    if (!token) {
      return sendError("Unauthorized", "UNAUTHORIZED", 401);
    }

    try {
      const { payload } = await verifyAccess(token);

      const user = {
        id: payload.sub as string,
        email: payload.email as string,
      };

      return handler(req, user, context);
    } catch (err) {
      console.error("AUTH ERROR:", err);
      return sendError("Unauthorized", "UNAUTHORIZED", 401);
    }
  };
}
