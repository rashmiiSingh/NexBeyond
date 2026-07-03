"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Play, Users, Calendar, FolderGit2, GraduationCap } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x);
      
      const currentCount = Math.floor(easeOutQuad(progressRatio) * end);
      setCount(currentCount);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    // Initialize particles
    const particleCount = Math.min(Math.floor(width / 15), 80);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        color: i % 3 === 0 ? "#D4AF37" : i % 3 === 1 ? "#00c6ff" : "#9025ff",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections (network lines)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden px-6">
      {/* Dynamic Network Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" />

      {/* Abstract AI 3D Gradient Overlay */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[500px] md:w-[800px] h-[300px] md:h-[500px] bg-gradient-to-tr from-gold/5 via-blue-600/5 to-purple-600/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0 animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Founder Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">
            Founded by Rashmi Singh
          </span>
        </div>

        {/* Tagline / Hook */}
        <div className="flex flex-col items-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Beyond Learning. Beyond AI. Beyond Limits.
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.05] max-w-4xl text-white">
            Build <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent gold-text-glow">Beyond</span> AI
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-base md:text-xl text-gray-400 max-w-3xl leading-relaxed">
          Join India's most practical AI ecosystem designed to help students, developers, and professionals become AI Builders through projects, mentorship, and community.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">
          <a
            href="#newsletter"
            className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-semibold text-black bg-gold rounded-full transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Join Community
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#newsletter"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-md rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Become a Mentor
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200"
          >
            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-200">
              <Play className="h-3 w-3 fill-current text-white group-hover:text-gold" />
            </span>
            Watch Demo
          </a>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-16 mt-8 border-t border-white/5 w-full">
          <div className="flex flex-col items-center gap-1.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gold mb-1">
              <Users className="h-5 w-5" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">
              <Counter end={100} suffix="+" />
            </div>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Members</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gold mb-1">
              <Calendar className="h-5 w-5" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">
              <Counter end={20} suffix="+" />
            </div>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Workshops</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gold mb-1">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">
              <Counter end={50} suffix="+" />
            </div>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Projects</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gold mb-1">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white">
              <Counter end={15} suffix="+" />
            </div>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Industry Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
