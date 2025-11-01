"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-3 xl:px-12 pt-4">
      <div className="bg-[#f5f5f5] rounded-full px-4">
        <div className="flex items-center justify-between min-h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center h-10 px-2">
            <div className="relative w-32 h-10">
              <Image
                src="/assets/LL glass.png"
                alt="GOtyme bank"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-gray-900 hover:text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
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

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-between flex-1 ml-8">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.label} className="relative group">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        className="px-3 py-2 text-[15px] text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1.5"
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${
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
                        <ul className="bg-white rounded-lg shadow-lg py-1 min-w-160px border-0">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="block px-4 py-2 text-[15px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-3 py-2 text-[15px] text-gray-900 hover:text-gray-600 transition-colors flex items-center"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4 pr-2">
              {/* Search */}
              <Link
                href="/search"
                className="flex items-center gap-3 text-[15px] text-gray-900 hover:text-gray-600 transition-colors px-3 border-r border-gray-300"
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

              {/* Download Button */}
              <button
                className="bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full hover:bg-blue-500 transition-all text-[15px] whitespace-nowrap hover:shadow-md"
                onClick={() => {
                  /* Handle modal open */
                }}
              >
                Download now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 border-t border-gray-300 mt-2 pt-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="w-full px-4 py-2.5 text-left text-[15px] text-gray-900 hover:bg-gray-200 rounded-lg flex items-center justify-between"
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
                                className="block px-4 py-2 text-[15px] text-gray-600 hover:bg-gray-200 rounded-lg"
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
                      className="block px-4 py-2.5 text-[15px] text-gray-900 hover:bg-gray-200 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-2 px-4 border-t border-gray-300 pt-4">
              <Link
                href="/search"
                className="flex items-center gap-2 text-[15px] text-gray-900 hover:bg-gray-200 rounded-lg py-2.5 px-4"
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
              <button
                className="w-full bg-blue-700 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-500 transition-all text-[15px]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  /* Handle modal open */
                }}
              >
                Download now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
