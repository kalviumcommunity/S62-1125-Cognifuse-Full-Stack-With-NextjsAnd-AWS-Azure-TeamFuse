/* eslint-disable @typescript-eslint/no-explicit-any */
import { Github, Clock } from "lucide-react";
import SyncButton from "./SyncButton";

export default function ProjectHeader({ overview }: { overview: any }) {
  return (
    <section className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-blue-900/30 border border-purple-500/20 backdrop-blur-xl overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {overview.name}
          </h1>

          {overview.description && (
            <p className="text-gray-300 mt-2 text-lg">{overview.description}</p>
          )}

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">
                {new Date(overview.updatedAt).toLocaleString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            </div>
          </div>
        </div>

        <a
          href={overview.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-2xl text-white font-medium transition-all shadow-lg shadow-purple-500/25"
        >
          <Github className="w-5 h-5" /> View Repo
        </a>

        <SyncButton projectId={overview.id} />
      </div>
    </section>
  );
}
