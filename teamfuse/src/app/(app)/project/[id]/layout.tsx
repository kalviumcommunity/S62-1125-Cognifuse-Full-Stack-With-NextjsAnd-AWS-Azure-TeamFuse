import PresenceWidget from "@/components/project/PresenceWidget";
import ProjectSidebar from "@/components/project/ProjectSidebar";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      <ProjectSidebar />
      <div className="flex-1 overflow-y-auto p-6">{children}</div>

      {/* Presence Widget in right sidebar */}
      <aside className="hidden lg:block w-72 border-l border-gray-800 p-6">
        <PresenceWidget projectId={"replace-with-dynamic-id"} />
      </aside>
    </div>
  );
}
