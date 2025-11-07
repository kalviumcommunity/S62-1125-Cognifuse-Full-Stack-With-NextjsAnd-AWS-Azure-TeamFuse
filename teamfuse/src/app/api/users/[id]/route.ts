/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        projects: { include: { project: true } },
        tasksAssigned: true,
      },
    });

    if (!user) {
      return sendError("User not found", "NOT_FOUND", 404);
    }

    return sendSuccess(user, "User fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const updated = await prisma.user.update({
      where: { id: params.id },
      data,
    });

    return sendSuccess(updated, "User updated successfully");
  } catch (error: any) {
    return sendError(error.message, "UPDATE_ERROR", 500, error);
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({ where: { id: params.id } });
    return sendSuccess(null, "User deleted successfully");
  } catch (error: any) {
    return sendError(error.message, "DELETE_ERROR", 500, error);
  }
}
