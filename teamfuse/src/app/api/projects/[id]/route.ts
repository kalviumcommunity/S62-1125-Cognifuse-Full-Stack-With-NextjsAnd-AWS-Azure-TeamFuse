/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        createdBy: true,
        members: { include: { user: true } },
        tasks: true,
        messages: true,
      },
    });

    if (!project) return sendError("Project not found", "NOT_FOUND", 404);

    return sendSuccess(project, "Project fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    const data = await request.json();
    const updated = await prisma.project.update({
      where: { id },
      data,
    });

    return sendSuccess(updated, "Project updated successfully");
  } catch (error: any) {
    return sendError(error.message, "UPDATE_ERROR", 500, error);
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    await prisma.project.delete({ where: { id } });
    return sendSuccess(null, "Project deleted successfully");
  } catch (error: any) {
    return sendError(error.message, "DELETE_ERROR", 500, error);
  }
}
