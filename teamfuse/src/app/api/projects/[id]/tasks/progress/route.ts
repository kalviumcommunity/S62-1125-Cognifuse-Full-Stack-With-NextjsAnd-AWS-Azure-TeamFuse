import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { invalidateTaskCache } from "@/lib/cache/taskCache";
import { invalidateProjectCache } from "@/lib/cache/projectCache";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { taskId, progress } = await req.json();
  const { id: projectId } = params;
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { progress },
  });

  await invalidateTaskCache(projectId);
  await invalidateProjectCache(projectId);
  return NextResponse.json(task);
}
