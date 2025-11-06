/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET Project by ID
export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params; 

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        createdBy: true,
        members: { include: { user: true } },
        tasks: true,
        messages: true,
      },
    });

    if (!project)
      return NextResponse.json({ success: false, message: "Project not found" }, { status: 404 });

    return NextResponse.json({ success: true, project });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// UPDATE Project
export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    const data = await request.json();
    const updated = await prisma.project.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, project: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// DELETE Project
export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  try {
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Project deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
