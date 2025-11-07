/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) return sendError("Missing projectId", "MISSING_PARAM", 400);

  try {
    const feedbacks = await prisma.feedback.findMany({
      where: { projectId },
      include: {
        fromUser: { select: { id: true, name: true } },
        toUser: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return sendSuccess(feedbacks, "Feedbacks fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

export async function POST(request: Request) {
  try {
    const { fromUserId, toUserId, projectId, rating, comment } = await request.json();

    const feedback = await prisma.feedback.create({
      data: { fromUserId, toUserId, projectId, rating, comment },
    });

    return sendSuccess(feedback, "Feedback created successfully", 201);
  } catch (error: any) {
    return sendError(error.message, "CREATE_ERROR", 500, error);
  }
}
