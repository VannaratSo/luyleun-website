"use client"; // Required for hooks and GSAP

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhoneSteps() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el.querySelectorAll(".step-card"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 30%",
        },
      }
    );
  }, []);

  const steps = [
    {
      id: 1,
      title: "Download & Register",
      description:
        "Get the LUYLEUN app and create your secure account in minutes with our streamlined onboarding process.",
      image: "/assets/steps/step (2).png",
    },
    {
      id: 2,
      title: "Apply for Loan",
      description:
        "Fill out our smart application form that adapts to your needs and provides instant preliminary approval.",
      image: "/assets/steps/step (3).png",
    },
    {
      id: 3,
      title: "Get Approved",
      description:
        "Our AI-powered system reviews your application in real-time and provides instant approval decisions.",
      image: "/assets/steps/step (4).png",
    },
    {
      id: 4,
      title: "Receive Funds",
      description:
        "Once approved, funds are transferred directly to your bank account within minutes via secure channels.",
      image: "/assets/steps/step (1).png",
    },
  ];

  return (
    <section ref={ref} className="py-25 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-5xl font-normal text-black dark:text-white mb-6">
            Get Your Loan in Four Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24 py-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`step-card flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-72 lg:w-80 h-auto object-contain rounded-3xl"
              />
              <div className="max-w-md text-center lg:text-left">
                <h3 className="text-4xl md:text-4xl  text-black dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-white text-4xl md:text-4xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
