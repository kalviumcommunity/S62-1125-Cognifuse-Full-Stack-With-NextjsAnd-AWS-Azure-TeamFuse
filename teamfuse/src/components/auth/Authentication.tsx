"use client";
import { useSession, signIn, signOut } from "next-auth/react";

function Authentication() {
  const { data: session } = useSession();
  console.log("Session data:", session);
  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Not signed in</p>
        <button onClick={() => signIn("github")}>Sign in</button>
      </div>
    );
  }
}

export default Authentication;
