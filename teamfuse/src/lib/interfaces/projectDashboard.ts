import type { $Enums, GitHubActivity, Insight } from "@/generated/prisma";
import type { ProjectTask } from "../types/projectTask";

export interface ProjectDashboard {
  id: string;
  name: string;
  status: $Enums.ProjectStatus;
  description: string | null;
  githubRepo: string;
  githubRepoId: number | null;
  githubWebhookSecret: string | null;
  createdById: string;
  createdAt: Date;
  lastActive: Date | null;

  members: {
    user: {
      id: string;
      name: string;
      email: string;
      avatarUrl: string | null;
    };
  }[];

  tasks: ProjectTask[];

  chatMessages: {
    id: string;
    projectId: string;
    senderId: string;
    recipientId: string | null;
    message: string;
    type: string;
    aiLabel: string | null;
    createdAt: Date;

    sender: {
      id: string;
      name: string;
      avatarUrl: string | null;
    };
  }[];

  githubData: GitHubActivity[];

  insights: Insight[];
}
