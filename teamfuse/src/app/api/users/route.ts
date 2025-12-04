import { handleRouteError } from "@/lib/errors/handleRouteError";
import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";
import { NextRequest } from "next/server";

// Utility type for JSON parsing
type CreateUserBody = {
  name: string;
  email: string;
  avatarUrl?: string | null;
  oauthId: string;
};

// GET /api/users — fetch all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    return sendSuccess(users, "Users fetched successfully");
  } catch (error) {
    console.error("GET /api/users error:", error);
    return handleRouteError(error);
  }
}

// POST /api/users — create a new user
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<CreateUserBody>;

    if (!body.name || !body.email || !body.oauthId) {
      return sendError("Missing required fields", "VALIDATION_ERROR", 400);
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        avatarUrl: body.avatarUrl ?? null,
        oauthId: body.oauthId,
      },
    });

    return sendSuccess(user, "User created successfully", 201);
  } catch (error) {
    console.error("POST /api/users error:", error);
    return handleRouteError(error);
  }
}
