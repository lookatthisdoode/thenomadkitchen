"use client";
import { signOut } from "next-auth/react";

function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({
      callbackUrl: `${window.location.origin}/`, // Redirects to login page after sign out
    });
  };

  return (
    <button className={`bg-blue-200`} onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
