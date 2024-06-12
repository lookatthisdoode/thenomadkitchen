import { lobster, nunito } from "@/components/ui/fonts";
import { items } from "@/public/assets/menu.js";

export default function Foodmenu() {
  // server action from DB
  // maybe typing here would be nice
  const drinks = items.drinks;

  // Separate mains and sides based on description presence
  const cocktails = drinks.filter((item) => item.description !== "");
  const coffee = drinks.filter((item) => item.description === "");

  return (
    <>
      {/* Mains Section */}
      <div
        className={`${lobster.className} text-primary text-center text-[2.5em] py-10`}
      >
        Cocktails
      </div>
      <section className="py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {cocktails.map((item, index) => (
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

      {/* Sides Section */}
      <div
        className={`${lobster.className} text-primary text-center text-[2.5em] py-10`}
      >
        Hot Drinks
      </div>
      <section className="py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {coffee.map((item, index) => (
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
