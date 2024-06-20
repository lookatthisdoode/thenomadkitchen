import { nunito } from "@/app/ui/fonts";
import { fetchFilteredItemsByType } from "@/app/lib/data";
import FoodCard from "@/app/ui/menu/foodcard";

const CategoryHeader = ({ title, bio }: { title: string; bio: string }) => {
  return (
    <div
      className={`font-ThirstyRough text-primary md:text-left text-3xl py-5 lg:py-20 px-3 md:px-0 md:container`}
    >
      {title}
      <div className={`${nunito.className} text-sm`}>{bio}</div>
    </div>
  );
};

export default async function Menu() {
  const categories = [
    {
      title: "Dinners",
      items: await fetchFilteredItemsByType("dinner"),
      bio: "Served with roasted broccoli, beans, mushrooms, carrots, and gravy. Your choice of mashed or roasted potatoes",
    },
    {
      title: "Summer Dinners",
      items: await fetchFilteredItemsByType("summer-dinner"),
      bio: "Served with roasted broccoli, beans, mushrooms, carrots, and gravy. Your choice of mashed or roasted potatoes",
    },
    {
      title: "Sandwiches",
      items: await fetchFilteredItemsByType("sandwich"),
      bio: "Comes w fries",
    },
    {
      title: "Salads",
      items: await fetchFilteredItemsByType("salad"),
      bio: "Some bio should be edited",
    },
    {
      title: "Tapas",
      items: await fetchFilteredItemsByType("tapas"),
      bio: "Some bio should be edited",
    },
    {
      title: "Pasta",
      items: await fetchFilteredItemsByType("pasta"),
      bio: "Some bio should be edited",
    },
    {
      title: "Cocktails",
      items: await fetchFilteredItemsByType("cocktail"),
      bio: "Some bio should be edited",
    },
    {
      title: "Drinks",
      items: await fetchFilteredItemsByType("drink"),
      bio: "Some bio should be edited",
    },
  ];

  return categories.map((category, index) => (
    <div id={category.title.toLowerCase()} key={index + category.title}>
      <CategoryHeader title={category.title} bio={category.bio} />
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 md:container">
        {category.items.map((item, index) => (
          <FoodCard item={item} key={index + "dinners"} />
        ))}
      </section>
    </div>
  ));
}
