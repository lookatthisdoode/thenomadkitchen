import Image from "next/image";
import Form from "@/app/ui/contact-form";
import { lobster } from "@/app/ui/fonts";

const openingHours = [
  "Mon:	Closed",
  "Tue:	12:00 – 10:00 pm",
  "Wed:	12:00 – 10:00 pm",
  "Thu:	12:00 – 10:00 pm",
  "Fri:	12:00 – 10:00 pm",
  "Sat:	12:00 – 10:00 pm",
  "Sun:	12:00 – 10:00 pm",
];
export default function Contact() {
  return (
    <section className="">
      {/* map and address */}
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 container">
        <div className="flex-1/3 relative z-10 mx-auto px-4 md:px-8 text-foreground">
          {/* address */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Address</h1>
            <p className="text-lg leading-relaxed">
              4-1 Lưu Quang Thuận, Đà Nẵng
            </p>
          </div>
          {/* phone */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Phone</h1>
            <p className="text-lg leading-relaxed">096 106 11 73</p>
          </div>
          {/* opening hours */}
          <div className="text-center md:text-left mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Opening hours
            </h1>
            {openingHours.map((day, index) => {
              return (
                <p key={index} className="text-lg leading-relaxed">
                  {day}
                </p>
              );
            })}
          </div>
        </div>

        <iframe
          className="w-full h-full col-span-2 border-4 border-blue-500 rounded-sm"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.65452179454786!2d108.24459258875964!3d16.040960240161102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217ba67f110c9%3A0xb08b0bde0bae84ee!2sThe%20Nomad%20Kitchen!5e0!3m2!1sen!2scz!4v1718194749987!5m2!1sen!2scz"
          // width="700"
          // height="450"
          loading="lazy"
        ></iframe>
      </div>

      <div className="bg-blue-500">
        <Form />
      </div>
    </section>
  );
}
