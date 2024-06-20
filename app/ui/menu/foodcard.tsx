import Image from "next/image";
import { nunito } from "@/app/ui/fonts";
import { MenuItemImage } from "@/app/lib/definitions";

export default function FoodCard({ item }: { item: MenuItemImage }) {
  return (
    <div data-url={item.image_url} className="flex gap-6 text-left">
      <div className="min-w-[100px] h-[100px] xl:h-[200px] xl:min-w-[200px] relative lg:block sm:hidden">
        {item.image_url && (
          <Image
            src={item.image_url}
            alt="image of food"
            fill
            className="object-cover rounded-sm"
          ></Image>
        )}
      </div>

      <div className="flex flex-col">
        <div
          className={`leading-8 text-xl lg:text-2xl font-ThirstyRough font-bold text-blue-500 flex justify-between items-baseline`}
        >
          <h1>{item.name}</h1>
          <h2 className="ml-5 ">{item.price + "k"}</h2>
        </div>
        <p className={` text-sm py-2 ${nunito.className}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}
