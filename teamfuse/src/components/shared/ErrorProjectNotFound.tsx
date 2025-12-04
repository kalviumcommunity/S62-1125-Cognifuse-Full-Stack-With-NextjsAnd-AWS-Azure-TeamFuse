"use client";
import Link from "next/link";

export default function ErrorProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white gap-4">
      <h1 className="text-3xl font-bold">Project Not Found</h1>
      <p className="opacity-80">This project might have been deleted.</p>
      <Link
        href={{ pathname: "/" }}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition"
      >
        View All Projects
      </Link>
    </div>
  );
}
