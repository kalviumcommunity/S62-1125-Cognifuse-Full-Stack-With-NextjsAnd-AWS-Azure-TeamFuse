/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");

  if (!projectId) return sendError("Missing projectId", "MISSING_PARAM", 400);

  try {
    const messages = await prisma.message.findMany({
      where: { projectId },
      include: { sender: { select: { id: true, name: true } } },
      orderBy: { createdAt: "asc" },
    });

    return sendSuccess(messages, "Messages fetched successfully");
  } catch (error: any) {
    return sendError(error.message, "FETCH_ERROR", 500, error);
  }
}

export async function POST(request: Request) {
  try {
    const { content, senderId, projectId } = await request.json();
    const message = await prisma.message.create({ data: { content, senderId, projectId } });
    return sendSuccess(message, "Message sent successfully", 201);
  } catch (error: any) {
    return sendError(error.message, "CREATE_ERROR", 500, error);
  }
}
