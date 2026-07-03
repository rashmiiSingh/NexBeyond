"use client";

import React, { useRef, MouseEvent } from "react";
import { Quote, Star } from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  type: string;
}

function TestimonialCard({ name, role, company, quote, type }: TestimonialItem) {
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
      className="spotlight-card relative p-8 rounded-3xl bg-cardDark border border-white/5 flex flex-col justify-between group overflow-hidden transition-all duration-300 hover:border-gold/20"
    >
      <div ref={glowRef} className="spotlight-glow" />

      {/* Quote Icon & Stars */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <Quote className="h-8 w-8 text-gold/20 group-hover:text-gold/40 transition-colors" />
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
          ))}
        </div>
      </div>

      {/* Quote content */}
      <p className="relative z-10 text-sm md:text-base text-gray-300 italic leading-relaxed mb-8">
        "{quote}"
      </p>

      {/* Meta Profile */}
      <div className="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center font-bold text-sm text-gold border border-white/10 shrink-0">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-tight">{name}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
            {role} @ <span className="text-gold/80">{company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const reviews: TestimonialItem[] = [
    {
      name: "Aarav Mehta",
      role: "AI Intern",
      company: "Deci AI",
      quote: "Before joining NexBeyond, I was collecting basic Python and ML certificates on Coursera. Here, I built and fine-tuned a custom LLM model on an AWS instance. The interviewers at Deci were blown away by my GitHub projects.",
      type: "Student",
    },
    {
      name: "Priya Sharma",
      role: "Backend Engineer",
      company: "Cognitive Scale",
      quote: "NexBeyond is the premier network for builders. The weekly code reviews and direct access to founder Rashmi Singh completely changed how I think about programming software. It is an elite workspace.",
      type: "Developer",
    },
    {
      name: "Dr. Vikram Sen",
      role: "Director of Research",
      company: "NeuralLabs",
      quote: "As an industry mentor, I guide talented builders working on advanced agent workflows. The calibre of projects built by NexBeyond students is equivalent to professional startup engineering teams.",
      type: "Industry Mentor",
    },
    {
      name: "Neha Goel",
      role: "Senior Recruiter",
      company: "Synthesia India",
      quote: "We struggles to find engineers who actually know how to deploy and run models. NexBeyond is our first channel for hiring. The students do not just know theories; they know how to push code.",
      type: "Recruiter",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold font-display">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Loved by Builders & Companies
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Hear from students, developers, researchers, and recruiters who are active inside the NexBeyond ecosystem.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {reviews.map((review, idx) => (
            <TestimonialCard
              key={idx}
              name={review.name}
              role={review.role}
              company={review.company}
              quote={review.quote}
              type={review.type}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
