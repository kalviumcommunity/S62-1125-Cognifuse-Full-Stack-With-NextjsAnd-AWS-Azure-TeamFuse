import { PrismaClient } from "@/generated/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return sendSuccess(users, "Connected successfully!");
  } catch (error) {
    console.error(error);
    return sendError(
      "Database connection failed",
      "DB_CONNECTION_ERROR",
      500,
      error
    );
  } finally {
    await prisma.$disconnect();
  }
}
