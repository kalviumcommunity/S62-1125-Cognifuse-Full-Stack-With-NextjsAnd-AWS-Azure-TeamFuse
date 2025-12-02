import TeamFuseDashboard from "@/components/TeamFuseDashboard";
import { authOptions } from "@/lib/authOptions";
import { getAllProjectsForUser } from "@/lib/services/projectServices";
import { getServerSession } from "next-auth";
// Mock Data

type Projects = Awaited<ReturnType<typeof getAllProjectsForUser>>;

export default async function Page() {
  let projects: Projects = { pending: [], accepted: [] };
  const session = await getServerSession(authOptions);
  if (session) {
    projects = await getAllProjectsForUser(session.user.id);
  }
  console.log("Projects fetched in dashboard page:", projects.pending);
  return (
    <TeamFuseDashboard
      projects={projects.accepted}
      pendingProjects={projects.pending}
    />
  );
}
