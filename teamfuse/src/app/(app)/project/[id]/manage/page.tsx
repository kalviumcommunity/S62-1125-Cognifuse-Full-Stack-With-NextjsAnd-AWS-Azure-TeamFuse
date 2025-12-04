import ManageProjectClient from "@/components/project/manage/ManageProjectClient";
import ErrorNoAccess from "@/components/shared/ErrorNoAccess";
import ErrorProjectNotFound from "@/components/shared/ErrorProjectNotFound";
import { ProjectMember, ProjectRole } from "@/generated/prisma";
import { authOptions } from "@/lib/authOptions";
import { ProjectDashboardResponse } from "@/lib/interfaces/projectDashboardResponse";
import { getMemberDetails } from "@/lib/services/memberServices";
import { getProjectById } from "@/lib/services/projectServices";
import { getServerSession } from "next-auth";

export default async function ManageTab({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const session = await getServerSession(authOptions);
    const { id: projectId } = await params;

    const currentUserId = session?.user?.id;

    if (!currentUserId) {
      return <div className="text-white p-6">Unauthorized</div>;
    }

    // ----- Fetch member details -----
    let memberDetails: ProjectMember | null = null;
    try {
      memberDetails = await getMemberDetails(projectId, currentUserId);
    } catch (err) {
      console.error("Error fetching member details:", err);
      return <ErrorNoAccess />;
    }

    const role: ProjectRole | undefined = memberDetails?.role;

    if (!role || role !== "LEADER") {
      return <ErrorNoAccess />;
    }

    // ----- Fetch project details -----
    let project: ProjectDashboardResponse;
    try {
      project = await getProjectById(projectId, currentUserId);
    } catch (err) {
      console.error("Error fetching project:", err);
      return <ErrorProjectNotFound />;
    }

    return (
      <ManageProjectClient
        projectId={projectId}
        projectName={project.project.name}
      />
    );
  } catch (err) {
    console.error("Unexpected error in ManageTab:", err);
    return <div className="text-red-500 p-6">Something went wrong</div>;
  }
}
