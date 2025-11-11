import { oauthSchema } from "@/lib/validators/auth";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { runOAuthFlow } from "@/lib/auth/runOAuthFlow";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = oauthSchema.safeParse(body);

    if (!result.success) {
      return sendError("Invalid payload", "INVALID_PAYLOAD", 400);
    }

    const auth = await runOAuthFlow(result.data, req);

    // if user already logged in → redirect
    if (auth.alreadyLoggedIn) {
      return Response.redirect(new URL("/dashboard", req.url));
    }

    return sendSuccess(auth, "Logged in successfully!", 200);
  } catch (error) {
    console.error("Error in /api/oauth:", error);
    return sendError(
      "Internal Server Error",
      "INTERNAL_SERVER_ERROR",
      500,
      error
    );
  }
}
