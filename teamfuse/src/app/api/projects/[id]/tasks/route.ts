import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  getTasksFromCache,
  invalidateTaskCache,
  setTaskInCache,
} from "@/lib/cache/taskCache";
import { sendSuccess } from "@/lib/responseHandler";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { invalidateProjectCache } from "@/lib/cache/projectCache";

// GET /api/projects/[id]/tasks
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: projectId } = await context.params;

  try {
    const cached = await getTasksFromCache(projectId);
    if (cached) {
      return sendSuccess(cached, "Hit Task cache");
    }

    const tasks = await prisma.task.findMany({
      where: { projectId },
      include: { assignee: true },
      orderBy: { createdAt: "desc" },
    });

    await setTaskInCache(projectId, tasks);
    return sendSuccess(tasks, "Tasks Fetched Successfully");
  } catch (err) {
    console.error("TASK GET ERROR:", err);
    return handleRouteError(err);
  }
}

// POST /api/projects/[id]/tasks
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: projectId } = await context.params;
  const body = await req.json();

  try {
    const created = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
        weight: Number(body.weight ?? 1),
        priority: body.priority ?? "MEDIUM",
        assigneeId: body.assigneeId || null,
        projectId,
        status: "TODO",
        progress: 0,
      },
    });

    await invalidateTaskCache(projectId);
    await invalidateProjectCache(projectId);
    return sendSuccess(created, "Task created successfully");
  } catch (err) {
    console.error("TASK CREATE ERROR:", err);
    return handleRouteError(err);
  }
}
