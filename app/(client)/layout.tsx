import type { Metadata } from "next";
import "./../globals.css";
import Nav from "@/app/ui/nav/nav";
import ScrollToTop from "@/app/ui/scroll-up";

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
        <div
          id={"scrollable-area"}
          className={`overflow-auto kill-scrollbar absolute inset-2 md:inset-3`}
        >
          <Nav />

          {children}
        </div>
        <div className={`absolute bottom-10 right-10 z-40`}>
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
