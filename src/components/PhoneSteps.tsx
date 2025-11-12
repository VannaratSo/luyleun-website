"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  stats: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Download & Register",
    description:
      "Get the LUYLEUN app and create your secure account in minutes with our streamlined onboarding process.",
    image: "/assets/steps/step (2).png",
    features: ["Quick registration", "Identity verification", "Secure login"],
    stats: "< 2 min",
    icon: "heroicons:device-phone-mobile",
  },
  {
    id: 2,
    title: "Apply for Loan",
    description:
      "Fill out our smart application form that adapts to your needs and provides instant preliminary approval.",
    image: "/assets/steps/step (3).png",
    features: ["Smart form", "Instant feedback", "Document upload"],
    stats: "5 min",
    icon: "heroicons:document-text",
  },
  {
    id: 3,
    title: "Get Approved",
    description:
      "Our AI-powered system reviews your application in real-time and provides instant approval decisions.",
    image: "/assets/steps/step (4).png",
    features: ["AI analysis", "Real-time review", "Instant decision"],
    stats: "30 sec",
    icon: "heroicons:shield-check",
  },
  {
    id: 4,
    title: "Receive Funds",
    description:
      "Once approved, funds are transferred directly to your bank account within minutes via secure channels.",
    image: "/assets/steps/step (1).png",
    features: ["Instant transfer", "Bank integration", "Secure payment"],
    stats: "Instant",
    icon: "heroicons:banknotes",
  },
];

export default function PhoneSteps() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const phoneVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={stepVariants}
            className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">
              HOW IT WORKS
            </span>
          </motion.div>

          <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white text-center">
            Get Your Loan in Four Simple Steps
          </h2>

          <motion.p
            variants={stepVariants}
            className="text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed"
          >
            Experience the fastest and most secure way to get approved for a
            loan. Our streamlined process ensures you get the funding you need
            quickly and hassle-free.
          </motion.p>
        </motion.div>

        {/* Clean Steps Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className="relative group"
            >
              {/* Clean Card */}
              <div className="text-center">
                {/* Phone Mockup */}
                <motion.div
                  variants={phoneVariants}
                  className="relative mx-auto mb-6"
                >
                  <div className="relative w-72 h-[580px] mx-auto">
                    {/* Just the Image */}
                    {step.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={step.image}
                          alt={`${step.title} mockup`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon
                          icon={step.icon}
                          className="w-16 h-16 text-gray-400"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
