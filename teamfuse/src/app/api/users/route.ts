/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    return sendSuccess(users, "Users fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

// POST new user
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, avatarUrl } = body;

    const user = await prisma.user.create({
      data: { name, email, role, avatarUrl },
    });

    return sendSuccess(user, "User created successfully", 201);
  } catch (error: any) {
    return sendError(error.message, "CREATE_ERROR", 500, error);
  }
}
