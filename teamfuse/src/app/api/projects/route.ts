/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, createdById } = body;

    // ✅ Step 1: Check if the user exists
    const userExists = await prisma.user.findUnique({
      where: { id: createdById },
    });

    if (!userExists) {
      return NextResponse.json(
        { success: false, message: "User not found. Cannot create project." },
        { status: 400 }
      );
    }

    // ✅ Step 2: Use Prisma transaction
    const result = await prisma.$transaction(async (tx) => {
      // 1️⃣ Create the project
      const project = await tx.project.create({
        data: {
          name,
          description,
          createdById,
        },
      });

      // 2️⃣ Add the creator as project member (Leader)
      await tx.projectMember.create({
        data: {
          userId: createdById,
          projectId: project.id,
          role: "LEADER",
        },
      });

      // 3️⃣ Create a welcome message
      await tx.message.create({
        data: {
          content: `Project "${name}" created successfully!`,
          senderId: createdById,
          projectId: project.id,
        },
      });

      return project;
    });

    return NextResponse.json({ success: true, project: result });
  } catch (error: any) {
    console.error("❌ Transaction failed. Rolling back...", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
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

    return NextResponse.json({ success: true, projects });
  } catch (error: any) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

