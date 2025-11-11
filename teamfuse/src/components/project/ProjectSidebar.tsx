"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function ProjectSidebar() {
  const params = useParams();
  const pathname = usePathname();
  const projectId = params?.id; // grabs [id] from /project/[id]

  const links = [
    { label: "Overview", href: `/project/${projectId}/overview` },
    { label: "Tasks", href: `/project/${projectId}/tasks` },
    { label: "GitHub", href: `/project/${projectId}/github` },
    { label: "Chat", href: `/project/${projectId}/chat` },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 p-6 hidden md:block">
      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded transition-colors ${
              pathname === link.href
                ? "bg-gray-800 text-blue-400"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
