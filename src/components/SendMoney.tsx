import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Left: images */}
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <div className="relative flex -space-x-16">
          <Image
            src="/assets/home screen.png"
            alt="Phone displaying received money"
            width={300}
            height={600}
            className="object-contain rotate-[-10deg] z-10"
          />
          <Image
            src="/assets/lanuch screen.png"
            alt="Phone showing transfer confirmation"
            width={300}
            height={600}
            className="object-contain rotate-[10deg] z-20"
          />
        </div>
      </div>

      {/* Right: content */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Move your money freely with <br className="hidden md:block" /> zero
          fees
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Get 20 FREE InstaPay transfers to any bank monthly. <br />
          After that, pay only ₱9 per transfer — or use your Go Rewards points
          to keep it free.
        </p>

        <button className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12l-3.75 3.75M3 12h18"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
