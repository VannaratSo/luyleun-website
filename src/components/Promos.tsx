"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Promo {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  daysLeft: number;
}

const promos: Promo[] = [
  {
    id: 1,
    image: "/assets/mockup.png",
    title: "GCrypto Big Trades, Big Rebates Promo",
    description:
      "Get PHP 1,500 every time you trade a total of PHP 100,000 on GCrypto!",
    tags: ["GCrypto"],
    daysLeft: 5,
  },
  {
    id: 2,
    image: "/assets/mockup2.png",
    title: "GSave E-raffle: Ipon to a Million",
    description: "Mag-ipon na sa GSave for a chance to win up to ₱1,000,000!",
    tags: ["GSave"],
    daysLeft: 61,
  },
  {
    id: 3,
    image: "/assets/mockup3.png",
    title: "Get PHP 100 cashback on your bills payment using GCredit",
    description:
      "Settle your bills with GCredit and get PHP 100 cashback minimum spend!",
    tags: ["GCredit", "Pay Bills"],
    daysLeft: 61,
  },
];

export default function Promos() {
  // Simple countdown mockup (refreshes every second)
  const [seconds, setSeconds] = useState(11);
  const [minutes, setMinutes] = useState(32);
  const [hours, setHours] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
      <h2 className="text-[#0b4dd4] text-sm font-semibold mb-2">Promos</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Treat yourself to exciting promos
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        {promos.map((promo) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-between bg-blue-50 px-4 py-3 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md">
                  Ending in
                </span>
                <span className="text-blue-600 font-semibold">
                  {promo.daysLeft} days
                </span>
              </div>
              <div className="flex gap-1 text-xs text-gray-500">
                <span>{hours} hrs</span>:<span>{minutes} mins</span>:
                <span>{seconds} secs</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {promo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h4 className="text-blue-700 font-semibold text-base leading-snug">
                {promo.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {promo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
