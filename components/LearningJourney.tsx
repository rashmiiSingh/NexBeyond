"use client";

import React, { useState } from "react";
import { UserPlus, BookOpen, Terminal, Users, Award, Briefcase, GraduationCap, Trophy, UserCheck } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function LearningJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      title: "Join",
      description: "Enter the ecosystem, pass a diagnostic assessment, and integrate into our localized study and building cohorts.",
      icon: <UserPlus className="h-5 w-5" />,
    },
    {
      title: "Learn",
      description: "Acquire deep theoretical foundations under the guidance of top AI developers, authors, and industry mentors.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Build",
      description: "Form teams or build solo. Develop multi-agent pipelines, customized language model fine-tunes, and visual models.",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "Collaborate",
      description: "Participate in weekly sprints, localized and national hackathons, and contribute to production-grade open source repos.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Mentorship",
      description: "Receive ongoing 1-on-1 and cohort code reviews, career roadmap alignment, and expert code architecture critiques.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Portfolio",
      description: "Polish and deploy your applications. Document and showcase your work via structured technical blogs and GitHub repositories.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Internship",
      description: "Match with partnered AI startups and tech conglomerates for rapid corporate integration and practical experience.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Job",
      description: "Secure high-value placements as prompt engineers, full-stack AI developers, ML engineers, or solution architects.",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: "Become Mentor",
      description: "Give back to the ecosystem. Transition to a senior mentor role, lead sessions, author content, and build future talent.",
      icon: <UserCheck className="h-5 w-5" />,
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-6 z-10 bg-[#090909]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your Journey to AI Mastery
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A comprehensive, structured pathway designed to transform you from a consumer of AI into an builder of future ecosystems.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4 w-full">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative p-5 rounded-2xl flex flex-col items-center gap-4 text-center border transition-all duration-300 ${
                  isSelected
                    ? "bg-gold/10 border-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-105 z-10"
                    : "bg-cardDark/40 border-white/5 hover:border-white/10 hover:bg-cardDark/60"
                }`}
              >
                {/* Index circle */}
                <div className={`absolute top-2 left-2 text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border ${
                  isSelected ? "border-gold/30 text-gold bg-gold/10" : "border-white/10 text-gray-500"
                }`}>
                  {idx + 1}
                </div>

                {/* Icon Wrapper */}
                <div className={`p-3 rounded-xl border transition-all duration-300 ${
                  isSelected ? "bg-gold text-black border-gold" : "bg-white/5 text-gray-400 border-white/10"
                }`}>
                  {step.icon}
                </div>

                {/* Step Title */}
                <span className={`text-sm font-bold tracking-tight ${isSelected ? "text-gold" : "text-gray-300"}`}>
                  {step.title}
                </span>

                {/* Visual Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[30px] -right-[12px] w-[20px] h-[1px] bg-white/10 z-0 pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="p-8 md:p-10 rounded-3xl bg-cardDark border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="p-5 bg-gold/10 border border-gold/20 rounded-2xl text-gold shrink-0">
            {steps[activeStep].icon}
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gold uppercase tracking-wider">Phase {activeStep + 1}</span>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
              <span className="text-xs text-gray-400 font-medium">Stage of Development</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {steps[activeStep].title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-4xl">
              {steps[activeStep].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
