import { fetchFilteredItemsByType } from "@/app/lib/data";
import FoodCard from "@/app/ui/dashboard/food-card";

export default async function Cocktails() {
  const cocktails = await fetchFilteredItemsByType("cocktail");

  return (
    <section>
      <div className="content">
        {cocktails.map((item, index) => {
          return <FoodCard foodItem={item} key={index} />;
        })}
      </div>
    </section>
  );
}
