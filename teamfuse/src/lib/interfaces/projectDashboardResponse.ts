import { Insight } from "@/generated/prisma";
import { ProjectDashboard } from "./projectDashboard";

export interface ProjectDashboardResponse {
  project: ProjectDashboard;

  taskSummary: {
    total: number;
    todo: number;
    inProgress: number;
    completed: number;
    assignedToMe: number;
  };

  githubSummary: {
    commitCount: number;
    prCount: number;
    linesAdded: number;
    linesDeleted: number;
  };

  latestInsight: Insight | null;
}
