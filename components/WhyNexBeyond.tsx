"use client";

import React, { useRef, MouseEvent } from "react";
import { Cpu, Terminal, Share2, Briefcase } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function WhyCard({ title, description, icon }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card relative p-8 md:p-10 rounded-3xl bg-cardDark border border-white/5 flex flex-col items-start gap-6 group overflow-hidden transition-all duration-300 hover:border-gold/20"
    >
      {/* Glow effect follower */}
      <div ref={glowRef} className="spotlight-glow" />

      {/* Card Icon */}
      <div className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-2xl text-gold group-hover:text-black group-hover:bg-gold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
        {icon}
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function WhyNexBeyond() {
  const features = [
    {
      title: "Learn",
      description: "Hands-on, immersive AI courses designed to take you from foundational neural networks to advanced generative agent architectures.",
      icon: <Cpu className="h-6 w-6 animate-pulse" />,
    },
    {
      title: "Build",
      description: "Create production-ready, industry-grade projects. Turn abstract machine learning theories into deployable, robust AI applications.",
      icon: <Terminal className="h-6 w-6 group-hover:rotate-6 transition-transform" />,
    },
    {
      title: "Connect",
      description: "Bridge the gap with India's premier network of AI researchers, developers, executives, and fellow ambitious builders.",
      icon: <Share2 className="h-6 w-6 group-hover:scale-110 transition-transform" />,
    },
    {
      title: "Grow",
      description: "Fast-track your career with high-impact internship matches, resume building, mock interviews, and direct hiring access.",
      icon: <Briefcase className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />,
    },
  ];

  return (
    <section id="why-nexbeyond" className="relative py-24 px-6 z-10 border-t border-white/5 bg-[#090909]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Why NexBeyond</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Designed for the Next Generation of AI Builders
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            We reject the template-based, certification-only learning model. We believe AI must be built to be mastered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <WhyCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
