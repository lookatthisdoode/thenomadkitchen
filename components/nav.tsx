"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lobster } from "./ui/fonts";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { CiMenuBurger } from "react-icons/ci";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Food Menu",
    href: "/foodmenu",
  },
  { name: "Drink Menu", href: "/drinkmenu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const [sideBar, setSidebar] = useState(false);
  const pathName = usePathname();

  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };
  return (
    <nav className={lobster.className}>
      <div className="bg-blue-500 px-auto lg: px-10 flex py-7 lg:py-5 items-center justify-center text-background lg:justify-between">
        <Image
          className="w-[150px]"
          src={Logo}
          alt={"The Nomad Kitchen Logotype"}
        />

        <div
          onClick={toggleSideBar}
          className="bg-blue-500 absolute top-6 right-2 lg:hidden"
        >
          <CiMenuBurger size={"1.5em"} />
        </div>
        {/* pc links */}
        <div className=" hidden lg:flex">
          {links.map((link, index) => {
            return (
              <Link
                className={`px-5 text-2xl hover:border-b-2 ${
                  pathName === link.href ? "border-b-2" : ""
                }`}
                key={index}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      {/* mobile links */}
      {sideBar && (
        <div className="flex lg:hidden bg-blue-500 slidedown text-background">
          <div className="flex flex-col gap-4 py-5 items-center w-full">
            {links.map((link, index) => {
              return (
                <Link
                  className={`px-5 text-2xl text-center min-w-[300px] ${
                    pathName === link.href ? "border-2" : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
