import { fetchFilteredItemsByType } from "@/app/lib/data";
import FoodCard from "@/app/ui/dashboard/food-card";

export default async function Sides() {
  const sides = await fetchFilteredItemsByType("side");

  return (
    <section>
      <div className="content">
        {sides.map((item, index) => {
          return <FoodCard foodItem={item} key={index} />;
        })}
      </div>
    </section>
  );
}
