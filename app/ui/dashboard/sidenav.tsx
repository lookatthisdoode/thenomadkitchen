"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Store Info",
    href: "/dashboard",
  },
  {
    name: "Items",
    href: "/dashboard/items",
  },
  {
    name: "Feedback",
    href: "/dashboard/feedback",
  },
  {
    name: "Back",
    href: "/",
  },
];

export default function SideNav() {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col text-sm md:text-xl">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={`${
              currentPath === link.href ? "bg-slate-200" : null
            } p-2 hover:bg-slate-100`}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
