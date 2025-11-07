// app/(public)/auth/page.tsx
export default function AuthPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <p className="text-gray-600">
        Authenticate via GitHub OAuth (to be wired later).
      </p>
      <button className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black">
        Continue with GitHub
      </button>
    </div>
  );
}
