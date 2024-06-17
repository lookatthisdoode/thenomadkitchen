import { nunito } from "@/app/ui/fonts";
import { items } from "@/public/assets/menu.js";
import Image from "next/image";
import { fetchFilteredItemsByType } from "@/app/lib/data";
import { MenuItemImage } from "@/app/lib/definitions";

export default async function Foodmenu() {
  // Assuming items.food is your data from the server or DB
  const mains: MenuItemImage[] = await fetchFilteredItemsByType("main");

  return (
    <>
      {/* Mains Section */}
      <div className="font-ThirstyRough text-primary md:text-center text-[2.5em] py-5 lg:py-20 container">
        main course
      </div>

      {/* Frame */}
      {/* {url && <Frame x={x} y={y} url={url} alt="Food item" />} */}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {mains.map((item, index) => (
          <div
            key={index}
            data-url={item.image_url}
            className="flex gap-6 text-left foodelement"
          >
            <div className="min-w-[150px] h-[150px] relative 2xl:block sm:hidden">
              <Image
                src={item.image_url}
                alt="image of food"
                fill
                className="object-cover rounded-sm"
              ></Image>
            </div>

            <div className="flex flex-col">
              <div
                className={`${nunito.className}text-xl font-ThirstyRough font-bold text-blue-600 flex justify-between items-baseline`}
              >
                <h1>{item.name}</h1>
                <h2 className="ml-5 ">{item.price + "k"}</h2>
              </div>
              <p className={`border-b-2 py-2 ${nunito.className}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Sides Section */}
      {/* <div
        className={`font-ThirstyRough text-primary text-center text-[2.5em] py-10`}
      >
        on the side
      </div>
      <section className="py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {sides.map((item, index) => (
          <div key={index} className="flex flex-col text-left">
            <div
              className={`${nunito.className} py-2 font-bold text-blue-500 flex justify-between items-center`}
            >
              <h1>{item.name}</h1>
              <h2 className="ml-5 text-xl">{item.price + "k"}</h2>
            </div>
            <p className="border-b-2">{item.description}</p>
          </div>
        ))}
      </section> */}
    </>
  );
}
