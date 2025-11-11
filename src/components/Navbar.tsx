"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { label: "Save & Invest", href: "/save-and-invest" },
  { label: "Move Money", href: "/move-money" },
  { label: "Service", href: "/service" },
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "Payments", href: "/shop#payments" },
      { label: "Rewards", href: "/shop#rewards" },
      { label: "Promos", href: "/promos" },
    ],
  },
  {
    label: "Credit",
    href: "/credit",
    dropdown: [{ label: "MoreTyme", href: "/pay-later?faq-tags=bnpl" }],
  },
  {
    label: "Media",
    href: "/media",
    dropdown: [
      { label: "All Media", href: "/media" },
      { label: "News", href: "/news" },
      { label: "Stories", href: "/stories" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Help", href: "/help" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    // Add initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-28 h-8 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/assets/LL glass.png"
                alt="GOtyme bank"
                fill
                className="object-contain transition-all duration-300 group-hover:brightness-110"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 group ${
              isScrolled
                ? "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                : "text-white hover:text-cyan-300"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 transform rotate-180 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.label} className="relative">
                  {link.dropdown ? (
                    <div className="relative group">
                      <button
                        className={`relative text-sm font-normal py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 group ${
                          isScrolled
                            ? "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                            : "text-white hover:text-cyan-300"
                        }`}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <span className="relative z-10">{link.label}</span>
                        {/* Animated underline */}
                        <div
                          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full ${
                            isScrolled
                              ? "bg-blue-600 dark:bg-blue-400"
                              : "bg-cyan-300"
                          }`}
                        ></div>
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-1 transition-all duration-200 ${
                          openDropdown === link.label
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <ul className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-3 min-w-48 border border-black/5 dark:border-white/10 backdrop-blur-lg">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block px-5 py-3 text-sm text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 hover:translate-x-1 relative overflow-hidden group"
                              >
                                <span className="relative z-10">
                                  {item.label}
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-cyan-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-sm font-normal py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 group ${
                        isScrolled
                          ? "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                          : "text-white hover:text-cyan-300"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Animated underline */}
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full ${
                          isScrolled
                            ? "bg-blue-600 dark:bg-blue-400"
                            : "bg-cyan-300"
                        }`}
                      ></div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ModeToggle />
            <button
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group overflow-hidden ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25 dark:bg-blue-500 dark:hover:bg-blue-600"
                  : "bg-white text-black hover:bg-white/90 hover:shadow-white/25 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
              onClick={() => {
                /* Handle modal open */
              }}
            >
              <span className="relative z-10">Get Started</span>
              {/* Background overlay */}
              <div
                className={`absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full ${
                  isScrolled
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              ></div>
              {/* Pulse ring effect */}
              <div
                className={`absolute inset-0 rounded-full animate-ping group-hover:animate-pulse opacity-20 ${
                  isScrolled
                    ? "bg-blue-400 dark:bg-blue-300"
                    : "bg-gray-400 dark:bg-gray-500"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden pb-4 border-t mt-2 pt-4 transition-all duration-300 ${
              isScrolled
                ? "border-white/40 dark:border-gray-600/40 bg-black/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-b-2xl"
                : "border-white/30 dark:border-gray-600/30"
            }`}
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="w-full px-4 py-2.5 text-left text-[15px] text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-700/50 rounded-lg flex items-center justify-between"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {openDropdown === link.label && (
                        <ul className="pl-4 mt-1 space-y-1">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-[15px] text-white/80 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50 rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2.5 text-[15px] text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-700/50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-2 px-4 border-t border-white/30 dark:border-gray-600/30 pt-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/search"
                  className="flex items-center gap-2 text-[15px] text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-700/50 rounded-lg py-2.5 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Search</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
                <ModeToggle />
              </div>
              <button
                className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm shadow-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  /* Handle modal open */
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
