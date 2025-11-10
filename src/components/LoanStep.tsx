"use client";
import React from "react";
import InfiniteMenu from "./InfiniteMenu";

interface LoanStepProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

<div style={{ height: "600px", position: "relative" }}>
  <InfiniteMenu items={items} />
</div>;
const LoanStep: React.FC<LoanStepProps> = ({
  step,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Step Number */}
      <div className="flex items-center mb-6">
        <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
          {step}
        </div>
        <h3 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default LoanStep;
