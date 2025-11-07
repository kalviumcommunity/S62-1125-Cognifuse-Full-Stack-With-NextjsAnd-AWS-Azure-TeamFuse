export default interface ProjectCardType {
  id: number;
  name: string;
  role: "Leader" | "Member" | "Viewer";
  status: "active" | "completed" | "On Hold";
  lastActive: string; // e.g., "2 days ago"
  tasksCompleted: number; // percentage
  commits: number;
  lastMessage: string; // e.g., "Fixed bug in authentication"
}
