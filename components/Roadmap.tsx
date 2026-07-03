import React from "react";
import { Milestone, Flag, Rocket, Trophy, Calendar, Sparkles, Target, Compass } from "lucide-react";

interface TimelineItem {
  stage: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  quarter: string;
}

export default function Roadmap() {
  const items: TimelineItem[] = [
    {
      quarter: "Q1 2026",
      stage: "Community Launch",
      title: "Building the Foundation",
      description: "Opening cohort registrations, establishing regional Discord node channels, and releasing the builder dashboard beta.",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      quarter: "Q2 2026",
      stage: "500 Members & 1000 Members",
      title: "Cohort Scaling",
      description: "Scaling to 1000 active, project-vetted builders. Initiating daily code sprints and starting weekly project reviews.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      quarter: "Q2 2026",
      stage: "Ecosystem Hackathons",
      title: "Interactive Sprint Sprints",
      description: "Launching regional hackathons matching developers together to build and deploy functional AI microservices.",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      quarter: "Q3 2026",
      stage: "Offline Meetups",
      title: "Local Building Cohorts",
      description: "Structuring offline meetups and co-working sprints across major tier-1 cities including Bangalore, Mumbai, and Delhi.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      quarter: "Q3 2026",
      stage: "National AI Summit",
      title: "The Showcase",
      description: "Our premier national conference matching outstanding builders, projects, and products with capital leads and executives.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      quarter: "Q4 2026",
      stage: "5000 Members",
      title: "Elite Network Scale",
      description: "Transitioning to 5000 vetted builders, releasing customized learning nodes, and setting up corporate matches.",
      icon: <Milestone className="h-5 w-5" />,
    },
    {
      quarter: "Q4 2026",
      stage: "National Expansion",
      title: "The Next Era",
      description: "Launching offline community workspaces and establishing NexBeyond nodes across premier engineering colleges nationwide.",
      icon: <Compass className="h-5 w-5" />,
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 px-6 z-10 bg-[#090909] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold font-display">Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ecosystem Timeline 2026
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            A look at our strategic milestones designed to scale NexBeyond from a builder cohort into a national innovation network.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 md:pl-12 flex flex-col gap-12">
          
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 p-2 rounded-full bg-black border border-white/10 text-gray-400 group-hover:text-black group-hover:bg-gold group-hover:border-gold transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Roadmap Item Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-cardDark/50 border border-white/5 backdrop-blur-md flex flex-col gap-4 group-hover:border-gold/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Date & Stage metadata */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-bold text-gold bg-gold/10 border border-gold/20 rounded-full uppercase tracking-wider">
                    {item.stage}
                  </span>
                  <span className="text-xs font-bold text-gray-500">{item.quarter}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
