"use client";

import LogoLoopUI from "@/components/ui/LogoLoop";

// Primary Cambodian banking partner
const cambodianLogos = [
  {
    src: "/assets/partner/wing.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
  {
    src: "/assets/partner/techo startup.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
  {
    src: "/assets/partner/CYEA.png",
    alt: "ABA Bank",
    href: "https://www.ababank.com",
  },
  {
    src: "/assets/partner/cjap.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
  {
    src: "/assets/partner/bio.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
  {
    src: "/assets/partner/cdta.png",
    alt: "ABA Bank",
    href: "https://www.ababank.com",
  },
  {
    src: "/assets/partner/yeac.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
  {
    src: "/assets/partner/fasmec.png",
    alt: "Wing Bank",
    href: "https://www.wingbank.com",
  },
];

interface PartnershipProps {
  showTitle?: boolean;
}

export default function Partnership({ showTitle = true }: PartnershipProps) {
  return (
    <>
      {/* Header Section */}
      {showTitle && (
        <section className="py-12 px-4 bg-white dark:bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">
                TRUSTED PARTNERS
              </span>
            </div>

            <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white text-center">
              Information of our Partner & Connections
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Partnered with Cambodia's leading financial institutions to
              provide secure and reliable banking services.
            </p>
          </div>
        </section>
      )}

      {/* Full Width Banking Partner LogoLoop */}
      <div className="w-full h-24 relative overflow-hidden">
        <LogoLoopUI
          logos={cambodianLogos}
          speed={35}
          direction="right"
          logoHeight={80}
          gap={150}
          hoverSpeed={1}
          scaleOnHover
          fadeOut={false}
        />
      </div>
    </>
  );
}
