"use client";

import React, { useRef, MouseEvent } from "react";
import {
  GraduationCap,
  Code2,
  BookmarkCheck,
  Compass,
  Briefcase,
  Share2,
  Trophy,
  Award
} from "lucide-react";

interface WhyJoinCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function WhyJoinCard({ title, description, icon }: WhyJoinCardProps) {
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
      className="spotlight-card relative p-6 rounded-3xl bg-cardDark border border-white/5 flex items-start gap-5 group overflow-hidden transition-all duration-300 hover:border-gold/20"
    >
      <div ref={glowRef} className="spotlight-glow" />

      {/* Icon */}
      <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gold group-hover:text-black group-hover:bg-gold transition-all duration-300 shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-base font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyJoin() {
  const benefits = [
    {
      title: "Learn from Experts",
      description: "Direct access to senior engineers, published ML authors, and open-source project leads.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Hands-on Projects",
      description: "Stop writing simple scripts. Develop multi-agent assemblies, local LLM fine-tunes, and deployment layers.",
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      title: "AI Certifications",
      description: "Earn project-verified certifications that showcase real competency in deep learning models.",
      icon: <BookmarkCheck className="h-5 w-5" />,
    },
    {
      title: "Career Support",
      description: "Weekly resume optimizations, mock interviews, system design guides, and profile tuning.",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      title: "Industry Networking",
      description: "Bridge connections with venture capitalists, early-stage founders, and cohort developers.",
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      title: "Hackathons",
      description: "Accelerated, high-velocity coding weekends aimed at creating functional software models.",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: "Internships",
      description: "Direct application loops matching active builders to partner firms for placement cycles.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Community Recognition",
      description: "Earn ecosystem rank, moderate sub-cohort channels, and showcase projects directly in showcases.",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <section id="why-join" className="relative py-24 px-6 z-10 bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Benefits</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Join NexBeyond?
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A comprehensive overview of what makes NexBeyond a premier ecosystem for high-velocity AI builders.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {benefits.map((benefit, idx) => (
            <WhyJoinCard
              key={idx}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
