"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import TextReveal from "./TextReveal";

interface VideoData {
  id: string;
  title: string;
  description: string;
  duration: string;
  url: string;
}

// Helper function to convert YouTube watch URL to embed URL
const convertToEmbedUrl = (url: string): string => {
  // Handle different YouTube URL formats
  let videoId = "";

  if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("youtube.com/watch?v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/embed/")) {
    return url; // Already an embed URL
  }

  return `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0`;
};

const videoData: VideoData[] = [
  {
    id: "main",
    title: "Digital Innovation Showcase 2024",
    description:
      "Experience the future of digital finance through our cutting-edge solutions and user-centric design.",
    duration: "5:42",
    url: "https://www.youtube.com/watch?v=q2hlBgGKDzM",
  },
  {
    id: "features",
    title: "App Features Overview",
    description:
      "Discover the powerful features that make our financial app stand out.",
    duration: "2:30",
    url: "https://www.youtube.com/watch?v=q2hlBgGKDzM",
  },
  {
    id: "security",
    title: "Security & Protection",
    description:
      "Learn about our advanced security measures and data protection protocols.",
    duration: "1:45",
    url: "https://www.youtube.com/watch?v=Iv6NvHq38Wo",
  },
  {
    id: "ux",
    title: "User Experience Design",
    description:
      "See how we've crafted an intuitive and seamless user experience.",
    duration: "3:15",
    url: "https://www.youtube.com/watch?v=s7KYcm6FM2s",
  },
  {
    id: "success",
    title: "Customer Success Stories",
    description:
      "Real stories from customers who've transformed their financial lives.",
    duration: "4:20",
    url: "https://www.youtube.com/watch?v=raPqmBlRuRk&list=PL_qHNjnVEN4t6FPEcHtnosOBC2tJU0fyu&index=4",
  },
];

export default function ShowReel() {
  const [currentVideo, setCurrentVideo] = useState<VideoData>(videoData[0]);

  const handleVideoSelect = (video: VideoData) => {
    setCurrentVideo(video);
  };
  return (
    <section className="bg-white dark:bg-black text-white py-16 px-4 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">SHOWCASE</span>
          </div>
          <TextReveal
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white text-center"
            delay={0.1}
            staggerDelay={0.1}
          >
            Our ShowReel
          </TextReveal>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] bg-linear-to-br from-zinc-900 to-black dark:from-gray-800 dark:to-gray-900 border border-zinc-800 dark:border-gray-700 max-w-5xl mx-auto"
        >
          <div className="aspect-video relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm"></div>

            {/* Video element */}
            <div className="relative bg-linear-to-br from-zinc-900 to-black dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden h-full">
              {/* YouTube Embed */}
              <iframe
                key={currentVideo.id}
                className="w-full h-full rounded-3xl"
                src={convertToEmbedUrl(currentVideo.url)}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-white dark:text-gray-100 font-bold text-xl mb-2">
                  {currentVideo.title}
                </h4>
                <p className="text-blue-200 dark:text-blue-300 text-sm max-w-md">
                  {currentVideo.description}
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

        {/* Sub Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {videoData.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleVideoSelect(video)}
              className={`relative group cursor-pointer transition-all duration-200 ease-out ${
                currentVideo.id === video.id
                  ? "shadow-lg shadow-blue-600/20"
                  : "hover:shadow-md"
              }`}
            >
              <div
                className={`aspect-video rounded-lg overflow-hidden transition-all duration-200 ease-out shadow-sm relative ${
                  currentVideo.id === video.id
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                {/* Video Thumbnail */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
                  <img
                    src={`https://img.youtube.com/vi/${
                      convertToEmbedUrl(video.url)
                        .split("/embed/")[1]
                        ?.split("?")[0]
                    }/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-200">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                        currentVideo.id === video.id
                          ? "bg-blue-600 shadow-md"
                          : "bg-white shadow-sm group-hover:bg-blue-600 group-hover:shadow-md"
                      }`}
                    >
                      <Play
                        className={`w-5 h-5 ml-0.5 transition-colors duration-200 ${
                          currentVideo.id === video.id
                            ? "text-white"
                            : "text-gray-700 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Selected Indicator */}
                  {currentVideo.id === video.id && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium shadow-sm">
                      Playing
                    </div>
                  )}
                </div>

                {/* Video Info Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white text-sm font-medium mb-1 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-200 text-xs">{video.duration}</p>
                      <div className="text-blue-400 text-xs font-medium">
                        Click to play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
