"use client";

import React, { useState } from "react";
import { Sparkles, Zap, FileCode, Hammer, FastForward, Presentation, Users } from "lucide-react";

interface ScheduleItem {
  day: string;
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export default function WeeklySchedule() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(5); // Saturday is default

  const schedule: ScheduleItem[] = [
    {
      day: "Monday",
      title: "AI Insights",
      time: "07:30 PM - 09:00 PM",
      description: "Deep dive into state-of-the-art model architectures, academic research briefs, and industry market releases.",
      icon: <Sparkles className="h-5 w-5" />,
      tags: ["Research", "Deep Learning", "Insights"],
    },
    {
      day: "Tuesday",
      title: "Prompt Challenge",
      time: "06:00 PM - 08:00 PM",
      description: "Interactive live sprints focusing on building highly efficient templates, system instructions, and schemas.",
      icon: <Zap className="h-5 w-5" />,
      tags: ["Interactive", "Prompting", "Sprints"],
    },
    {
      day: "Wednesday",
      title: "Project Review",
      time: "08:00 PM - 10:00 PM",
      description: "Get detailed cohort reviews, peer checks, and pull request refactoring critiques from industry leads.",
      icon: <FileCode className="h-5 w-5" />,
      tags: ["Code Review", "Portfolio", "Collaboration"],
    },
    {
      day: "Thursday",
      title: "AI Tool Showcase",
      time: "07:00 PM - 08:30 PM",
      description: "Hands-on implementation of freshly released frameworks, vector libraries, and deployment tools.",
      icon: <Hammer className="h-5 w-5" />,
      tags: ["Engineering", "Libraries", "Deployment"],
    },
    {
      day: "Friday",
      title: "Career Accelerator",
      time: "06:00 PM - 07:30 PM",
      description: "Resume optimizations, mock system-design reviews, portfolio building, and recruiter panel alignments.",
      icon: <FastForward className="h-5 w-5" />,
      tags: ["Career", "Resume", "Interviews"],
    },
    {
      day: "Saturday",
      title: "AI & ML Workshop",
      time: "02:00 PM - 05:00 PM",
      description: "Full-scale building bootcamps. Construct and deploy active, production-grade applications from scratch.",
      icon: <Presentation className="h-5 w-5" />,
      tags: ["Building", "Cohort Bootcamp", "Production"],
    },
    {
      day: "Sunday",
      title: "Networking Meet",
      time: "04:00 PM - 06:00 PM",
      description: "Virtual and localized peer-to-peer discussions, team forming, brainstorms, and mentor Q&A panels.",
      icon: <Users className="h-5 w-5" />,
      tags: ["Network", "Brainstorming", "Mentorship"],
    },
  ];

  return (
    <section id="schedule" className="relative py-24 px-6 z-10 bg-[#090909]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Cadence</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our Weekly Schedule
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A carefully balanced schedule mapped out to maintain high learning velocity without disrupting professional timelines.
          </p>
        </div>

        {/* Calendar Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 w-full">
          {schedule.map((item, idx) => {
            const isSelected = selectedDayIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedDayIdx(idx)}
                className={`relative p-6 rounded-3xl flex flex-col items-start gap-4 text-left border transition-all duration-300 ${
                  isSelected
                    ? "bg-gold/10 border-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.03] z-10"
                    : "bg-cardDark/40 border-white/5 hover:border-white/10 hover:bg-cardDark/60"
                }`}
              >
                {/* Day Header */}
                <div className="w-full flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    isSelected ? "text-gold" : "text-gray-500"
                  }`}>
                    {item.day.substring(0, 3)}
                  </span>
                  <div className={`p-1.5 rounded-lg border ${
                    isSelected ? "bg-gold text-black border-gold" : "bg-white/5 text-gray-400 border-white/10"
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Event Name */}
                <div className="flex flex-col gap-1">
                  <h3 className={`text-base font-bold tracking-tight ${isSelected ? "text-white" : "text-gray-300"}`}>
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-gray-500 font-medium">{item.time.split(" ")[0]} {item.time.split(" ")[1]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Day Expanded Dashboard Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-cardDark border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-start justify-between gap-8 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold text-black bg-gold rounded-full uppercase tracking-wider">
                {schedule[selectedDayIdx].day}
              </span>
              <span className="text-sm font-semibold text-gray-300">{schedule[selectedDayIdx].time}</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {schedule[selectedDayIdx].title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {schedule[selectedDayIdx].description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {schedule[selectedDayIdx].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive join preview block */}
          <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 w-full md:w-80 shrink-0">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ecosystem Status</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-sm font-bold text-white">Enrollment Open</span>
            </div>
            <p className="text-xs text-gray-500">
              Join now to secure your seat in the upcoming cohort and gain instant access to all weekly sessions.
            </p>
            <a
              href="#newsletter"
              className="w-full text-center py-2.5 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-xs transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              Get Calendar Access
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
