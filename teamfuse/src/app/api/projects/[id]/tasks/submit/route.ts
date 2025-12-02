import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  const { taskId } = await req.json();

  const updated = await prisma.task.update({
    where: { id: taskId },
    data: { status: "REVIEW" },
  });

  return NextResponse.json(updated);
}
