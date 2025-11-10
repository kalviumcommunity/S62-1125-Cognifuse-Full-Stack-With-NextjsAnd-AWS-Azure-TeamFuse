"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function Authentication() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log("Session data:", session);

  const handleLogin = () => {
    setIsLoading(true);
    try {
      signIn("github", {
        callbackUrl: searchParams.get("from") || "/dashboard",
      });
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      signOut();
      router.replace("/");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  if (session) {
    return (
      <Button
        onClick={handleLogout}
        disabled={isLoading}
        className="w-full h-12 text-base bg-slate-900 hover:bg-slate-800 transition-all"
        size="lg"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Signing Out...</span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5" />
            <span>Sign Out</span>
          </div>
        )}
      </Button>
    );
  } else {
    return (
      <Button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full h-12 text-base bg-slate-900 hover:bg-slate-800 transition-all"
        size="lg"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Connecting...</span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </div>
        )}
      </Button>
    );
  }
}

export default Authentication;
