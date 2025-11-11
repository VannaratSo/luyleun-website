"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";
import TextReveal from "./TextReveal";

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
    image: "/assets/handiphone.png",
    features: ["Quick registration", "Identity verification", "Secure login"],
    stats: "< 2 min",
    icon: "heroicons:device-phone-mobile",
  },
  {
    id: 2,
    title: "Apply for Loan",
    description:
      "Fill out our smart application form that adapts to your needs and provides instant preliminary approval.",
    image: "/assets/mockups/step2-phone.png",
    features: ["Smart form", "Instant feedback", "Document upload"],
    stats: "5 min",
    icon: "heroicons:document-text",
  },
  {
    id: 3,
    title: "Get Approved",
    description:
      "Our AI-powered system reviews your application in real-time and provides instant approval decisions.",
    image: "/assets/mockups/step3-phone.png",
    features: ["AI analysis", "Real-time review", "Instant decision"],
    stats: "30 sec",
    icon: "heroicons:shield-check",
  },
  {
    id: 4,
    title: "Receive Funds",
    description:
      "Once approved, funds are transferred directly to your bank account within minutes via secure channels.",
    image: "/assets/mockups/step4-phone.png",
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
    <section className="py-20 bg-black overflow-hidden">
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

          <TextReveal
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center"
            delay={0.1}
            staggerDelay={0.08}
          >
            Get Your Loan in Four Simple Steps
          </TextReveal>

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
                {/* Phone Mockup - Large Size with Hover Content */}
                <motion.div
                  variants={phoneVariants}
                  className="relative mx-auto mb-8 group-hover:scale-105 transition-transform duration-300 group/phone"
                >
                  <div className="relative w-72 h-[580px] mx-auto">
                    {/* Large Phone Frame */}
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-600 overflow-hidden relative">
                      {step.image ? (
                        <Image
                          src={step.image}
                          alt={`${step.title} mockup`}
                          fill
                          className="object-cover rounded-3xl"
                        />
                      ) : (
                        // Simple clean fallback
                        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          <Icon
                            icon={step.icon}
                            className="w-16 h-16 text-gray-400 dark:text-gray-500"
                          />
                        </div>
                      )}

                      {/* Hover Content Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-3xl opacity-0 group-hover/phone:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-white">
                        {/* Main Icon */}
                        <div className="relative mb-6">
                          <div className="w-20 h-20 bg-white/10 border-2 border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                            <Icon
                              icon={step.icon}
                              className="w-10 h-10 text-white"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                            <span className="text-xs font-bold text-white">
                              {step.id}
                            </span>
                          </div>
                        </div>
                        {/* Title */}
                        <h4 className="text-xl font-bold text-white mb-3 text-center">
                          {step.title}
                        </h4>
                        {/* Simplified Features */}
                        <div className="space-y-2 w-full max-w-48 mb-6">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="text-center">
                              <span className="text-sm text-white font-normal">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>{" "}
                        {/* Time Badge */}
                        <div className="flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-2">
                          <Icon
                            icon="heroicons:clock"
                            className="w-4 h-4 text-blue-300"
                          />
                          <span className="text-sm font-medium text-white">
                            {step.stats}
                          </span>
                        </div>
                      </div>
                    </div>
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
