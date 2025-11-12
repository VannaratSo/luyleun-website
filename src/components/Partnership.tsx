"use client";

import LogoLoopUI from "@/components/ui/LogoLoop";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Primary Cambodian banking partner
const cambodianLogos = [
  {
    src: "/assets/partner/aba.png",
    alt: "ABA Bank",
    href: "https://www.ababank.com",
  },
  {
    src: "/assets/partner/wing.png",
    alt: "Wing Bank",
    href: "https://www.ababank.com",
  },
];

interface PartnershipProps {
  showTitle?: boolean;
}

export default function Partnership({ showTitle = true }: PartnershipProps) {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          {showTitle && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted Financial Ecosystem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                LUYLEUN partners with ABA Bank, Cambodia's premier financial
                institution, to deliver secure, reliable digital lending
                solutions.
              </p>
            </div>
          )}

          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            Primary Banking Partner
          </h3>
        </div>
      </section>

      {/* Full Width Banking Partner LogoLoop */}
      <div className="w-full h-24 relative overflow-hidden dark:border-gray-700/30 shadow-sm">
        <LogoLoopUI
          logos={cambodianLogos}
          speed={35}
          direction="right"
          logoHeight={60}
          gap={150}
          hoverSpeed={6}
          scaleOnHover
          fadeOut={false}
          ariaLabel="Cambodian banking partners"
        />
      </div>
    </>
  );
}
