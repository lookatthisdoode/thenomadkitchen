import { nunito } from "@/app/ui/fonts";
import { items } from "@/public/assets/menu.js";
import Image from "next/image";
import { fetchFilteredItemsByType } from "@/app/lib/data";
import { MenuItemImage } from "@/app/lib/definitions";

export default async function Foodmenu() {
  const dinners: MenuItemImage[] = await fetchFilteredItemsByType("dinner");
  const summerDinners: MenuItemImage[] =
    await fetchFilteredItemsByType("summer-dinner");

  return (
    <>
      {/* Mains Section */}
      <div className="font-ThirstyRough text-primary md:text-left text-2xl py-5 lg:py-20 container">
        Dinners
        <div className={`${nunito.className} text-sm`}>
          Served with roasted broccoli, beans, mushrooms, carrots, and gravy
          Your choice of mashed or roasted potatoes
        </div>
      </div>

      {/* Frame */}
      {/* {url && <Frame x={x} y={y} url={url} alt="Food item" />} */}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 container">
        {dinners.map((item, index) => (
          <div
            key={index + item.name}
            data-url={item.image_url}
            className="flex gap-6 text-left"
          >
            <div className="min-w-[100px] h-[100px] xl:h-[200px] xl:min-w-[200px] relative lg:block sm:hidden">
              <Image
                src={item.image_url}
                alt="image of food"
                fill
                className="object-cover rounded-sm"
              ></Image>
            </div>

            <div className="flex flex-col">
              <div
                className={`leading-8 text-xl lg:text-2xl font-ThirstyRough font-bold text-blue-500 flex justify-between items-baseline`}
              >
                <h1>{item.name}</h1>
                <h2 className="ml-5 ">{item.price + "k"}</h2>
              </div>
              <p className={` text-sm border-b-2 py-2 ${nunito.className}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/*Summer dinners*/}
      <div className="font-ThirstyRough text-primary md:text-left text-2xl py-5 lg:py-20 container">
        Summer Dinners
        <div className={`${nunito.className} text-sm`}>
          Served with fries, a small green salad and your choice of Gravy,
          Tar-tar or Chimichurri sauce
        </div>
      </div>

      {/* Frame */}
      {/* {url && <Frame x={x} y={y} url={url} alt="Food item" />} */}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 container">
        {summerDinners.map((item, index) => (
          <div
            key={index + item.name}
            data-url={item.image_url}
            className="flex gap-6 text-left"
          >
            <div className="min-w-[100px] h-[100px] xl:h-[200px] xl:min-w-[200px] relative lg:block sm:hidden">
              <Image
                src={item.image_url}
                alt="image of food"
                fill
                className="object-cover rounded-sm"
              ></Image>
            </div>

            <div className="flex flex-col">
              <div
                className={`leading-8 text-xl lg:text-2xl font-ThirstyRough font-bold text-blue-500 flex justify-between items-baseline`}
              >
                <h1>{item.name}</h1>
                <h2 className="ml-5 ">{item.price + "k"}</h2>
              </div>
              <p className={` text-sm border-b-2 py-2 ${nunito.className}`}>
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
