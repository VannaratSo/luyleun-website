"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "AI Credit Score", href: "/CREDIT-SCORE" },
      { label: "Calculator", href: "/CALCULATOR" },
      { label: "Loan Services", href: "/SERVICES/LOANS" },
      { label: "Financial Planning", href: "/SERVICES/PLANNING" },
      { label: "Investment Advisory", href: "/SERVICES/INVESTMENT" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/COMPANY/ABOUT" },
      { label: "Careers", href: "/COMPANY/CAREERS" },
      { label: "News & Media", href: "/COMPANY/NEWS" },
      { label: "Culture", href: "/COMPANY/CULTURE" },
      { label: "Contact Us", href: "/SERVICES/CONTACT" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/SERVICES/HELP" },
      { label: "Documentation", href: "/SERVICES/DOCS" },
      { label: "FAQs", href: "/FAQ" },
      { label: "Security", href: "/SECURITY" },
      { label: "Reports", href: "/COMPANY/REPORTS" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/LEGAL/TERMS" },
      { label: "Privacy Policy", href: "/LEGAL/PRIVACY" },
      { label: "Cookie Policy", href: "/LEGAL/COOKIES" },
      { label: "Compliance", href: "/LEGAL/COMPLIANCE" },
      { label: "Responsible Lending", href: "/LEGAL/LENDING" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/luyleun",
    icon: "iconamoon:facebook-fill",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/luyleun",
    icon: "prime:twitter",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/luyleun",
    icon: "iconamoon:linkedin-fill",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/luyleun",
    icon: "iconamoon:instagram-fill",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@luyleun",
    icon: "bi:youtube",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@luyleun",
    icon: "bi:tiktok",
  },
  {
    name: "Telegram",
    href: "https://t.me/luyleun",
    icon: "bi:telegram",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/85523123456",
    icon: "bi:whatsapp",
  },
];

export default function Footer() {
  const [emailSubscription, setEmailSubscription] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSubscription) {
      setIsSubscribed(true);
      setEmailSubscription("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4 group">
                <div className="relative w-32 h-10 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/LL glass.png"
                    alt="LUYLEUN"
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-110"
                  />
                </div>
              </Link>

              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                CAMBODIA'S FIRST FULLY DIGITAL LENDING PLATFORM. WE PROVIDE
                FAST, SECURE, AND ACCESSIBLE FINANCIAL SOLUTIONS TO HELP YOU
                ACHIEVE YOUR GOALS.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-white/90">
                  <Icon icon="mdi:map-marker" className="w-4 h-4 text-white" />
                  PHNOM PENH, CAMBODIA
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Icon icon="mdi:phone" className="w-4 h-4 text-white" />
                  +855 (0) 23 123 456
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <Icon icon="mdi:email" className="w-4 h-4 text-white" />
                  INFO@LUYLEUN.COM
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon icon={social.icon} className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block group relative"
                      >
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 bg-gradient-to-r from-gray-900/50 via-blue-900/30 to-gray-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/80">
                <p>&copy; 2024 LUYLEUN. ALL RIGHTS RESERVED.</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 uppercase">
                    Licensed & Regulated
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/SECURITY"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 uppercase"
                >
                  <Icon icon="mdi:lock" className="w-4 h-4" />
                  SSL Secured
                </Link>
                <Link
                  href="/LICENSES"
                  className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 uppercase"
                >
                  <Icon icon="mdi:certificate" className="w-4 h-4" />
                  Verified Lender
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
