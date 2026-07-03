"use client";

import React, { useState, useEffect } from "react";
import { Users, GraduationCap, Briefcase, FileCode, Landmark, Trophy, ArrowRight, Star } from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  x: number;
  y: number;
}

export default function Ecosystem() {
  const [selectedNodeId, setSelectedNodeId] = useState("center");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 1024);
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nodes: NodeItem[] = [
    {
      id: "students",
      label: "Students",
      icon: <Users className="h-5 w-5" />,
      description: "Ambitious students from top colleges who want to build real-world AI applications rather than just collect paper certificates.",
      x: 15,
      y: 25,
    },
    {
      id: "mentors",
      label: "Mentors",
      icon: <GraduationCap className="h-5 w-5" />,
      description: "AI Developers, published authors, and active researchers who provide detailed code reviews and career guidance.",
      x: 15,
      y: 75,
    },
    {
      id: "experts",
      label: "Industry Experts",
      icon: <Star className="h-5 w-5" />,
      description: "Engineers from major AI tech companies and startups conducting mock interviews and reviewing production architectures.",
      x: 50,
      y: 15,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FileCode className="h-5 w-5" />,
      description: "Functional multi-agent workflows, model fine-tunes, and full-stack software repos that serve as your real proof-of-skill.",
      x: 50,
      y: 85,
    },
    {
      id: "companies",
      label: "Companies",
      icon: <Landmark className="h-5 w-5" />,
      description: "Partnered software firms, venture capitals, and high-growth AI startups looking for validated builder talent.",
      x: 85,
      y: 25,
    },
    {
      id: "jobs",
      label: "Jobs & Internships",
      icon: <Briefcase className="h-5 w-5" />,
      description: "Direct talent placements and internships matching builders with high-impact product teams.",
      x: 85,
      y: 75,
    },
  ];

  const centerNode = {
    id: "center",
    label: "NexBeyond Core",
    description: "India's largest AI-first builder ecosystem. The central gateway coordinating cohorts, projects, mentors, and employers.",
  };

  const getActiveNode = () => {
    if (selectedNodeId === "center") return centerNode;
    return nodes.find((n) => n.id === selectedNodeId) || centerNode;
  };

  const activeNode = getActiveNode();

  return (
    <section id="ecosystem" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Network</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Community Ecosystem Diagram
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A cohesive network where students, experts, and companies interact fluidly to build code and launch careers.
          </p>
        </div>

        {/* Visual Network Grid (Responsive Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Network Diagram (left 7 cols) */}
          <div className="lg:col-span-7 flex items-center justify-center p-6 bg-cardDark/30 border border-white/5 rounded-3xl relative h-[450px] overflow-hidden">
            
            {/* Ambient Background Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            {/* SVG Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {nodes.map((node) => {
                const isActive = selectedNodeId === node.id;
                return (
                  <g key={node.id}>
                    {/* Glowing Connection Line */}
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke={isActive ? "#D4AF37" : "rgba(255, 255, 255, 0.08)"}
                      strokeWidth={isActive ? "2" : "1"}
                      className="transition-all duration-300"
                    />
                    {/* Moving pulse particles along line */}
                    <circle
                      r="2"
                      fill="#D4AF37"
                      className="animate-[pulse_1.5s_infinite]"
                      style={{
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    >
                      <animateMotion
                        path={`M ${isLargeScreen ? 450 * 0.5 : 300 * 0.5} ${450 * 0.5} L ${node.x * 4.5} ${node.y * 4.5}`}
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Center Core Node */}
            <button
              onClick={() => setSelectedNodeId("center")}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-full border transition-all duration-300 z-20 ${
                selectedNodeId === "center"
                  ? "bg-gold text-black border-gold shadow-[0_0_35px_rgba(212,175,55,0.4)] scale-110"
                  : "bg-black text-gold border-gold/40 hover:border-gold"
              }`}
            >
              <Trophy className="h-7 w-7" />
            </button>

            {/* Orbiting Satellite Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-4 rounded-full border transition-all duration-300 z-10 ${
                    isSelected
                      ? "bg-gold text-black border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105"
                      : "bg-cardDark text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                  aria-label={node.label}
                >
                  {node.icon}
                  {/* Small tooltip label */}
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-400 bg-black/80 border border-white/5 rounded pointer-events-none whitespace-nowrap opacity-80">
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Node detail display card (right 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-8 rounded-3xl bg-cardDark border border-white/5 relative overflow-hidden h-[450px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider">Ecosystem Node</span>
                <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                <span className="text-[10px] text-gray-400 font-medium">Interactive Graph</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {activeNode.label}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {activeNode.description}
              </p>
            </div>

            {/* Quick action button inside card */}
            <div className="mt-auto">
              <a
                href="#newsletter"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
              >
                Explore Cohort Placements
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
