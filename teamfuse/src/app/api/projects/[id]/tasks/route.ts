import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/projects/[id]/tasks
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: projectId } = await context.params;

  try {
    const tasks = await prisma.task.findMany({
      where: { projectId },
      include: { assignee: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(tasks);
  } catch (err) {
    console.error("TASK GET ERROR:", err);
    return new NextResponse("Failed to fetch tasks", { status: 500 });
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

    return NextResponse.json(created);
  } catch (err) {
    console.error("TASK CREATE ERROR:", err);
    return new NextResponse("Failed to create task", { status: 500 });
  }
}
