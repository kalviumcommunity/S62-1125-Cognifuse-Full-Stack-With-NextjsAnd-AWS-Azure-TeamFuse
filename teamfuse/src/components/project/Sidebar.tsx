"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Users,
  Settings2,
  User,
} from "lucide-react";
import { ProjectMember } from "@/generated/prisma";

type Props = { projectId: string; member: ProjectMember };

// helper: convert string -> UrlObject-like shape for Link
function makeHref(href: string) {
  // Link expects UrlObject | RouteImpl<string> in your setup.
  // Provide an object with pathname and cast to the expected type.
  // This keeps intent clear while satisfying TypeScript.
  return { pathname: href } as unknown as Parameters<typeof Link>[0]["href"];
}

export default function Sidebar({ projectId, member }: Props) {
  const pathname = usePathname();

  const role = member?.role ?? null;

  const links = [
    {
      label: "Overview",
      href: `/project/${projectId}/overview`,
      icon: LayoutDashboard,
    },
    { label: "Tasks", href: `/project/${projectId}/tasks`, icon: ListTodo },
    { label: "Chat", href: `/project/${projectId}/chat`, icon: MessageCircle },
    {
      label: "My Performance",
      href: `/project/${projectId}/me/performance`,
      icon: User,
    },
    {
      label: "Team Performance",
      href: `/project/${projectId}/team-performance`,
      icon: Users,
    },
  ];

  if (role === "LEADER") {
    links.push({
      label: "Manage",
      href: `/project/${projectId}/manage`,
      icon: Settings2,
    });
  }

  return (
    <aside className="w-64 border-r border-gray-800/50 p-6 hidden md:block bg-gradient-to-b from-gray-900/50 to-gray-950/50 backdrop-blur-xl">
      <div className="mb-8">
        <Link href={makeHref("/dashboard")}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Dashboard
          </h2>
        </Link>
      </div>

      <nav className="space-y-2">
        {links.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={makeHref(href)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                  : "hover:bg-gray-800/50 text-gray-400 hover:text-white border border-transparent"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "text-purple-400" : "group-hover:text-purple-400"
                } transition-colors`}
              />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
