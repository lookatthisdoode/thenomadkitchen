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
import { EditItemButton, DeleteItemButton } from "@/app/ui/dashboard/buttons";

interface ImageCardProps {
  foodItem: MenuItemImage; // Define the type of foodItem prop
}

export default function FoodCard({ foodItem }: ImageCardProps) {
  const { id, name, description, price, image_url } = foodItem;

  return (
    <section className="flex flex-col md:flex-row gap-2 mb-5 border md:p-3">
      {image_url && (
        <CardContent className="md:min-w-[300px] aspect-video relative">
          <Image
            className="object-cover"
            alt={`${name}'s image`}
            src={image_url}
            fill
          ></Image>
        </CardContent>
      )}

      <CardContent className="py-2">
        <CardTitle>{name}</CardTitle>
        <CardTitle className="py-5">{price} K</CardTitle>
        {description && (
          <CardDescription className="py-5">{description}</CardDescription>
        )}
        <div className="flex gap-2">
          <EditItemButton id={id}></EditItemButton>
          <DeleteItemButton id={id}></DeleteItemButton>
        </div>
      </CardContent>
    </section>
  );
}
