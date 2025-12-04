"use client";
import Link from "next/link";

export default function ErrorUnauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white gap-4">
      <h1 className="text-3xl font-bold">Unauthorized</h1>
      <p className="opacity-80">You need to be logged in to view this page.</p>
      <Link
        href={{ pathname: "/login" }}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition"
      >
        Go to Login
      </Link>
    </div>
  );
}
