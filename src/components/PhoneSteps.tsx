"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  stats: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Download & Register",
    description:
      "Get the LUYLEUN app and create your secure account in minutes with our streamlined onboarding process.",
    image: "/assets/handiphone.png",
    features: ["Quick registration", "Identity verification", "Secure login"],
    stats: "< 2 min",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Apply for Loan",
    description:
      "Fill out our smart application form that adapts to your needs and provides instant preliminary approval.",
    image: "/assets/mockups/step2-phone.png",
    features: ["Smart form", "Instant feedback", "Document upload"],
    stats: "5 min",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Get Approved",
    description:
      "Our AI-powered system reviews your application in real-time and provides instant approval decisions.",
    image: "/assets/mockups/step3-phone.png",
    features: ["AI analysis", "Real-time review", "Instant decision"],
    stats: "30 sec",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Receive Funds",
    description:
      "Once approved, funds are transferred directly to your bank account within minutes via secure channels.",
    image: "/assets/mockups/step4-phone.png",
    features: ["Instant transfer", "Bank integration", "Secure payment"],
    stats: "Instant",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
    ),
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
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
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
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            variants={stepVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white mb-6"
          >
            Get Your Loan in{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </motion.h2>

          <motion.p
            variants={stepVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
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
                {/* Phone Mockup - Clean Minimal */}
                <motion.div
                  variants={phoneVariants}
                  className="relative mx-auto mb-8 group-hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-48 h-96 mx-auto">
                    {/* Minimal Phone Frame */}
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-600 overflow-hidden shadow-lg">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={`${step.title} mockup`}
                          fill
                          className="object-cover rounded-3xl"
                        />
                      ) : (
                        // Ultra clean fallback
                        <div className="w-full h-full bg-gray-50 dark:bg-gray-700 flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                            {step.icon}
                          </div>
                          <div className="space-y-2 w-full max-w-24">
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full w-3/4 mx-auto"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full w-1/2 mx-auto"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Step Number - Minimal */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-medium shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Content - Ultra Clean */}
                <div className="space-y-4">
                  <h3 className="text-xl font-normal text-gray-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Time Badge - Minimal */}
                  <div className="inline-block">
                    <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                      {step.stats}
                    </span>
                  </div>

                  {/* Features - Clean List */}
                  <div className="space-y-2 pt-2">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Arrow (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-gray-300 dark:text-gray-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
