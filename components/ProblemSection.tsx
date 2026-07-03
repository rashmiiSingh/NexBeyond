"use client";

import React, { useState } from "react";
import { Check, X, ShieldAlert, Rocket, HelpCircle } from "lucide-react";

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState<"traditional" | "nexbeyond">("nexbeyond");

  const comparisonData = [
    {
      feature: "Core Focus",
      traditional: "Passive theoretical lectures & slides",
      nexbeyond: "Active project building & deployments",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
    {
      feature: "Validation",
      traditional: "Generic, non-verified PDF certificates",
      nexbeyond: "Live portfolio of functional AI repositories",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
    {
      feature: "Project Experience",
      traditional: "Basic copy-paste Jupyter notebooks",
      nexbeyond: "Production-ready, multi-agent AI ecosystems",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
    {
      feature: "Guidance & Mentorship",
      traditional: "Zero direct access to senior builders",
      nexbeyond: "1-on-1 critique & support from industry experts",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
    {
      feature: "Ecosystem & Network",
      traditional: "Isolated, competitive, textbook learning",
      nexbeyond: "Collaborative national network of innovators",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
    {
      feature: "Career Output",
      traditional: "Generic resume templates & cold applications",
      nexbeyond: "Direct internship matching & job placements",
      traditionalStatus: false,
      nexbeyondStatus: true,
    },
  ];

  return (
    <section id="problem-section" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[600px] h-[300px] bg-red-950/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">The Reality Shift</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Traditional AI Learning is Broken
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A comparison of textbook theories versus the pragmatic, project-first philosophy of NexBeyond.
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden justify-center">
          <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("traditional")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "traditional"
                  ? "bg-red-950/40 text-red-400 border border-red-900/50"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Traditional
            </button>
            <button
              onClick={() => setActiveTab("nexbeyond")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === "nexbeyond"
                  ? "bg-gold/10 text-gold border border-gold/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              NexBeyond
            </button>
          </div>
        </div>

        {/* Interactive Comparison Cards (Mobile view) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {/* Traditional Learning Card */}
          {activeTab === "traditional" && (
            <div className="p-8 rounded-3xl bg-cardDark/50 border border-red-950/20 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 text-red-400">
                <ShieldAlert className="h-6 w-6" />
                <h3 className="text-xl font-bold tracking-tight">Traditional Learning</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {comparisonData.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-400 items-start">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-300 block mb-0.5">{item.feature}</strong>
                      {item.traditional}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NexBeyond Card */}
          {activeTab === "nexbeyond" && (
            <div className="p-8 rounded-3xl bg-cardDark border border-gold/10 flex flex-col gap-6 relative overflow-hidden shadow-[0_10px_35px_-10px_rgba(212,175,55,0.05)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 text-gold">
                <Rocket className="h-6 w-6" />
                <h3 className="text-xl font-bold tracking-tight">NexBeyond</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {comparisonData.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-400 items-start">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">{item.feature}</strong>
                      {item.nexbeyond}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Interactive Comparison Table */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-white/5 bg-cardDark/30 backdrop-blur-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-cardDark/70">
                <th className="p-6 text-sm font-semibold text-gray-400 tracking-wider">Features</th>
                <th className="p-6 text-sm font-semibold text-red-400/90 tracking-wider flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Traditional Academy
                </th>
                <th className="p-6 text-sm font-semibold text-gold tracking-wider">
                  <span className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" /> NexBeyond Ecosystem
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/[0.01] transition-colors duration-200"
                >
                  <td className="p-6 text-sm font-bold text-white tracking-wide">{row.feature}</td>
                  <td className="p-6 text-sm text-gray-400 flex-1 border-r border-white/5">
                    <div className="flex items-start gap-3">
                      <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-6 text-sm text-white">
                    <div className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span className="font-medium">{row.nexbeyond}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
