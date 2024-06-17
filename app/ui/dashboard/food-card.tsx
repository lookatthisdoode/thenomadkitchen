import Image from "next/image";
import { MenuItemImage } from "@/app/lib/definitions";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { UpdateItem } from "@/app/ui/dashboard/buttons";
import { deleteItem } from "@/app/lib/actions";

interface ImageCardProps {
  foodItem: MenuItemImage; // Define the type of foodItem prop
}

export default function FoodCard({ foodItem }: ImageCardProps) {
  const { id, name, description, price, image_url } = foodItem;

  const deleteItemWithId = deleteItem.bind(null, id);

  return (
    <section className="flex mb-5 border p-3">
      {image_url && (
        <CardContent className=" min-w-[150px] md:min-w-[300px] aspect-video relative">
          <Image
            className="object-cover"
            alt={`${name}'s image`}
            src={image_url}
            fill
          ></Image>
        </CardContent>
      )}

      <CardContent className="">
        <CardTitle>{name}</CardTitle>
        <CardTitle className="py-2">{price} K</CardTitle>
        {description && (
          <CardDescription className="py-5">{description}</CardDescription>
        )}
        <div className="flex flex-col w-1/3 gap-2">
          <UpdateItem id={id}></UpdateItem>
          <form action={deleteItemWithId}>
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </CardContent>
    </section>
  );
}
