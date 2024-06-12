import { lobster, nunito } from "@/components/ui/fonts";
import { items } from "@/public/assets/menu.js";

export default function Foodmenu() {
  // server action from DB
  // maybe typing here would be nice
  const food = items.drinks;

  return (
    <section className="py-10 text-center flex flex-col items-center gap-5 container ">
      {food.map((item, index) => (
        <>
          <div
            className={`${lobster.className} text-3xl lg:text-4xl py-2  text-blue-600 flex justify-center align-center`}
          >
            <div className="">{item.name}</div>
            <div className="ml-5">
              {item.price} <span className="text-xl">vnd</span>
            </div>
          </div>
          <p className="min-w-[300px] border-b-2">{item.description}</p>
        </>
      ))}
    </section>
  );
}
