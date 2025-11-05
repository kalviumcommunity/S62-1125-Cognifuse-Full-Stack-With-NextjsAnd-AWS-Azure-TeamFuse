import { prisma } from "@/lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return sendSuccess(users, "Users fetched successfully");
  } catch (error) {
    return sendError("Failed to fetch users", "FETCH_ERROR", 500, error);
  }
}
