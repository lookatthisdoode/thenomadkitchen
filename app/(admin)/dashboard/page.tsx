import { fetchFood, fetchSides } from "@/app/lib/data";
import { FoodItem } from "@/app/lib/definitions";
import { UpdateItem } from "@/app/ui/dashboard/buttons";
import { Button } from "@/app/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/ui/card";
import Image from "next/image";

interface FoodCardProps {
  foodItem: FoodItem; // Define the type of foodItem prop
}

//add server action to edit or delete

function FoodCard({ foodItem }: FoodCardProps) {
  const { id, name, description, price, image_url } = foodItem;

  return (
    <section className="flex mb-5 border-b shadow-md">
      <CardContent className=" min-w-[150px] md:min-w-[300px] aspect-video relative">
        <Image
          className="object-cover"
          alt={`${name}'s image`}
          src={image_url}
          fill
        ></Image>
      </CardContent>
      <CardContent className="">
        <CardTitle>{name}</CardTitle>
        <CardTitle className="py-2">{price} K</CardTitle>
        <CardDescription className="py-5">{description}</CardDescription>
        <div className="flex flex-col w-1/3 gap-2">
          <UpdateItem id={id}></UpdateItem>
          <Button variant={"destructive"}>Delete</Button>
        </div>
      </CardContent>
    </section>
  );
}

export default async function Dashboard() {
  const mains = await fetchFood();
  const sides = await fetchSides();
  return (
    <section>
      <h1 className="">Mains</h1>
      <div className="content">
        {mains.map((item, index) => {
          return <FoodCard foodItem={item} key={index} />;
        })}
      </div>
    </section>
  );
}
