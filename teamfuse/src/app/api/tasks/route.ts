/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";


export async function GET() {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        assignedTo: { select: { id: true, name: true } },
        project: { select: { id: true, name: true } },
      },
    });
    return sendSuccess(tasks, "Tasks fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, weight, projectId, createdById, assignedToId } = body;

    const task = await prisma.task.create({
      data: { title, description, weight, projectId, createdById, assignedToId },
    });

    return sendSuccess(task, "Task created successfully", 201);
  } catch (error: any) {
    return sendError(error.message, "CREATE_ERROR", 500, error);
  }
}






