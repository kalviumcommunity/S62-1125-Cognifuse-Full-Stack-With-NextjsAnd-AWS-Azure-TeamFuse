/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { sendSuccess, sendError } from "@/lib/responseHandler";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, createdById } = body;

    const userExists = await prisma.user.findUnique({
      where: { id: createdById },
    });

    if (!userExists) {
      return sendError("User not found. Cannot create project.", "USER_NOT_FOUND", 400);
    }

    const result = await prisma.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: {
          name,
          description,
          createdById,
        },
      });

      await tx.projectMember.create({
        data: {
          userId: createdById,
          projectId: project.id,
          role: "LEADER",
        },
      });

      await tx.message.create({
        data: {
          content: `Project "${name}" created successfully!`,
          senderId: createdById,
          projectId: project.id,
        },
      });

      return project;
    });

    return sendSuccess(result, "Project created successfully");
  } catch (error: any) {
    console.error("Transaction failed. Rolling back...", error);
    return sendError(error.message, "CREATE_PROJECT_ERROR", 500, error);
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    return sendSuccess(projects, "Projects fetched successfully");
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    return sendError(error.message, "FETCH_PROJECTS_ERROR", 500, error);
  }
}
