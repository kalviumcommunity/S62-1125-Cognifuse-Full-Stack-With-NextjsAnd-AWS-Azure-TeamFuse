import PresenceWrapper from "./PresenceWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Sidebar from "@/components/project/Sidebar";
import { getMemberDetails } from "@/lib/services/memberServices";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function ProjectLayout({ children, params }: LayoutProps) {
  const { id: projectId } = await params;

  const session = await getServerSession(authOptions);
  const currentUserId = session?.user?.id ?? "";

  if (!currentUserId) {
    return (
      <aside className="w-64 p-6 hidden md:block">
        <p className="text-red-400">You are not logged in.</p>
      </aside>
    );
  }

  const member = await getMemberDetails(projectId, currentUserId);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* LEFT SIDEBAR */}
      <Sidebar projectId={projectId} member={member} />

      {/* MAIN CONTENT auto-expands */}
      <main className="flex-1 overflow-visible">{children}</main>

      {/* Right sidebar removed for specific routes */}
      <PresenceWrapper projectId={projectId} currentUserId={currentUserId} />
    </div>
  );
}
