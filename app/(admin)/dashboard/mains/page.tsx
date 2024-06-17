import { fetchFilteredItemsByType } from "@/app/lib/data";
import FoodCard from "@/app/ui/dashboard/food-card";

export default async function Mains() {
  const mains = await fetchFilteredItemsByType("main");

  return (
    <section>
      <div className="content">
        {mains.map((item, index) => {
          return <FoodCard foodItem={item} key={index} />;
        })}
      </div>
    </section>
  );
}
