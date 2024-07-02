"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logo.svg";
import LogoWhite from "@/public/assets/logo-white.svg";
import Image from "next/image";
import { useState } from "react";
import { TbMenu2 as MenuIcon } from "react-icons/tb";
import { Links } from "@/app/lib/links";
import Sidebar from "@/app/ui/nav/sidebar";
import ScrollToTop from "@/app/ui/scroll-up";

export default function Nav() {
  const [sideBar, setSidebar] = useState(false);
  const pathName = usePathname();

  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };

  const halfLength = Math.ceil(Links.length / 2);
  const firstHalfLinks = Links.slice(0, halfLength);
  const secondHalfLinks = Links.slice(halfLength);

  return (
    <nav className="shadow-lg">
      <div className="bg-foreground">
        {/* Mobile Nav */}
        <div
          className={`flex md:hidden items-center justify-center bg-background p-4`}
        >
          <Link href={`/`}>
            <Image
              className="h-[30px] "
              src={LogoWhite}
              alt={"The Nomad Kitchen Logotype White"}
            />
          </Link>
        </div>
        {/* mobile links */}
        {sideBar && <Sidebar closeSideBar={toggleSideBar} />}

        <div onClick={toggleSideBar} className="absolute right-2 top-4">
          <MenuIcon
            style={{
              color: "hsl(29.6 2.38% 98.9%)",
              width: "2em",
              height: "2em",
            }}
          />
        </div>
        {/* pc links */}
        <div className="hidden lg:flex items-center justify-between font-ThirstyRough text-background bg-foreground container py-5 px-2">
          {firstHalfLinks.map((link, index) => (
            <Link
              className={`text-2xl ${pathName === link.href ? "border-t-2" : ""}`}
              key={index + "pc"}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}

          <Link href={`/`}>
            <Image
              className="w-[150px]"
              src={Logo}
              alt={"The Nomad Kitchen Logotype"}
            />
          </Link>

          {secondHalfLinks.map((link, index) => (
            <Link
              className={`text-2xl ${pathName === link.href ? "border-t-2" : ""}`}
              key={index + halfLength + "pc"}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
