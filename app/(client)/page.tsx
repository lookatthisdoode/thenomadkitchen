"use client";
import Image from "next/image";
import { lobster, nunito } from "@/app/ui/fonts";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { mapRange } from "@/app/lib/utils";
import { VscGithub } from "react-icons/vsc";

export default function Home() {
  const openingHours = "Opening Hours: 10:00 AM - 10:00 PM Except Monday";
  const [scrolledDown, setScrollPosition] = useState(35);
  const scrollableRef = useRef<HTMLDivElement>(null);

  // Pass it to the image.
  const parallaxStyle = {
    objectPosition: `${scrolledDown}%`,
  };

  const handleScroll = () => {
    if (scrollableRef.current) {
      const scrollableElement = scrollableRef.current?.parentElement;

      if (!scrollableElement) {
        return;
      } else {
        const scrollTop = scrollableElement.scrollTop;
        const scrollHeight =
          scrollableElement.scrollHeight - scrollableElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPosition(mapRange(scrolled, 0, 100, 35, 100));
      }
    }
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current?.parentElement;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollableElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const testimonials = [
    {
      name: "Xavier M",
      time: "a month ago",
      text: `Nice place for a cozy and delicious meal! I love the salad with mix of many fresh vegetables and good seasoning (the shrimp salad is especially nice), if you feel super hungry you will find good plates cooked with fresh and health products. Mediterranean style :) The atmosphere is like "eating surrounded by trees 🌳", you'll seat on a terrace upstairs, protected from the rain and in a quite peaceful street 😊 (last month also they added a room with AC if you want to cool down) ❄️`,
    },
    {
      name: "Elaine K",
      time: "a month ago",
      text: `I had the Sunday roast dinner and it was delicious. The meat was cooked perfectly and to our tastes. We also had the apple pie for dessert. The service and staff were so attentive. I will definitely be returning.`,
    },
    {
      name: "윤성환",
      time: "2 months ago",
      text: `The rooftop mood is another world. Food is great. So glad that I could taste Chimichurri sauce here in Danang which is from Argentina and usually served with lamb in Argentina. If I had known they have Chimichurri sauce, I would have definitely ordered lamb. Anyway, I had Gambas al Ajillo as a starter and beef steak and a chorizo burger for me and my mom's main dish. Steak was chopped so easy to eat and good. A chorizo burger, more precisely, it's a chorizo patty burger. I guess this one is the signature burger of this restaurant. It was good too, a little bit spicy(It seems there is chili sauce inside the burger) but made the burger more delicious. and fries served with the burger were perfect. if you are tired of pho, Just visit here. Most of all, staffs can speak English and the chef is kind and friendly.`,
    },
  ];

  return (
    <div
      ref={scrollableRef}
      className="flex flex-col gap-[20dvh] pt-[80dvh] md:pt-[60dvh]"
    >
      {/* Bg image */}
      <div className="fixed inset-2 md:inset-3 -z-30 bg-foreground ">
        <Image
          src={"/assets/interior/image7-5-edited.webp"}
          alt="Background picture of the restaurant"
          fill
          className="object-cover md:p-3"
          style={parallaxStyle}
          // quality={100}
          sizes="(max-width: 768px) 1024px, (max-width: 1204px) 1024px"
        />
        {/* Filter */}
        <div className="absolute inset-0 md:inset-3 bg-black bg-opacity-20"></div>
      </div>
      {/* Sunday Roast  */}
      <div
        id="sunday-roast"
        className="flex items-center justify-center bg-foreground font-ThirstyRough"
      >
        <div className="p-2 md:w-3/5 text-nomadText flex">
          <div className="md:flex py-20 gap-5">
            <div className="text-left md:text-left">
              <p className="text-4xl text-nomadText">Sunday Roast</p>
              <p
                className={`${nunito.className}  text-md py-5 leading-relaxed`}
              >
                Welcome to a Mediterranean restaurant nestled in the heart of Da
                Nang. Embracing the essence of surf culture and Mediterranean
                flavors, our restaurant offers a unique dining experience that
                transports you to the sunny shores of the Mediterranean Sea.
              </p>
              <Link href={"/contact#contact-form"}>
                <Button
                  variant={"destructive"}
                  className="bg-background w-full text-foreground md:w-auto text-xl hover:bg-opacity-10"
                >
                  Book a table!
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className={`relative hidden xl:block xl:min-w-[300px]`}>
              <Image
                src={"/assets/interior/image9-5-1024x683.webp"}
                alt={"Sunday roast image"}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 720px, (max-width: 1204px) 1024px"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* Dining Style */}
      <div className="flex items-center justify-center bg-foreground font-ThirstyRough">
        <div className="p-2 md:w-3/5 text-nomadText flex">
          <div className="md:flex py-20 gap-5">
            {/* Image */}
            <div className={`relative hidden xl:block xl:min-w-[300px]`}>
              <Image
                src={"/assets/interior/image9-5-1024x683.webp"}
                alt={"Sunday roast image"}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 720px, (max-width: 1204px) 1024px"
              ></Image>
            </div>
            <div className="text-right md:text-right">
              <p className="text-4xl text-nomadText">Dining Style</p>
              <p
                className={`${nunito.className}  text-md py-5 leading-relaxed`}
              >
                Welcome to a Mediterranean restaurant nestled in the heart of Da
                Nang. Embracing the essence of surf culture and Mediterranean
                flavors, our restaurant offers a unique dining experience that
                transports you to the sunny shores of the Mediterranean Sea.
              </p>
              <Link href={"/menu"}>
                <Button
                  variant={"destructive"}
                  className="bg-background w-full text-foreground md:w-auto text-xl hover:bg-opacity-90"
                >
                  Go to menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div className="flex items-center justify-center bg-foreground font-ThirstyRough">
        <div className="p-2 md:w-3/5 text-nomadText flex-col items-center">
          <div className="md:flex py-20 gap-5 justify-between">
            {/* Address */}
            <div className="text-center md:text-center">
              <p className="text-4xl text-nomadText">Address</p>
              <p
                className={`${nunito.className}  text-md py-5 leading-relaxed`}
              >
                4-1 Lưu Quang Thuận, Đà Nẵng
              </p>
            </div>
            {/* Hours */}
            <div className="text-center md:text-center">
              <p className="text-4xl text-nomadText">Opening hours</p>
              <p
                className={`${nunito.className}  text-md py-5 leading-relaxed`}
              >
                10:00 AM - 10:00 PM Except Monday
              </p>
            </div>
            {/* Phone */}
            <div className="text-center md:text-center">
              <p className="text-4xl text-nomadText">Contact</p>
              <p
                className={`${nunito.className}  text-md py-5 leading-relaxed`}
              >
                096 106 11 73
              </p>
            </div>
          </div>
          <footer
            className={`${nunito.className} pt-52 text-[0.5em] flex flex-col items-center gap-1 text-nomadTextGray`}
          >
            <Link href={"https://github.com/lookatthisdoode"}>
              <VscGithub className={`w-[15px] h-[15px] `} />
            </Link>
            <div>Made by Radchenko Andrei</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
