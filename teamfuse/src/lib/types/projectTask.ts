import type { $Enums } from "@/generated/prisma";

export type ProjectTask = {
  id: string;
  title: string;
  status: $Enums.TaskStatus;
  assigneeId: string | null;
  priority: $Enums.TaskPriority;
};
