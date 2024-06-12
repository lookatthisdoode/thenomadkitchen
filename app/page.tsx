import Image from "next/image";
import { lobster, nunito } from "@/components/ui/fonts";

export default function Home() {
  const openingHours = "Opening Hours: 10:00 AM - 10:00 PM Except Monday";

  const testimonials = [
    {
      name: "Xavier M",
      time: "a month ago",
      text: `Nice place for a cozy and delicious meal! I love the salad with mix of many fresh vegetables and good seasoning (the shrimp salad is especially nice), if you feel super hungry you will find good plates cooked with fresh and health products. Mediterranean style :) The atmosphere is like "eating surrounded by trees 🌳", you'll seat on a terrace upstairs, protected from the rain and in a quite peaceful street 😊 (last month also they added a room with AC if you want to cool down) ❄️`,
    },
    {
      name: "Elaine K",
      time: "a month ago",
      text: `I had the Sunday roast dinner and it was delicious. The meat was cooked perfectly and to our tastes. We also had the apple pie for dessert. The service and staff were so attentive. I will definitely be returning.`,
    },
    {
      name: "윤성환",
      time: "2 months ago",
      text: `The rooftop mood is another world. Food is great. So glad that I could taste Chimichurri sauce here in Danang which is from Argentina and usually served with lamb in Argentina. If I had known they have Chimichurri sauce, I would have definitely ordered lamb. Anyway, I had Gambas al Ajillo as a starter and beef steak and a chorizo burger for me and my mom's main dish. Steak was chopped so easy to eat and good. A chorizo burger, more precisely, it's a chorizo patty burger. I guess this one is the signature burger of this restaurant. It was good too, a little bit spicy(It seems there is chili sauce inside the burger) but made the burger more delicious. and fries served with the burger were perfect. if you are tired of pho, Just visit here. Most of all, staffs can speak English and the chef is kind and friendly.`,
    },
  ];

  return (
    <main className={`${lobster.className}`}>
      <div className="relative h-screen md:overflow-hidden">
        {/* Background Image */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Image
            src={"/assets/interior/image7-5-edited.webp"}
            alt="background picture of the restaurant"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-60" />
        </div>
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 py-20 text-white">
          {/* Bio Section */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Nomad Kitchen
            </h1>
            <p className="text-lg leading-relaxed">
              Welcome to The Nomad Kitchen, a Mediterranean restaurant nestled
              in the heart of Da Nang. Embracing the essence of surf culture and
              Mediterranean flavors, our restaurant offers a unique dining
              experience that transports you to the sunny shores of the
              Mediterranean Sea.
            </p>
          </div>

          {/* Opening Hours Section */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">{openingHours}</p>
          </div>
          {/* Testimonials Section */}
          <div className={`text-left py-10 ${nunito.className}`}>
            <h2
              className={` ${lobster.className} text-3xl text-center md:text-4xl font-bold mb-8`}
            >
              Testimonials
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className=" text-secondary font-semibold rounded-lg"
                >
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
