import { getMembersFromCache, setMembersInCache } from "../cache/memberCache";
import {
  getProjectMemberFromCache,
  setProjectMemberInCache,
} from "../cache/projectMemberCache";
import { prisma } from "../prisma";

export const getProjectMembers = async (projectId: string) => {
  try {
    const cached = await getMembersFromCache(projectId);
    if (cached) {
      return cached;
    }

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
    await setMembersInCache(projectId, members);

    return members;
  } catch (err) {
    console.error("Error in fetch members service", err);
    throw err;
  }
};

export const getMemberDetails = async (projectId: string, userId: string) => {
  try {
    try {
      const cached = await getProjectMemberFromCache(projectId, userId);
      if (cached) {
        return cached;
      }
    } catch (err) {
      console.log("Error while fetching Project member cache", err);
    }

    const member = await prisma.projectMember.findFirst({
      where: {
        projectId,
        status: "ACCEPTED",
        userId,
      },
    });

    if (!member) {
      console.log("member not found");
      return;
    }

    try {
      await setProjectMemberInCache(projectId, userId, member);
    } catch (err) {
      console.log("Error while setting project member in cache", err);
    }

    return member;
  } catch (err) {
    console.error("Error in fetch members service", err);
    throw err;
  }
};