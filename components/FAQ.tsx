"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const faqs: FAQItem[] = [
    {
      question: "What is NexBeyond and who is it designed for?",
      answer: "NexBeyond is India's most practical, project-driven AI learning ecosystem. It is engineered for students, software engineers, and professionals who want to transition from passive AI users into active AI builders by writing, reviewing, and deploying real code rather than just watching lecture slides.",
    },
    {
      question: "Do I need deep programming experience to join?",
      answer: "While foundational coding knowledge (e.g., basic Python or JavaScript syntax) is helpful, we structure our learning modules to scale in complexity. We begin with core concepts and work up to advanced agent coordination, model fine-tuning, and production system design.",
    },
    {
      question: "How does the mentor feedback loop function?",
      answer: "Our mentoring is code-level and synchronous. You receive detailed feedback on pull requests, cohort code reviews during weekly reviews, 1-on-1 career mapping alignments, and architecture critiques from senior engineers and authors like founder Rashmi Singh.",
    },
    {
      question: "What types of projects will I develop in this ecosystem?",
      answer: "You will build production-grade, multi-agent frameworks, fine-tuned localized language models, vector search indexes (such as Pinecone or Qdrant), and full-stack software assemblies that integrate and run models dynamically.",
    },
    {
      question: "How does the internship and job placement matching work?",
      answer: "We partner with high-growth AI startups, technology firms, and venture capitals. As you complete and deploy projects on your builder dashboard, your profile and verified repositories are directly matched and recommended to hiring panels.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 px-6 z-10 bg-[#090909] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold font-display">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Got questions? We have answers. Find answers to common inquiries about the ecosystem.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-white/5 bg-cardDark/30 backdrop-blur-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-white/[0.01]"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-gold" : "text-gray-500"}`} />
                    <span className="text-sm md:text-base font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>

                {/* Animated expandable content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 md:p-8 text-xs md:text-sm text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
