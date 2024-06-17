"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { lobster } from "./fonts";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "./button";
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
  // we can use ref too tell which item is it.
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  // document.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });

  // const showRef = () => {
  //   console.log(sidebarRef.current);
  // };

  const toggleSideBar = () => {
    setSidebar(!sideBar);
  };

  return (
    <nav className={`font-ThirstyRough sticky w-full z-10`}>
      <div className="bg-blue-500 px-auto lg:px-[100px] flex py-7 lg:py-5 items-center justify-center text-secondary lg:justify-between">
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
                className={`px-5 text-2xl text-muted hover:border-b-2 ${
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
        <div
          id="sidebar"
          ref={sidebarRef}
          className="w-full flex lg:hidden bg-blue-500 slidedown text-secondary z-30"
        >
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
