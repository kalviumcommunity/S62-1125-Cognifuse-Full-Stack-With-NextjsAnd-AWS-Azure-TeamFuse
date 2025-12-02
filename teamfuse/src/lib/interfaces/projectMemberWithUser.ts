import { ProjectMember } from "@/generated/prisma";

export interface ProjectMemberWithUser extends ProjectMember {
  user: {
    id: string;
    name: string;
  };
}
