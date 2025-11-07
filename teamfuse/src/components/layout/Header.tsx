// src/components/layout/Header.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/dashboard" className="font-semibold">
          TeamFuse
        </Link>

        <nav className="hidden gap-6 md:flex">
          {[{ href: "/dashboard", label: "Dashboard" }].map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`text-sm ${pathname === i.href ? "font-semibold" : "text-gray-600"} hover:text-black`}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-gray-100">
            🔔
          </button>
          <button className="rounded-full bg-gray-200 px-3 py-2 text-sm">
            ME
          </button>
        </div>
      </div>
    </header>
  );
}
