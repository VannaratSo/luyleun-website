"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ShowReel() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 dark:bg-blue-600/20 border border-blue-300 dark:border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 bg-linear-to-r from-gray-900 via-blue-600 to-blue-800 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
            Our ShowReel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the innovation behind our digital solutions. Watch how
            we're revolutionizing the financial landscape and creating seamless
            experiences for millions.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] bg-linear-to-br from-zinc-900 to-black dark:from-gray-800 dark:to-gray-900 border border-zinc-800 dark:border-gray-700"
        >
          <div className="aspect-video relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

            {/* Video element */}
            <div className="relative bg-linear-to-br from-zinc-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden">
              {/* YouTube Embed */}
              <iframe
                className="w-full h-full object-cover rounded-3xl"
                src="https://www.youtube.com/embed/q2hlBgGKDzM?controls=1&modestbranding=1&rel=0&autoplay=0"
                title="Digital Innovation Showcase 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ aspectRatio: "16/9" }}
              ></iframe>

              {/* Alternative: Use direct video file URL instead of YouTube */}
              {/* 
              <video
                className="w-full h-full object-cover"
                poster="/assets/hero.jpg"
                controls
                preload="metadata"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="/videos/showreel.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              */}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-white dark:text-gray-100 font-bold text-xl mb-2">
                  Digital Innovation Showcase 2024
                </h4>
                <p className="text-blue-200 dark:text-blue-300 text-sm max-w-md">
                  Experience the future of digital finance through our
                  cutting-edge solutions and user-centric design.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 bg-white/10 dark:bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 dark:border-gray-600/30">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white dark:text-gray-100 text-sm font-medium">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
