import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET({ params }: { params: { id: string } }) {
  try {
    const members = await prisma.projectMember.findMany({
      where: {
        projectId: params.id,
        status: "ACCEPTED",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(members);
  } catch (e) {
    console.error("MEMBER FETCH ERROR:", e);
    return NextResponse.json(
      { error: "Failed to fetch members" },
      { status: 500 }
    );
  }
}
