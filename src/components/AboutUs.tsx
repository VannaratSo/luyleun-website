import Image from "next/image";
import Link from "next/link";

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  title = "About LUYLEUN Financial Services",
  subtitle = "Empowering financial freedom through innovative digital lending solutions. We believe everyone deserves access to fair, transparent, and fast financial services.",
  ctaText = "Learn More",
  ctaLink = "/about",
  backgroundImage = "/assets/Background.png",
}) => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white dark:bg-black">
      {/* Main Content Grid Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Side - Mockup Image */}
        <div className="flex justify-center items-center order-2 lg:order-1">
          <div className="relative">
            <Image
              src="/assets/mockup.png"
              alt="LUYLEUN App Mockup"
              width={1000}
              height={600}
              className="object-contain"
              priority
            />
            {/* Optional: Add floating elements or animations */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-40"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center space-y-6 text-left order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center w-fit gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-800 dark:text-white text-sm font-medium">
              Trusted • Innovative • Customer-First
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-gray-900 dark:text-white">
            <span className="block">
              {title.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title.split(" ").slice(2, 4).join(" ")}
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl">
              {title.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-200 leading-relaxed max-w-lg">
            {subtitle}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-green-600 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                10+ Years
              </span>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                50K+ Customers
              </span>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 dark:border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-purple-600 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-white text-sm">
                24/7 Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={ctaLink}
              className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
            >
              {ctaText}
              <svg
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
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

            <button className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40 text-gray-800 dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
