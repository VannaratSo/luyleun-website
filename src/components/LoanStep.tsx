import Image from "next/image";
import Link from "next/link";

interface LoanStepProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const LoanStep: React.FC<LoanStepProps> = ({
  title = "Get your loan in 4 simple steps",
  subtitle = "Fast approval in minutes. No paperwork hassle. Get up to ₱50,000 with flexible payment terms that work for you.",
  ctaText = "Apply for Loan",
  ctaLink = "/apply-loan",
  backgroundImage = "/assets/Background.png",
}) => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Loan background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Removed gradient overlay */}
      </div>

      {/* Main Content Grid Layout */}
      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center space-y-6 text-left">
          {/* Badge */}
          <div className="inline-flex items-center w-fit gap-2 border border-white/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">
              Fast Approval • Low Interest
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            <span className="block">
              {title.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title.split(" ").slice(2, 4).join(" ")}
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">
              {title.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            {subtitle}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-sm">5 Min Approval</span>
            </div>
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white text-sm">Up to ₱50K</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={ctaLink}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
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

            <button className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanStep;
