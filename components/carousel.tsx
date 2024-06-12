"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CarouselPCProps = {
  images: string[];
};

export function CarouselPC({ images }: CarouselPCProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="container mx-auto"
    >
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1 ">
              <div className="flex aspect-video items-center justify-center relative ">
                <Image
                  className="rounded-[10px]"
                  src={_}
                  alt={"image of the restaurant" + _}
                  fill
                  sizes="(max-width: 768px) 500px, (max-width: 1024px) 1024px"
                ></Image>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
