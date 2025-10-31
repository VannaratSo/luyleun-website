"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-[#00144F] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <Image
          src="/images/people-walking.jpg"
          alt="People walking in city"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 max-w-3xl">
          <h2 className="uppercase tracking-wide text-blue-300 mb-3">
            About Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The story of <span className="text-blue-400">GCash</span> is the
            story of the Filipino people
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative bg-gradient-to-b from-[#00144F] to-[#000B2D] py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/gcash-phone.png"
              alt="GCash app"
              width={280}
              height={560}
              className="mx-auto mb-12"
            />
          </motion.div>
          <p className="text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto">
            Every day, millions of Filipinos rely on GCash for their daily
            activities. From buying load to paying bills and sending money, the
            app has become part of the nation’s digital heartbeat.
          </p>
        </div>

        {/* History Section */}
        <div className="relative mt-20 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="max-w-md text-center md:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              Since its introduction to the public in 2004, GCash has
              continuously made financial services more inclusive for Filipinos
              across the country.
            </p>
          </div>
          <Image
            src="/images/old-phone.png"
            alt="Old mobile phone"
            width={200}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Community Section */}
      <section className="relative bg-[#00144F] py-24 px-6 md:px-16">
        <div className="relative max-w-5xl mx-auto text-center">
          <Image
            src="/images/store-owner.jpg"
            alt="Store owner smiling"
            width={900}
            height={600}
            className="rounded-3xl mx-auto mb-10"
          />
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            GCash’s mission, including its social impact initiatives, has made
            it possible for millions of everyday Filipinos — from small business
            owners to large enterprises — to thrive in a more connected
            financial ecosystem.
          </p>
        </div>
      </section>
    </div>
  );
}
