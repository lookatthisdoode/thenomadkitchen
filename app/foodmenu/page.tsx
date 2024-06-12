import { lobster, nunito } from "@/components/ui/fonts";
import { items } from "@/public/assets/menu.js";

export default function Foodmenu() {
  // Assuming items.food is your data from the server or DB
  const food = items.food;

  // Separate mains and sides based on description presence
  const mains = food.filter((item) => item.description !== "");
  const sides = food.filter((item) => item.description === "");

  return (
    <>
      {/* Mains Section */}
      <div
        className={`${lobster.className} text-primary text-center text-[2.5em] py-10`}
      >
        Mains
      </div>
      <section className="py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start container">
        {mains.map((item, index) => (
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
