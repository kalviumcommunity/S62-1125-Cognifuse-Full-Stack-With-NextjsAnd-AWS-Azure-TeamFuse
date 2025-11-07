/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const updated = await prisma.task.update({
      where: { id: params.id },
      data,
    });
    return sendSuccess(updated, "Task updated successfully");
  } catch (error: any) {
    return sendError(error.message, "UPDATE_ERROR", 500, error);
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.task.delete({ where: { id: params.id } });
    return sendSuccess(null, "Task deleted successfully");
  } catch (error: any) {
    return sendError(error.message, "DELETE_ERROR", 500, error);
  }
}
