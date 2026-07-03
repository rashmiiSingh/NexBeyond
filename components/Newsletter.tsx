"use client";

import React, { useState, FormEvent } from "react";
import { Send, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="newsletter" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] h-[250px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="p-8 md:p-16 rounded-3xl bg-cardDark border border-white/5 relative overflow-hidden flex flex-col items-center text-center gap-8 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold font-display">Stay Updated</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
              Join the Builder Ecosystem
            </h2>
            <p className="text-xs md:text-sm text-gray-400 max-w-lg leading-relaxed">
              Get notified about new cohort openings, regional meetups, hackathons, and curated AI insights. Zero spam.
            </p>
          </div>

          {/* Subscription Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-10 mt-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your professional email"
                className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-sm transition-all"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm transition-all shrink-0 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Join
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3 py-4 animate-fade-in">
              <CheckCircle2 className="h-10 w-10 text-gold" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white">Successfully Enrolled</span>
                <p className="text-xs text-gray-500">Welcome to the inner circle. We will be in touch shortly.</p>
              </div>
            </div>
          )}

          {/* Small micro interaction info */}
          <span className="text-[10px] text-gray-500 font-medium tracking-wide">
            By joining, you agree to receive technical updates from NexBeyond.
          </span>
        </div>
      </div>
    </section>
  );
}
