import type { Metadata } from "next";
import "./../../globals.css";
import { nunito } from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";

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
      <body className={`${nunito.className} container h-screen`}>
        <h1 className="py-5 text-[3em]">Dashboard Page</h1>
        <div className="flex flex-col md:grid grid-cols-6 gap-5 h-4/5">
          <div className="col-span-1 border shadow-xl">
            <div className="">
              <SideNav />
            </div>
          </div>
          <div className="col-span-5 border shadow-xl overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
