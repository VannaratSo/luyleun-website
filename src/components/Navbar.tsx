"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownSection[];
}

const navLinks: NavLink[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    dropdown: [
      {
        title: "General",
        items: [
          { label: "About Us", href: "/about/us" },
          { label: "Blog", href: "/about/blog" },
          { label: "News & Media", href: "/about/news" },
          { label: "Reviews", href: "/about/reviews" },
        ],
      },
    ],
  },
  {
    label: "SERVICES",
    href: "/services",
    dropdown: [
      {
        title: "Our Services",
        items: [
          { label: "Loan Services", href: "/services/loans" },
          { label: "Financial Planning", href: "/services/planning" },
          { label: "Investment Advisory", href: "/services/investment" },
          { label: "Insurance Solutions", href: "/services/insurance" },
        ],
      },
      {
        title: "Support",
        items: [
          { label: "Documentation", href: "/services/docs" },
          { label: "Help Center", href: "/services/help" },
          { label: "Contact Us", href: "/services/contact" },
        ],
      },
    ],
  },
  { label: "CREDIT SCORE", href: "/credit-score" },
  {
    label: "COMPANY",
    href: "/company",
    dropdown: [
      {
        title: "General",
        items: [
          { label: "About Us", href: "/company/about" },
          { label: "Blog", href: "/company/blog" },
          { label: "News & Media", href: "/company/news" },
          { label: "Company Reviews", href: "/company/reviews" },
        ],
      },
      {
        title: "Careers",
        items: [
          { label: "Careers", href: "/company/careers" },
          { label: "Working at Company", href: "/company/working" },
          { label: "Culture", href: "/company/culture" },
          { label: "Talent Programmes", href: "/company/talent" },
          { label: "STEM Champions", href: "/company/stem" },
          { label: "Diversity & Inclusion", href: "/company/diversity" },
          { label: "Relocation", href: "/company/relocation" },
        ],
      },
      {
        title: "Shareholder Relations",
        items: [
          { label: "Annual Report 2024", href: "/company/annual-report" },
          { label: "Reports and Results", href: "/company/reports" },
        ],
      },
    ],
  },
  { label: "CALCULATOR", href: "/calculator" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-blue-700 border-b border-glass transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group space-x-3 shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-110">
              <Image
                src="/assets/LL glass.png"
                alt="LUYLEUN Logo"
                fill
                className="object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <div className="relative group">
                      <button
                        className="relative text-sm font-medium text-white hover:text-blue-400 py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-1"
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-3/4 transition-all duration-300"></span>
                      </button>

                      {/* Full Screen Mega Dropdown Menu */}
                      <div
                        className={`fixed left-0 right-0 top-20 transition-all duration-300 ${
                          openDropdown === link.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-4"
                        }`}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="bg-blue-700 border-t border-white shadow-2xl">
                          <div className="max-w-7xl mx-auto px-8 py-12">
                            <div
                              className={`grid gap-12 ${
                                link.dropdown.length === 1
                                  ? "grid-cols-1 max-w-md"
                                  : link.dropdown.length === 2
                                  ? "grid-cols-2"
                                  : "grid-cols-3"
                              }`}
                            >
                              {link.dropdown.map((section) => (
                                <div key={section.title}>
                                  <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                                    {section.title}
                                  </h3>
                                  <ul className="space-y-3">
                                    {section.items.map((item) => (
                                      <li key={item.label}>
                                        <Link
                                          href={item.href}
                                          className="block text-base text-white/90 hover:text-white transition-all duration-200 hover:translate-x-1"
                                        >
                                          {item.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="relative text-sm font-medium text-white hover:text-blue-400 py-2 px-4 rounded-lg transition-all duration-200 group"
                    >
                      {link.label}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-3/4 transition-all duration-300"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <ModeToggle />
            <button
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "bg-linear-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/50"
                  : "bg-white  text-blue-600 hover:bg-white/90 hover:shadow-lg"
              }`}
            >
              DOWNLOAD APP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
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
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-gray-900">
            <ul className="py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="w-full px-4 py-2.5 text-left text-sm text-white hover:bg-white/10 rounded-lg flex items-center justify-between transition-all duration-200"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
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
                        <div className="pl-4 mt-1 space-y-3">
                          {link.dropdown.map((section) => (
                            <div key={section.title}>
                              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-4 py-2">
                                {section.title}
                              </h4>
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="px-4 py-4 border-t border-gray-800 space-y-3">
              <ModeToggle />
              <button
                className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
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
