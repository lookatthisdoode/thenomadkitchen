"use client";

import { lobster, nunito } from "@/app/ui/fonts";
import useMousePosition from "@/app/lib/useMousePosition";
import { items } from "@/public/assets/menu.js";
import Image from "next/image";

export default function Foodmenu() {
  // Assuming items.food is your data from the server or DB
  const food = items.food;

  // types
  type menuItem = {
    name: string;
    description: string;
    price: number;
    url?: string | undefined;
  };

  type frameProps = {
    x: number;
    y: number;
    url: string;
    alt: string;
  };

  // Separate mains and sides based on description presence
  const mains: menuItem[] = food.filter((item) => item.description !== "");
  const sides = food.filter((item) => item.description === "");

  // Get cursor position and hovered element's URL
  const { x, y, hoveredElement, url } = useMousePosition();

  // Create a frame for the image
  function Frame({ x, y, url, alt }: frameProps) {
    const frameWidth = 200;
    const frameHeight = 150;
    const style = {
      position: "absolute" as "absolute",
      top: y - frameHeight - frameHeight / 2,
      left: x - frameWidth + frameWidth,
      width: `${frameWidth}px`,
      height: `${frameHeight}px`,
      zIndex: 2, // Position the frame behind other elements
      pointerEvents: undefined, // Ensures the frame doesn't interfere with cursor events
    };

    return (
      <div style={style} className="relative">
        <Image src={url} alt={alt} fill className="object-cover rounded-sm" />
        <div className="absolute inset-0 bg-black opacity-5 rounded-sm"></div>
        <div className="absolute inset-0 backdrop-blur-[0.5px] rounded-sm"></div>
      </div>
    );
  }

  return (
    <>
      {/* Mains Section */}
      <div
        className={`${lobster.className} text-primary text-center text-[2.5em] py-5 lg:py-20`}
      >
        Mains
      </div>

      {/* Frame */}
      {/* {url && <Frame x={x} y={y} url={url} alt="Food item" />} */}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {mains.map((item, index) => (
          <div
            key={index}
            data-url={item.url}
            className="flex gap-6 text-left foodelement"
          >
            <div className="min-w-[150px] xl:min-w-[150px] relative xl:block sm:hidden">
              <Image
                src={item.url}
                alt="image of food"
                fill
                className="object-cover rounded-md"
              ></Image>
            </div>

            <div className="flex flex-col">
              <div
                className={`${nunito.className}text-xl  font-bold text-blue-600 flex justify-between items-baseline`}
              >
                <h1>{item.name}</h1>
                <h2 className="ml-5 ">{item.price + "k"}</h2>
              </div>
              <p className="border-b-2 py-2">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Sides Section */}
      <div
        className={`${lobster.className} text-primary text-center text-[2.5em] py-10`}
      >
        Sides
      </div>
      <section className="py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {sides.map((item, index) => (
          <div key={index} className="flex flex-col text-left">
            <div
              className={`${nunito.className} py-2 font-bold text-blue-600 flex justify-between items-center`}
            >
              <h1>{item.name}</h1>
              <h2 className="ml-5 text-xl">{item.price + "k"}</h2>
            </div>
            <p className="border-b-2">{item.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
