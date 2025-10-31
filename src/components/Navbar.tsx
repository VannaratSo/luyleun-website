"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationLinks = [
    { href: "/about", label: "about" },
    { href: "/services", label: "service" },
    { href: "/investors", label: "investor" },
    { href: "/careers", label: "careers" },
    { href: "/contact", label: "contact" },
    { href: "/calculator", label: "calculator" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/LL glass.png" // replace with your logo
            alt="Logo"
            width={36}
            height={36}
          />
        </Link>

        {/* Left Tabs */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          <button className="text-[#0b4dd4] font-medium border-b-2 border-[#0b4dd4] pb-1">
            Customer
          </button>
          <button className="text-gray-500 font-medium hover:text-[#0b4dd4] pb-1">
            Business
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#0b4dd4] text-sm font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <div className="flex gap-4 mb-4">
              <button className="text-[#0b4dd4] font-semibold border-b-2 border-[#0b4dd4] pb-1">
                Customer
              </button>
              <button className="text-gray-500 font-medium hover:text-[#0b4dd4] pb-1">
                Business
              </button>
            </div>

            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#0b4dd4] text-sm font-medium transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
