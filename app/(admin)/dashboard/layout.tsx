import type { Metadata, Viewport } from "next";
import "./../../globals.css";
import { nunito } from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";
import { auth } from "@/auth";
import SignoutButton from "@/app/ui/dashboard/signout-button";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <div className={`px-4 md:container pt-10`}>
          <h1 className={`text-3xl`}>
            Hello {session?.user?.name ? session.user.name : "Admin"}
          </h1>
          <SignoutButton />
        </div>

        <div className="flex flex-col md:grid grid-cols-6 gap-5 md:container md:pt-10">
          <div className="col-span-1 md:border shadow-xl p-2 md:p-0">
            <div className="">
              <SideNav />
            </div>
          </div>
          <div className="col-span-5 md:border md:shadow-xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
