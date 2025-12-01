import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  const { taskId, progress } = await req.json();
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { progress },
  });
  return NextResponse.json(task);
}
