import type { Metadata, Viewport } from "next";
import "./../../globals.css";
import { nunito } from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";
import Link from "next/link";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // those below bad for accessibility
  maximumScale: 1,
  userScalable: false,
};

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
      <body className={`${nunito.className} md:container h-screen`}>
        <div className="flex justify-between bg-blue-500 py-5 px-2 text-secondary items-baseline">
          <h1 className="text-2xl"> Dashboard Page</h1>
          <Link href="/">
            <h2>Back</h2>
          </Link>
        </div>
        <div className="flex flex-col md:grid grid-cols-6 gap-5 h-[90%]">
          <div className="col-span-1 md:border shadow-xl">
            <div className="">
              <SideNav />
            </div>
          </div>
          <div className="col-span-5 md:border md:shadow-xl overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
