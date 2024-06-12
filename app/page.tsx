import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ReadyCard } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const cardProps = {
    title: "first card",
    description: "some description",
    button: "press me",
  };

  const productNames = [
    "Bright Star",
    "Soft Wave",
    "Quick Fix",
    "Fresh Breeze",
    "Cool Mint",
    "Pure Bliss",
    "Warm Glow",
    "Sunny Day",
    "Light Touch",
    "Magic Spark",
    "Happy Hour",
    "Easy Flow",
    "True North",
    "Silent Whisper",
    "Dream Catcher",
    "Calm Essence",
  ];

  return (
    <main className="container ">
      <p className="py-7 text-xl md:w-[700px] md:mx-auto md:text-[2em] leading-normal">
        Welcome to 'The Nomad Kitchen' a Mediterranean restaurant nestled in the
        heart of Da Nang. Embracing the essence of surf culture and
        Mediterranean flavors, our restaurant offers a unique dining experience
        that transports you to the sunny shores of the Mediterranean Sea.
      </p>
    </main>
  );
}
