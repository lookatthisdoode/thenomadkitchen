import type { NextAuthConfig } from "next-auth";

// When you try to access /dashboard, this fires because its specified as a protected route in middleware
// If this check fails (checking if active user is present) => redirect to specified /login with callbackUrl as search param
// Then login page managing auth and redirect
// NOTE that it only has page override and providers set as [] because actual authentication happens elsewhere using bcrypt that's not allowed here

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return !!auth?.user;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
