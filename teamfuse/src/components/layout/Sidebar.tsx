// src/components/layout/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/project/123/chat", label: "Chat Space" },
  { href: "/project/123/tasks", label: "Task Space" },
  { href: "/project/123/github", label: "GitHub Insights" },
  { href: "/project/123/team-performance", label: "Team Performance" },
  { href: "/me/performance", label: "My Performance" },
  { href: "/project/123/feedback", label: "Peer Feedback" },
  { href: "/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile trigger */}
      <button
        className="m-2 rounded-md border px-3 py-2 text-sm md:hidden"
        onClick={() => setOpen(true)}
      >
        ☰ Menu
      </button>

      {/* Drawer (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 h-full w-72 bg-white p-4 shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-sm font-semibold text-gray-500">
              Navigate
            </h2>
            <ul className="space-y-1">
              {LINKS.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-3 py-2 text-sm ${
                      pathname === i.href
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}

      {/* Fixed (desktop) */}
      <aside className="sticky top-0 hidden h-[calc(100vh-64px)] w-64 shrink-0 border-r bg-white p-4 md:block">
        <ul className="space-y-1">
          {LINKS.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className={`block rounded px-3 py-2 text-sm ${
                  pathname === i.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
