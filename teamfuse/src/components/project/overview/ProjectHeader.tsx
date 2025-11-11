// src/components/project/overview/ProjectHeader.tsx
import { Github } from "lucide-react";

export default function ProjectHeader({ overview }: { overview: any }) {
  return (
    <section className="p-6 rounded-2xl bg-gray-900 border border-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">{overview.name}</h1>
          <p className="text-gray-400">{overview.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            Last updated{" "}
            {new Date(overview.updatedAt).toLocaleString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              day: "2-digit",
              month: "short",
            })}
          </p>
        </div>

        <a
          href={overview.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:underline"
        >
          <Github className="w-5 h-5" /> Repo
        </a>
      </div>
    </section>
  );
}
