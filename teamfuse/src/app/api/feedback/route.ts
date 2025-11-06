/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  if (!projectId) return NextResponse.json({ success: false, message: "Missing projectId" }, { status: 400 });

  try {
    const feedbacks = await prisma.feedback.findMany({
      where: { projectId },
      include: {
        fromUser: { select: { id: true, name: true } },
        toUser: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, feedbacks });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { fromUserId, toUserId, projectId, rating, comment } = await request.json();
    const feedback = await prisma.feedback.create({
      data: { fromUserId, toUserId, projectId, rating, comment },
    });
    return NextResponse.json({ success: true, feedback }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
