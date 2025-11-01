"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ShowReel() {
  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Our ShowReel
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800"
        >
          <div className="aspect-video relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

            {/* Video element */}
            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-white font-bold text-xl mb-2">
                  Digital Innovation Showcase 2024
                </h4>
                <p className="text-blue-200 text-sm max-w-md">
                  Experience the future of digital finance through our
                  cutting-edge solutions and user-centric design.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center group">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Projects Completed
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">50M+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Users Reached
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Countries Served
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 group-hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
