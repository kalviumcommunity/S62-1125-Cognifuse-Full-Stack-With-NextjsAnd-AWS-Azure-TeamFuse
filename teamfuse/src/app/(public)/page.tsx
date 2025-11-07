// app/(public)/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="space-y-6">
      <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-3xl font-extrabold text-transparent">
        Measure contribution. Improve collaboration.
      </h1>
      <p className="max-w-2xl text-gray-600">
        TeamFuse centralizes projects, tasks, chat, and GitHub insights to make
        teamwork transparent and fair.
      </p>
      <div className="flex gap-3">
        <Link
          href="/auth"
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
        >
          Sign in with GitHub
        </Link>
        <Link
          href="/dashboard"
          className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
        >
          View Dashboard (demo)
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          "Transparent Project Dashboards",
          "AI-driven Peer Insights",
          "Live Presence & Activity Tracking",
        ].map((f) => (
          <li key={f} className="rounded-lg border p-4 text-sm text-gray-700">
            {f}
          </li>
        ))}
      </ul>
    </section>
  );
}
