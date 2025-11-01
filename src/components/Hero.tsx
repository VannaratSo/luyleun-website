import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title = "Enjoy low to zero fees on your transfers.",
  ctaText = "Go move money",
  ctaLink = "/move-money",
  backgroundImage = "/assets/hero.jpg",
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* CTA Button */}
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
          >
            {ctaText}
            <svg
              className="h-5 w-5"
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

      {/* Phone Mockups (Optional - can be added as additional prop) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Left Phone */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-[240px]">
            {/* Add your phone mockup image here */}
          </div>
        </div>

        {/* Right Phone */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative h-[500px] w-[240px]">
            {/* Add your phone mockup image here */}
          </div>
        </div>
      </div>
    </section>
  );
}
