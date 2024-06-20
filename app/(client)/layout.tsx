import type { Metadata } from "next";
import "./../globals.css";
import { nunito } from "@/app/ui/fonts";
import Nav from "@/app/ui/nav/nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Nomad Kitchen",
  description: "Family Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background h-[100dvh] w-[100dvw]">
        {/* Frame */}
        <div className="absolute inset-2 md:inset-3 -z-30 bg-foreground"></div>

        {/* Content */}
        <div className={`overflow-auto absolute inset-2 md:inset-3`}>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
