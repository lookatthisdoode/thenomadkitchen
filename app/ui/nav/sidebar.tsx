import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import {
  TbSquareX as CloseIcon,
  TbDatabase as DatabaseIcon,
} from "react-icons/tb";
import { nunito } from "@/app/ui/fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/ui/accordion";
import { usePathname } from "next/navigation";
import { Links } from "@/app/lib/links";
import { Button } from "@/app/ui/button";
import ScrollToTop from "@/app/ui/scroll-up";

export default function Sidebar({
  closeSideBar,
}: {
  closeSideBar: CallableFunction;
}) {
  const pathName = usePathname();

  const SubLinks = [
    { name: "Dinners", href: "/menu#dinners" },
    { name: "Salads", href: "/menu#salads" },
    { name: "Sandwiches", href: "/menu#sandwiches" },
    { name: "Pasta", href: "/menu#pasta" },
    { name: "Tapas", href: "/menu#tapas" },
    { name: "Drinks", href: "/menu#drinks" },
  ];

  function handleClose() {
    closeSideBar();
  }

  return (
    <div
      id="sidebar"
      className="fixed inset-2 flex bg-foreground slide-right text-secondary z-30 "
    >
      <div className="flex flex-col gap-4 py-5 items-center text-nomadText w-full">
        <div className="flex w-full px-3 justify-between">
          <Link onClick={handleClose} href={`/`}>
            <Image
              className="w-[150px]"
              src={Logo}
              alt={"The Nomad Kitchen Logotype"}
            />
          </Link>

          <Button onClick={handleClose}>
            <CloseIcon size={"2em"} />
          </Button>
        </div>
        {Links.map((link, index) => {
          if (link.name != "menu") {
            return (
              <Link
                className={`px-2 text-xl text-left border-b border-slate-300 w-full flex items-center gap-2 ${nunito.className} ${
                  pathName === link.href ? "" : ""
                }`}
                key={index + "mobile-link"}
                href={link.href}
                onClick={handleClose}
              >
                {link.href == "/menu"}
                {link.icon({
                  size: "1.5em",
                  color: "hsl(28.67, 8.06%, 20.06%)",
                })}
                {link.name.toUpperCase()}
              </Link>
            );
          } else {
            return (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {link.icon({
                      size: "1.5em",
                      color: "hsl(28.67, 8.06%, 20.06%)",
                    })}
                    {link.name.toUpperCase()}
                  </AccordionTrigger>
                  <AccordionContent>
                    {SubLinks.map((item, index) => {
                      return (
                        <Link
                          onClick={handleClose}
                          className={`${nunito.className} flex-col flex border-b border-slate-300 p-2
                          `}
                          key={index + "sub-link"}
                          href={item.href}
                        >
                          {item.name.toUpperCase()}
                        </Link>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }
        })}
        <div
          className={`flex ${nunito.className} text-foreground justify-center uppercase items-center px-2 py-6 gap-2`}
        >
          <DatabaseIcon size={"2em"} color={"hsl(206.5, 69%, 38.3%)"} />
          <Link
            className={`text-[2em] font-bold text-background`}
            href={"/dashboard/items"}
          >
            EDIT MENU ITEMS
          </Link>
        </div>
      </div>
    </div>
  );
}
