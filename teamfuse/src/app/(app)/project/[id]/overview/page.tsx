// src/app/project/[id]/overview/page.tsx
import ProjectHeader from "@/components/project/overview/ProjectHeader";
import TeamMembers from "@/components/project/overview/TeamMembers";
import QuickStats from "@/components/project/overview/QuickStats";
import AISummary from "@/components/project/overview/AISummary";

async function getOverview(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects/${id}/overview`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch overview");
  return res.json();
}

export const dynamic = "force-dynamic";

export default async function OverviewTab({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: overview } = await getOverview(id);

  return (
    <main className="p-8 space-y-6">
      <ProjectHeader overview={overview} />
      <TeamMembers members={overview.members} 
      projectId={id}
  currentUserId="user-uuid-or-session-id"/>
      <QuickStats stats={overview.stats} />
      <AISummary overview={overview} />
    </main>
  );
}
