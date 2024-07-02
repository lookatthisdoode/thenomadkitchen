import Link from "next/link";

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

export default async function SideNav() {
  return (
    <div className="flex flex-col text-sm md:text-xl">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={` p-2 hover:bg-slate-100`}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
