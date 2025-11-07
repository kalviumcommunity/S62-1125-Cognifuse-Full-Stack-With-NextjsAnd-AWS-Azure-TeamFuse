import Authentication from "@/components/auth/Authentication";

// app/(public)/auth/page.tsx
export default function AuthPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Sign in</h2>
      <p className="text-gray-600">
        Authenticate via GitHub OAuth (to be wired later).
      </p>

      <p>
        This is demo of how current authentication works we do need to add a
        callback to our own custom backend to make the user model and make the
        refresh and acess tokens
      </p>
      <Authentication />
      <button className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black">
        Continue with GitHub
      </button>
    </div>
  );
}
