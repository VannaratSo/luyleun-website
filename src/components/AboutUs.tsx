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
          <p className="text-4xl md:text-4xl text-black lg:text-left dark:text-white">
            {subtitle}
          </p>

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
