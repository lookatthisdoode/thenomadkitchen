import { CarouselPC } from "@/app/ui/carousel";
import { lobster } from "@/app/ui/fonts";
import Image from "next/image";

const interiorImages = [
  "/assets/interior/image3-4-1024x683.webp",
  "/assets/interior/image7-5-edited.webp",
  "/assets/interior/image9-5-1024x683.webp",
];

const foodImages = [
  "/assets/food/1.jpg",
  "/assets/food/2.jpg",
  "/assets/food/3.jpg",
  "/assets/food/4.jpg",
  "/assets/food/5.jpg",
  "/assets/food/6.jpg",
  "/assets/food/7.jpg",
  "/assets/interior/image1-7-1024x683.webp",
  "/assets/interior/image2-6-1024x683.webp",
  "/assets/interior/image5-2-2.webp",
  "/assets/interior/image6-5-1024x683.webp",
  "/assets/interior/image8-5-1024x683.webp",
];

export default function Gallery() {
  return (
    <section className="px-3 md:px-10 text-center ">
      <div className="py-7 text-xl text-left md:w-3/5 md:mx-auto md:text-[2em] leading-normal">
        <span className={`font-ThirstyRough text-[2em] text-background`}>
          Atmosphere <br />
        </span>
        Step into our inviting space where rustic charm meets modern elegance.
        The open-space terrace, adorned with breezy white curtains and lush
        greenery, invites you to relax and unwind while enjoying panoramic views
        of [mention specific view, e.g., the sparkling sea or city skyline].
      </div>
      {/* PC carousel interior*/}
      <div className="hidden md:block py-7">
        <CarouselPC images={interiorImages} />
      </div>
      {/* Mobile carousel interior*/}
      <div className="flex flex-col gap-4 md:hidden py-7">
        {interiorImages.map((image, index) => (
          <div key={index} className="relative w-full aspect-video">
            <Image
              src={image}
              alt={`image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 500px"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="py-7 text-xl md:w-3/5 text-right md:mx-auto md:text-[2em] leading-normal">
        <span className={`font-ThirstyRough text-[2em] text-blue-500`}>
          Cuisine <br />
        </span>
        Our menu is a celebration of Mediterranean culinary traditions fused
        with fresh, locally-sourced ingredients. Indulge in flavorful dishes
        such as grilled seafood platters, vibrant salads bursting with
        sun-ripened vegetables, and savory mezze platters perfect for sharing
        with friends.
      </div>
      {/* PC carousel food*/}
      <div className="hidden md:block py-7">
        <CarouselPC images={foodImages} />
      </div>
      {/* Mobile carousel food*/}
      <div className="flex flex-col gap-4 md:hidden py-7">
        {foodImages.map((image, index) => (
          <div key={index} className="relative aspect-video">
            <Image
              src={image}
              alt={`image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 500px"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
