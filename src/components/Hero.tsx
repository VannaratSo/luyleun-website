"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-linear-to-b from-[#0b4dd4] to-[#1a6eff] text-white overflow-hidden px-6 md:px-16 py-20 rounded-3xl shadow-lg">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-xl space-y-5"
      >
        <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
          New
        </span>

        <h1 className="text-5xl md:text-6xl font-bold">
          Ima<span className="text-[#00e0ff]">G</span>nation
        </h1>

        <p className="text-lg text-white/90 leading-relaxed">
          Unleash your innovative minds and make <br />
          <span className="font-semibold">#FinanceForAll</span> a reality
        </p>

        <button className="inline-flex items-center gap-2 bg-white text-[#0b4dd4] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition">
          ImaGnation <ArrowRight size={18} />
        </button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center"
      >
        <Image
          src="/assets/mockup.png" // replace with your actual image
          alt="Mockup 4 illustration"
          width={800}
          height={800}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Decorative shapes or lines */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/line-pattern.svg')] bg-cover bg-center" />
    </section>
  );
}
