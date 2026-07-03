"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why NexBeyond", href: "#why-nexbeyond" },
    { name: "Journey", href: "#journey" },
    { name: "Community Features", href: "#features" },
    { name: "Schedule", href: "#schedule" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Founder", href: "#founder" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090909]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Logo showSubtext={false} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#newsletter"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-black bg-gold rounded-full overflow-hidden transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Join Community
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#090909]/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col gap-5 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-[1px] bg-white/5 my-2" />
          <a
            href="#newsletter"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1.5 py-3 text-center text-black font-semibold bg-gold rounded-full hover:bg-gold-light transition-all"
          >
            Join Community
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
