"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  logoAlt: string;
  items: NavItem[];
  activeHref: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

export default function PillNav({
  logo,
  logoAlt,
  items,
  activeHref,
  className = "",
  ease = "power2.easeOut",
  baseColor = "#000000",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#000000",
}: PillNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Find active index
  const activeIndex = items.findIndex((item) => item.href === activeHref);

  // Update pill position
  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    if (targetIndex >= 0 && navRefs.current[targetIndex]) {
      const element = navRefs.current[targetIndex];
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement?.getBoundingClientRect();

      if (parentRect) {
        setPillStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeIndex, items]);

  // Convert ease to CSS transition timing
  const getTransitionTiming = (easeType: string) => {
    const easeMap: Record<string, string> = {
      "power2.easeOut": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      "power2.easeIn": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      "power2.easeInOut": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
      linear: "linear",
    };
    return easeMap[easeType] || "cubic-bezier(0.22, 0.61, 0.36, 1)";
  };

  return (
    <div className={`flex items-center gap-8 ${className}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-28 h-8">
          <Image
            src={logo}
            alt={logoAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Navigation Pills */}
      <nav className="relative flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-sm">
        {/* Animated background pill */}
        <div
          className="absolute rounded-full transition-all duration-500"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
            height: "calc(100% - 8px)",
            top: "4px",
            backgroundColor: pillColor,
            opacity: pillStyle.opacity,
            transition: `all 0.5s ${getTransitionTiming(ease)}`,
            pointerEvents: "none",
          }}
        />

        {/* Navigation items */}
        {items.map((item, index) => {
          const isActive = item.href === activeHref;
          const isHovered = hoveredIndex === index;
          const isInteractive = isActive || isHovered;

          return (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                navRefs.current[index] = el;
              }}
              className="relative z-10 px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 whitespace-nowrap"
              style={{
                color: isInteractive ? hoveredPillTextColor : baseColor,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
