import { fetchFilteredItemsByType } from "@/app/lib/data";
import FoodCard from "@/app/ui/dashboard/food-card";

export default async function Drinks() {
  const drinks = await fetchFilteredItemsByType("drink");

  return (
    <section>
      <div className="content">
        {drinks.map((item, index) => {
          return <FoodCard foodItem={item} key={index} />;
        })}
      </div>
    </section>
  );
}
