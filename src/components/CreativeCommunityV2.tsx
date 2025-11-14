"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CreativeCommunityImageTwoBG() {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden px-8 bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-16 relative z-10">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md text-center md:text-left"
        >
          <h2 className="text-4xl md:text-4xl   leading-tight">
            Create. Inspire.
            <br />
            <span className="text-[#ffffff]">Share Your Vision.</span>
          </h2>
          <p className="text-white text-4xl mb-10">
            Join a creative network that helps you grow your projects,
            collaborate with others, and showcase your best work.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white text-black rounded-full font-medium  shadow-md hover:bg-gray-900 transition"
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 border border-white rounded-full font-medium hover:bg-black hover:text-white transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Main Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full md:w-[1000px] h-[1000px] flex justify-center items-center"
        >
          <Image
            src="/assets/iphone 12 Pro.png"
            alt="Creative showcase"
            fill
            className="object-contain rounded-3xl drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
