import { CarouselPC } from "@/components/carousel";
import { lobster } from "@/components/ui/fonts";
import Image from "next/image";

const images = [
  "/assets/interior/image1-7-1024x683.webp",
  "/assets/interior/image2-6-1024x683.webp",
  "/assets/interior/image3-4-1024x683.webp",
  "/assets/interior/image5-2-2.webp",
  "/assets/interior/image6-5-1024x683.webp",
  "/assets/interior/image8-5-1024x683.webp",
  "/assets/interior/image9-5-1024x683.webp",
];

export default function Gallery() {
  return (
    <section className="px-10 text-center">
      <p className="py-7 text-xl md:w-[700px] md:mx-auto md:text-[2em] leading-normal">
        <span className={`${lobster.className} text-[2em] text-blue-500`}>
          Atmosphere: <br />
        </span>{" "}
        Step into our inviting space where rustic charm meets modern elegance.
        The open-space terrace, adorned with breezy white curtains and lush
        greenery, invites you to relax and unwind while enjoying panoramic views
        of [mention specific view, e.g., the sparkling sea or city skyline].
      </p>
      {/* PC carousel */}
      <div className="hidden md:block">
        <CarouselPC images={images} />
      </div>
      {/* Mobile carousel */}
      <div className="flex flex-col gap-4 md:hidden">
        {images.map((image, index) => {
          return (
            <div className="relative aspect-video">
              <Image
                src={image}
                alt={index + "image"}
                fill
                sizes="(max-width: 768px) 500px"
              ></Image>
            </div>
          );
        })}
      </div>
      <p className="py-7 text-xl md:w-[700px] md:mx-auto md:text-[2em] leading-normal">
        <span className={`${lobster.className} text-[2em] text-blue-500`}>
          Cuisine: <br />
        </span>{" "}
        Our menu is a celebration of Mediterranean culinary traditions fused
        with fresh, locally-sourced ingredients. Indulge in flavorful dishes
        such as grilled seafood platters, vibrant salads bursting with
        sun-ripened vegetables, and savory mezze platters perfect for sharing
        with friends.
      </p>
    </section>
  );
}
