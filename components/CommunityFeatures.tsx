"use client";

import React, { useRef, MouseEvent } from "react";
import {
  Video,
  Wand2,
  Cpu,
  Trophy,
  GitBranch,
  Compass,
  FileCheck,
  Code2,
  Newspaper,
  Eye,
  FileText,
  MessageSquareCode
} from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  spanClass?: string;
  badge?: string;
}

function BentoCard({ title, description, icon, spanClass = "col-span-1", badge }: BentoCardProps) {
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
      className={`spotlight-card group relative p-6 rounded-3xl bg-cardDark border border-white/5 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-gold/20 ${spanClass}`}
    >
      {/* Spotlight effect */}
      <div ref={glowRef} className="spotlight-glow" />

      {/* Top section: Icon and Badge */}
      <div className="relative z-10 flex items-start justify-between mb-8">
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-gold group-hover:text-black group-hover:bg-gold transition-all duration-300">
          {icon}
        </div>
        {badge && (
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/20 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Bottom section: Content */}
      <div className="relative z-10 flex flex-col gap-2 mt-auto">
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative accent glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default function CommunityFeatures() {
  const features = [
    {
      title: "Weekly AI Sessions",
      description: "Live, synchronous learning reviews breaking down the latest advancements in deep learning models.",
      icon: <Video className="h-5 w-5" />,
      spanClass: "col-span-1 lg:col-span-2",
      badge: "Live",
    },
    {
      title: "Prompt Engineering",
      description: "Master programmatic prompts, multi-turn schemas, and instruction-tuning structures.",
      icon: <Wand2 className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "AI Agents",
      description: "Architect self-correcting autonomous pipelines utilizing frameworks like LangChain, AutoGen, and CrewAI.",
      icon: <Cpu className="h-5 w-5" />,
      spanClass: "col-span-1 lg:col-span-2",
      badge: "Trending",
    },
    {
      title: "Hackathons",
      description: "High-octane sprint weekends to build functional minimum viable products alongside cohort peers.",
      icon: <Trophy className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "Open Source",
      description: "Contribute code directly to state-of-the-art developer tools and collaborative repository templates.",
      icon: <GitBranch className="h-5 w-5" />,
      spanClass: "col-span-1 lg:col-span-2",
    },
    {
      title: "Career Guidance",
      description: "Tailored mentorship matches to transition you cleanly from academic theory to corporate builders.",
      icon: <Compass className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "Mock Interviews",
      description: "Rigorous technical reviews replicating screening pipelines of premier startups and tech companies.",
      icon: <Code2 className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "Resume Review",
      description: "Structure and tune your profile to cleanly highlight open-source contributions and active code repos.",
      icon: <FileText className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "GitHub Reviews",
      description: "Get detailed pull request analysis, code modularity pointers, and modular refactoring critiques.",
      icon: <MessageSquareCode className="h-5 w-5" />,
      spanClass: "col-span-1 lg:col-span-2",
      badge: "Exclusive",
    },
    {
      title: "Live Coding",
      description: "Interactive building sessions showing real-time debugging, testing, and cloud deployments.",
      icon: <FileCheck className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "AI News",
      description: "Curated updates keeping you aligned with rapid API deprecations, new models, and research releases.",
      icon: <Newspaper className="h-5 w-5" />,
      spanClass: "col-span-1",
    },
    {
      title: "Project Showcase",
      description: "Present completed software assemblies to general recruiters, technical leaders, and angel allocators.",
      icon: <Eye className="h-5 w-5" />,
      spanClass: "col-span-1 lg:col-span-2",
    },
  ];

  return (
    <section id="features" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Ecosystem Features</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered to Help You Succeed
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A comprehensive, high-fidelity grid of benefits designed to support every single aspect of your learning and career development.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              spanClass={feature.spanClass}
              badge={feature.badge}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
