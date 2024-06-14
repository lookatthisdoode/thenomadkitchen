"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Food",
    href: "/dashboard",
  },
  {
    name: "Drinks",
    href: "/dashboard/drinks",
  },
  {
    name: "StoreInfo",
    href: "/dashboard/store",
  },
  {
    name: "Feedback",
    href: "/dashboard/feedback",
  },
];

export default function SideNav() {
  const currentPath = usePathname();
  // console.log(currentPath);

  return (
    <div className="flex flex-col text-xl">
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
