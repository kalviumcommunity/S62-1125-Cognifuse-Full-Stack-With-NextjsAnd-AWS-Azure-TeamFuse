export default interface ProjectCardType {
  id: string;
  name: string;
  description?: string | null;
  githubRepo: string;
  role: "LEADER" | "MEMBER";
  status: "ACTIVE" | "COMPLETED" | "ARCHIVED";
  lastActive: Date | null;
  createdAt: Date;
  commits?: number;
  lastMessage?: string;
  tasksCompleted?: number;
  createdBy?: {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
  };
}
