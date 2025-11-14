"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface FeedbackItem {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

const feedbackData: FeedbackItem[] = [
  {
    id: 1,
    name: "Sophea Chan",
    role: "Small Business Owner",
    company: "Local Restaurant",
    rating: 5,
    comment:
      "LUYLEUN has transformed how I manage my business finances. The loan approval was incredibly fast, and the app is so easy to use. I got the funding I needed in just 30 minutes!",
    avatar: "/assets/avatars/user1.jpg",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Pisach Lim",
    role: "Marketing Manager",
    company: "Tech Startup",
    rating: 5,
    comment:
      "The digital loan process is seamless. No paperwork, no long waits. Just quick, reliable service that helped me expand my startup. Highly recommend LUYLEUN!",
    avatar: "/assets/avatars/user2.jpg",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Sreymom Keo",
    role: "Freelancer",
    company: "Graphic Designer",
    rating: 4,
    comment:
      "Great customer service and transparent fees. The mobile app works perfectly and the loan terms are very fair. This is the future of banking in Cambodia.",
    avatar: "/assets/avatars/user3.jpg",
    date: "2 weeks ago",
  },
  {
    id: 4,
    name: "Dara Sok",
    role: "Shop Owner",
    company: "Electronics Store",
    rating: 5,
    comment:
      "I was able to get emergency funding for my business in under an hour. The process was completely digital and stress-free. LUYLEUN saved my business!",
    avatar: "/assets/avatars/user4.jpg",
    date: "3 weeks ago",
  },
  {
    id: 5,
    name: "Kimeng Phan",
    role: "Student",
    company: "University Student",
    rating: 5,
    comment:
      "Perfect for young people like me. The app is modern, intuitive, and the financial education resources are incredibly helpful. Love the user experience!",
    avatar: "/assets/avatars/user5.jpg",
    date: "1 month ago",
  },
];

const Feedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex = currentIndex + newDirection;
      if (newIndex >= 0 && newIndex < feedbackData.length) {
        setDirection(newDirection);
        setCurrentIndex(newIndex);
      } else if (newIndex >= feedbackData.length) {
        // Loop back to first slide
        setDirection(1);
        setCurrentIndex(0);
      } else if (newIndex < 0) {
        // Loop back to last slide
        setDirection(-1);
        setCurrentIndex(feedbackData.length - 1);
      }
    },
    [currentIndex]
  );

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
  };

  // Auto-slide functionality with progress bar
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      return;
    }

    const duration = 4000; // 4 seconds
    const interval = 50; // Update every 50ms
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += interval;
      const progressPercent = (elapsed / duration) * 100;
      setProgress(progressPercent);

      if (elapsed >= duration) {
        paginate(1);
        setProgress(0);
      }
    }, interval);

    return () => {
      clearInterval(progressInterval);
      setProgress(0);
    };
  }, [currentIndex, isAutoPlaying, isPaused, paginate]);

  // Reset progress when paused or manual navigation
  useEffect(() => {
    if (isPaused || !isAutoPlaying) {
      setProgress(0);
    }
  }, [isPaused, isAutoPlaying]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) setIsPaused(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        icon="solar:star-bold"
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl  max-w-4xl lg:text-6xl  mb-6">
            What Our Customers Say
          </h2>

          <p className="text-4xl text-black dark:text-white max-w-4xl lg:text-left mx-auto">
            Real stories from real people who trust LUYLEUN for their financial
            needs. Join thousands of satisfied customers across Cambodia.
          </p>
        </motion.div>

        {/* Feedback Slider */}
        <div className="relative">
          <div
            className="relative h-[400px] md:h-[300px] overflow-hidden rounded-3xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Avatar & Info */}
                    <div className="shrink-0 text-center md:text-left">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-700 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                        <span className="text-white font-bold text-xl">
                          {feedbackData[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {feedbackData[currentIndex].name}
                      </h4>
                      <p className="text-blue-300 text-sm mb-1">
                        {feedbackData[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {feedbackData[currentIndex].company}
                      </p>
                      <div className="flex justify-center md:justify-start gap-1 mb-2">
                        {renderStars(feedbackData[currentIndex].rating)}
                      </div>
                      <p className="text-gray-500 text-xs">
                        {feedbackData[currentIndex].date}
                      </p>
                    </div>

                    {/* Comment */}
                    <div className="flex-1">
                      <Icon
                        icon="solar:quote-up-bold"
                        className="w-8 h-8 text-blue-400 mb-4"
                      />
                      <blockquote className="text-gray-200 text-lg leading-relaxed italic">
                        "{feedbackData[currentIndex].comment}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              paginate(-1);
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 bg-white/10 text-white hover:bg-white/20 hover:scale-110"
          >
            <Icon icon="solar:arrow-left-bold" className="w-5 h-5 mx-auto" />
          </button>

          <button
            onClick={() => {
              paginate(1);
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 bg-white/10 text-white hover:bg-white/20 hover:scale-110"
          >
            <Icon icon="solar:arrow-right-bold" className="w-5 h-5 mx-auto" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 bg-white/10 text-white hover:bg-white/20 hover:scale-110"
            title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
          >
            <Icon
              icon={isAutoPlaying ? "solar:pause-bold" : "solar:play-bold"}
              className="w-4 h-4 mx-auto"
            />
          </button>
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && !isPaused && (
          <div className="w-full max-w-md mx-auto mt-6 mb-2">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-blue-400 to-blue-700 transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-4">
          {feedbackData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-400 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Status */}
        <div className="text-center mt-4">
          <span className="text-xs text-gray-500">
            {isAutoPlaying
              ? isPaused
                ? "Auto-play paused (hover to pause)"
                : "Auto-playing"
              : "Auto-play disabled"}
          </span>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">10K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
