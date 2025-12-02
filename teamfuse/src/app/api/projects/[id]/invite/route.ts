import { inviteExistingUsers } from "@/lib/db/memberService";
import { handleRouteError } from "@/lib/errors/handleRouteError";
import { prisma } from "@/lib/prisma";
import { sendError, sendSuccess } from "@/lib/responseHandler";
import { withAuth } from "@/lib/withAuth";
import { User } from "@/lib/types/user";

type ProjectMember = {
  userId: string;
  status: "ACCEPTED" | "PENDING" | "DECLINED";
};

export const POST = withAuth(async (req, user, context) => {
  try {
    const params = context?.params;
    const projectId = params?.id;
    if (!projectId) {
      return sendError("Project ID is required", "BAD_REQUEST", 400);
    }

    const { emails } = await req.json();
    if (!Array.isArray(emails) || emails.length === 0) {
      return sendError("Emails array is required", "BAD_REQUEST", 400);
    }

    // Owner check
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });
    if (!project) return sendError("Project not found", "NOT_FOUND", 404);

    if (project.createdById !== user.id) {
      return sendError(
        "Only the project owner can invite members",
        "FORBIDDEN",
        403
      );
    }

    // Find existing users
    const users = await prisma.user.findMany({
      where: { email: { in: emails } },
      select: { id: true, email: true },
    });

    const existingEmails = users.map((u: User) => u.email);
    const notFound = emails.filter((e) => !existingEmails.includes(e));

    // Check memberships
    const existingMembers = await prisma.projectMember.findMany({
      where: {
        projectId,
        userId: { in: users.map((u: User) => u.id) },
      },
      select: { userId: true, status: true },
    });

    const alreadyAccepted = [];
    const alreadyPending = [];
    const canInvite = [];

    for (const u of users) {
      const membership = existingMembers.find(
        (m: ProjectMember) => m.userId === u.id
      );

      if (!membership) {
        canInvite.push(u.email); // fresh
      } else if (membership.status === "ACCEPTED") {
        alreadyAccepted.push(u.email);
      } else if (membership.status === "PENDING") {
        alreadyPending.push(u.email);
      } else if (membership.status === "DECLINED") {
        // allow reinvite
        canInvite.push(u.email);
      }
    }

    const invited = await inviteExistingUsers(projectId, canInvite);

    return sendSuccess(
      { invited, notFound, alreadyAccepted, alreadyPending },
      "Invite process completed"
    );
  } catch (err) {
    console.log("Invite Error:", err);
    return handleRouteError(err);
  }
});
