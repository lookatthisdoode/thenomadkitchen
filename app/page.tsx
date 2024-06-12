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
      <div className="py-4 lg:py-10 flex items-baseline justify-between">
        <h1 className="hover:text-yellow-500 ">
          This is front page <span className="text-5xl text-yellow-500">.</span>
        </h1>
        <div className="hover:text-yellow-500">
          <Link href={"/"}>link?</Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {productNames.map((product, index) => {
          return <ReadyCard key={index} title={product}></ReadyCard>;
        })}
      </div>
    </main>
  );
}
