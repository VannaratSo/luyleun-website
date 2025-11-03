"use client";
import Image from "next/image";
import Link from "next/link";
import Threads from "./Threads";
import ShinyText from "./ShinyText";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title = "Enjoy low to zero fees on your transfers.",
  ctaText = "Go move money",
  ctaLink = "/move-money",
  backgroundImage = "/assets/hero.jpg",
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white dark:bg-black">
      {/* Threads Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-black dark:text-white text-sm font-medium">
              Fast Approval • Low Interest • LUYLEUN
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Get Your
            <span className="block">
              <ShinyText
                text="Digital Loan"
                disabled={false}
                speed={3}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              />
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-cyan-300">
              with LUYLEUN
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Experience Cambodia's first fully digital lending platform. Get
            approved in minutes, receive funds instantly, and enjoy flexible
            repayment terms designed for your lifestyle.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-black dark:text-white text-sm">
                5 Min Approval
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-black dark:text-white text-sm">
                Up to $50,000
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-purple-600 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-black dark:text-white text-sm">
                Secure & Licensed
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <Link
              href={ctaLink}
              className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
            >
              Apply for Loan Now
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
            <button className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20 text-black dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Phone Mockups (Optional - can be added as additional prop) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Left Phone */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-[240px]">
            {/* Add your phone mockup image here */}
          </div>
        </div>

        {/* Right Phone */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-[240px]">
            {/* Add your phone mockup image here */}
          </div>
        </div>
      </div>
    </section>
  );
}
