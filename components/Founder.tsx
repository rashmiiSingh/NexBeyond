import React from "react";
import { BookOpen, Award, Terminal, Play, BookmarkCheck } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 px-6 z-10 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold font-display">Leadership</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Meet the Founder
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Learn more about the driving force behind NexBeyond's project-first philosophy.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Visual / Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-8 rounded-3xl bg-cardDark border border-white/5 relative overflow-hidden shadow-[0_15px_40px_-20px_rgba(0,0,0,0.6)]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Visual Portrait Placeholder (Gold Glowing Silhouette) */}
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 border border-white/5 relative overflow-hidden flex items-center justify-center">
              {/* Glowing decorative rings */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
              <div className="absolute h-56 w-56 rounded-full border border-gold/10 animate-[pulse_3s_infinite]" />
              
              {/* SVGs representing a professional coding/technical portrait silhouette */}
              <svg viewBox="0 0 100 100" className="h-44 w-44 text-zinc-700 opacity-60" fill="currentColor">
                <path d="M50 15 C40 15, 32 23, 32 33 C32 43, 40 51, 50 51 C60 51, 68 43, 68 33 C68 23, 60 15, 50 15 Z M50 58 C32 58, 15 67, 15 78 L 15 85 L 85 85 L 85 78 C 85 67, 68 58, 50 58 Z" />
              </svg>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1.5 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-md">
                <h3 className="text-lg font-bold text-white tracking-tight">Rashmi Singh</h3>
                <span className="text-xs font-semibold text-gold uppercase tracking-wider">AI Developer & Trainer</span>
              </div>
            </div>

            {/* Badges / Credentials */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Terminal className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-gray-300">AI Developer</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <BookOpen className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-gray-300">Published Author</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Play className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-gray-300">Speaker</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Award className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-gray-300">AI Trainer</span>
              </div>
            </div>

          </div>

          {/* Founder Bio / Quote & Book details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Story Quote Card */}
            <div className="p-8 rounded-3xl bg-cardDark/40 border border-white/5 relative overflow-hidden">
              <span className="text-6xl text-gold/10 font-serif absolute -top-2 left-4 pointer-events-none">“</span>
              <p className="text-base md:text-xl text-gray-300 font-medium leading-relaxed relative z-10 pl-6 mb-6">
                I started NexBeyond with one belief: AI should not just be learned. It should be built.
              </p>
              <div className="pl-6 border-l-2 border-gold/40">
                <span className="text-xs text-gray-400 font-bold block uppercase tracking-wider">Rashmi Singh</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Founder, NexBeyond</span>
              </div>
            </div>

            {/* Book Details Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cardDark to-cardDark/50 border border-white/5 flex flex-col md:flex-row gap-8 items-center">
              
              {/* Animated Book Mockup Representation */}
              <div className="w-36 h-48 bg-gradient-to-r from-indigo-950 via-zinc-950 to-indigo-900 border border-indigo-500/20 rounded-r-lg shadow-[0_15px_30px_rgba(0,0,0,0.7)] relative overflow-hidden shrink-0 flex flex-col justify-between p-4 transform hover:rotate-2 transition-transform duration-300">
                {/* Book Spine border */}
                <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-indigo-500/10 border-r border-white/10" />
                {/* Glowing details */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl" />
                
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-indigo-400 pl-2">RASHMI SINGH</span>
                <div className="flex flex-col pl-2 mt-4">
                  <h4 className="text-sm font-extrabold text-white leading-tight">AI BEYOND</h4>
                  <h4 className="text-sm font-extrabold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent leading-tight">CHATGPT</h4>
                </div>
                <div className="flex items-center gap-1 mt-auto pl-2">
                  <BookmarkCheck className="h-3 w-3 text-indigo-400" />
                  <span className="text-[7px] text-gray-400 font-semibold tracking-wider uppercase">Mastery Edition</span>
                </div>
              </div>

              {/* Book Description */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 rounded-full uppercase tracking-wider">
                    Featured Publication
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">AI Beyond ChatGPT</h3>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  A definitive guide detailing how to build production-ready ML loops, fine-tune localized LLMs, deploy vector indexing architectures, and program autonomous AI agents.
                </p>
                <div className="pt-2">
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-950/40 border border-indigo-900/50 text-xs font-semibold text-indigo-300 hover:bg-indigo-950/60 transition-all"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
