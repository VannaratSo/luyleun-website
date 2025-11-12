"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  title = "About LUYLEUN Financial Services",
  subtitle = "Empowering financial freedom through innovative digital lending solutions. We believe everyone deserves access to fair, transparent, and fast financial services.",
  ctaText = "Learn More",
  ctaLink = "/about",
}) => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white dark:bg-black">
      {/* Main Content Grid Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Side - Mockup Image */}
        <div className="flex justify-center items-center order-2 lg:order-1">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/ll glass.png"
                alt="LUYLEUN App Mockup"
                width={500}
                height={600}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center items-center space-y-6 text-center order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center w-fit gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2 mx-auto">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-800 dark:text-white text-sm font-medium">
              Trusted • Innovative • Customer-First
            </span>
          </div>

          {/* Main Heading with TextReveal */}
          <TextReveal
            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-black dark:text-white text-center"
            delay={0.1}
            staggerDelay={0.08}
          >
            {title}
          </TextReveal>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-black dark:text-white leading-relaxed max-w-lg mx-auto text-center">
            {subtitle}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                10+ Years
              </span>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                50K+ Customers
              </span>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-purple-600 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                24/7 Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Link
              href={ctaLink}
              className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
            >
              {ctaText}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
