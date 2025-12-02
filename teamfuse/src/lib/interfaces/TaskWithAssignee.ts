import type { Task, User } from "@/generated/prisma";

export interface TaskWithAssignee extends Task {
  assignee: User | null;
}
