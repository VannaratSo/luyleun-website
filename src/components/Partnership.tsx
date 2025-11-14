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
            <p className="text-5xl text-black dark:text-white max-w-3xl mx-auto lg:text-left mb-8">
              Our Corporate & Connection
            </p>
            <p className="text-4xl text-black dark:text-white max-w-3xl mx-auto lg:text-left mb-8">
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
