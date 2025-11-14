"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import TextReveal from "./TextReveal";
import Balatro from "./Balatro";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  backgroundImage?: string;
  showMockups?: boolean;
  features?: Array<{
    icon: string;
    text: string;
    color: string;
  }>;
}

export default function Hero({
  title = "Get Your Digital Loan with LUYLEUN",
  subtitle = "Experience Cambodia's first fully digital lending platform. Get approved in minutes, receive funds instantly, and enjoy flexible repayment terms designed for your lifestyle.",
  ctaText = "Apply for Loan Now",
  ctaLink = "/apply",
  secondaryCtaText = "Learn More",
  backgroundImage = "/assets/hero.jpg",
  showMockups = true,
  features = [
    { icon: "clock", text: "5 Min Approval", color: "green" },
    { icon: "money", text: "Up to $50,000", color: "blue" },
    { icon: "shield", text: "Secure & Licensed", color: "purple" },
  ],
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getIconSvg = (iconType: string, className: string) => {
    const icons = {
      clock: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      money: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      shield: (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    };
    return icons[iconType as keyof typeof icons] || icons.clock;
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: "text-green-600 dark:text-green-400",
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      orange: "text-orange-600 dark:text-orange-400",
      red: "text-red-600 dark:text-red-400",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };
  return (
    <section className="relative h-screen min-h-[1000px] w-full overflow-hidden text-white  bg-black">
      <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-200 dark:border-cyan-700 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              🇰🇭 Cambodia's Premier Digital Lending Platform
            </span>
          </motion.div>

          {/* Main Heading with TextReveal */}
          <TextReveal
            className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-center"
            delay={0.2}
            staggerDelay={0.1}
          >
            FAST, SECURE DIGITAL LOANS FOR MODERN CAMBODIA.
          </TextReveal>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-lg md:text-xl text-white dark:text-white leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Experience Cambodia's most trusted digital lending platform. Get
            instant loan approvals, competitive rates, and seamless digital
            banking – all designed to empower your financial journey.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <Link
              href={ctaLink}
              className="group inline-flex items-center justify-center gap-3 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-400/30 border-2 border-cyan-400/20"
            >
              <span className="text-lg">Apply Now</span>
              <svg
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Secondary Button */}
            <button className="group inline-flex items-center justify-center gap-3 bg-white/10 dark:bg-white/5 backdrop-blur-lg border-2 border-gray-200/50 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/30 text-white dark:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300">
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">Learn More</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* Phone Mockups (Optional - can be added as additional prop) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Left Phone */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-60">
            {/* Add your phone mockup image here */}
          </div>
        </div>

        {/* Right Phone */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-60">
            {/* Add your phone mockup image here */}
          </div>
        </div>
      </div>
    </section>
  );
}
