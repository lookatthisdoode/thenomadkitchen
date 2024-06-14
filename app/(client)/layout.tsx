import type { Metadata } from "next";
import "./../globals.css";
import { nunito } from "@/app/ui/fonts";
import Nav from "@/app/ui/nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "dashboard for thenomadkitchen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
