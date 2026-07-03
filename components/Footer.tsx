import React from "react";
import Logo from "./Logo";
import { Github, Linkedin, Instagram, ArrowUpRight, BookOpen } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    community: [
      { name: "Join Community", href: "#newsletter" },
      { name: "Mock Interviews", href: "#features" },
      { name: "Resume Review", href: "#features" },
      { name: "Weekly Schedule", href: "#schedule" },
    ],
    events: [
      { name: "AI Sessions", href: "#features" },
      { name: "Hackathons", href: "#features" },
      { name: "Workshops", href: "#schedule" },
      { name: "Offline Meetups", href: "#roadmap" },
    ],
    resources: [
      { name: "Project Showcase", href: "#features" },
      { name: "AI Insights", href: "#schedule" },
      { name: "AI News", href: "#features" },
      { name: "Book: AI Beyond ChatGPT", href: "#founder" },
    ],
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-20 pb-10 overflow-hidden z-10">
      {/* Footer background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <Logo showSubtext={true} className="items-start" />
          <p className="text-sm text-gray-400 max-w-sm mt-4">
            India's most practical AI learning ecosystem designed to transform AI consumers into builders through hands-on projects, expert mentorship, and a thriving community.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-gold hover:border-gold/20 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Community</h4>
          <ul className="flex flex-col gap-3">
            {footerLinks.community.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Events</h4>
          <ul className="flex flex-col gap-3">
            {footerLinks.events.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Resources</h4>
          <ul className="flex flex-col gap-3">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Book Banner */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-cardDark to-cardDark/50 border border-white/5 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gold/10 rounded-xl border border-gold/20">
              <BookOpen className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h5 className="font-semibold text-white">Founder's Masterpiece Available</h5>
              <p className="text-xs text-gray-400">Get your copy of "AI Beyond ChatGPT" by Rashmi Singh.</p>
            </div>
          </div>
          <a
            href="#founder"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Learn More
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 NexBeyond. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
