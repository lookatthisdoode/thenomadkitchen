import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // Matcher to protect only /dashboard pages and allow other resources
  matcher: ["/dashboard((?!/api|/_next/static|/_next/image|.*\\.png$).*)"],
};
