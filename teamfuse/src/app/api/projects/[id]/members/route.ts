// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// interface RouteParams {
//   params: {
//     id: string;
//   };
// }

// export async function GET(_: Request, { params }: RouteParams) {
//   const members = await prisma.projectMember.findMany({
//     where: {
//       projectId: params.id,
//       status: "ACCEPTED",
//     },
//     select: {
//       user: {
//         select: {
//           id: true,
//           name: true,
//         },
//       },
//     },
//   });

//   return NextResponse.json(members);
// }

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: Request, { params }: RouteParams) {
  const { id: projectId } = await params; // unwrap await

  try {
    // Fetch only accepted members in this project
    const members = await prisma.projectMember.findMany({
      where: {
        projectId,
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

    // Remove duplicates by user ID
    const uniqueMembers = Array.from(
      new Map(members.map((m) => [m.user.id, m.user])).values()
    );

    return NextResponse.json(uniqueMembers);
  } catch (error) {
    console.error("MEMBERS FETCH ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch members" },
      { status: 500 }
    );
  }
}
