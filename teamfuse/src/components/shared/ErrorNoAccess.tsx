"use client";
import Link from "next/link";

export default function ErrorNoAccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white gap-4">
      <h1 className="text-3xl font-bold">Access Denied</h1>
      <p className="opacity-80">
        You don’t have permission to access this project.
      </p>
      <Link
        href={{ pathname: "/" }}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition"
      >
        Go Home
      </Link>
    </div>
  );
}
