import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showSubtext?: boolean;
}

export default function Logo({ className = "h-9", showText = true, showSubtext = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center font-display ${className}`}>
      <div className="flex items-center gap-3">
        {/* Logo Mark (Icon) */}
        <svg
          viewBox="0 0 100 100"
          className="h-9 w-9 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient-n" x1="10%" y1="90%" x2="90%" y2="10%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
            <linearGradient id="gradient-b" x1="10%" y1="90%" x2="90%" y2="10%">
              <stop offset="0%" stopColor="#0072ff" />
              <stop offset="100%" stopColor="#9025ff" />
            </linearGradient>
            <linearGradient id="gradient-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="50%" stopColor="#0072ff" />
              <stop offset="100%" stopColor="#9025ff" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Letter N */}
          <path
            d="M 22 75 L 22 25 L 34 25 L 58 60 L 58 25 L 68 25 L 68 75 L 56 75 L 32 40 L 32 75 Z"
            fill="url(#gradient-n)"
            filter="url(#glow)"
          />

          {/* Letter B */}
          <path
            d="M 52 25 C 64 25, 76 29, 76 40 C 76 45, 72 49, 66 51 C 74 53, 79 58, 79 66 C 79 77, 67 80, 52 80 L 34 80 L 34 72 L 52 72 C 62 72, 68 70, 68 65 C 68 59, 60 58, 52 58 L 44 58 L 44 50 L 52 50 C 60 50, 66 49, 66 43 C 66 38, 60 37, 52 37 L 34 37 L 34 25 Z"
            fill="url(#gradient-b)"
            opacity="0.85"
            style={{ mixBlendMode: "screen" }}
          />

          {/* Orbital Ring (3D Orbit effect around NB) */}
          <ellipse
            cx="50"
            cy="52"
            rx="56"
            ry="18"
            stroke="url(#gradient-orbit)"
            strokeWidth="3.5"
            transform="rotate(-15, 50, 52)"
            strokeDasharray="300"
            strokeDashoffset="0"
            filter="url(#glow)"
            className="animate-[pulse_2s_infinite]"
          />
        </svg>

        {/* Brand Text */}
        {showText && (
          <div className="flex items-center text-2xl font-bold tracking-tight">
            <span className="text-white">Nex</span>
            <span className="bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#9025ff] bg-clip-text text-transparent">
              Beyond
            </span>
          </div>
        )}
      </div>

      {/* Subtext */}
      {showSubtext && (
        <div className="flex items-center gap-2 mt-1.5 w-full justify-center">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#00c6ff]" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-medium">
            Building the Next Generation of AI Builders
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#9025ff]" />
        </div>
      )}
    </div>
  );
}
