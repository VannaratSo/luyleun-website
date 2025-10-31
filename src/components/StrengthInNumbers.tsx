"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Stat {
  id: number;
  image: string;
  number: string;
  text: string;
}

const stats: Stat[] = [
  {
    id: 1,
    image: "/images/stat1.jpg",
    number: "94M",
    text: "Filipinos have used GCash",
  },
  {
    id: 2,
    image: "/images/stat2.jpg",
    number: "Over 9M Filipinos",
    text: "with savings via GSave",
  },
  {
    id: 3,
    image: "/images/stat3.jpg",
    number: "6M merchants",
    text: "and social sellers on the app",
  },
  {
    id: 4,
    image: "/images/stat4.jpg",
    number: "200+",
    text: "Countries with Filipino GCash Users",
  },
  {
    id: 5,
    image: "/images/stat5.jpg",
    number: "3M+",
    text: "Actual trees planted",
  },
  {
    id: 6,
    image: "/images/stat6.jpg",
    number: "Over 3M borrowers",
    text: "through GLoan, GSave, and GCredit",
  },
];

export default function StrengthInNumbers() {
  return (
    <section className="bg-[#f3f8ff] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b4dd4] mb-12">
          Strength, in numbers
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Background Image */}
              <div className="relative w-full h-64">
                <Image
                  src={stat.image}
                  alt={stat.text}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-5 left-0 w-full text-white px-6 text-left">
                <h3 className="text-3xl font-bold drop-shadow-md">
                  {stat.number}
                </h3>
                <p className="text-sm font-medium leading-tight opacity-90">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
