import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface ExperientialHeroProps {
  onExplore: () => void;
}

export const ExperientialHero: React.FC<ExperientialHeroProps> = ({ onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setMousePos({ x, y });
  };

  return (
    <section
      id="entrada"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-20 pb-12 overflow-hidden bg-[#070908] select-none"
    >
      {/* Background Interactive Particle Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <ParticleCanvas mode="strategic-path" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 studio-grid-bg opacity-30 pointer-events-none" />

      {/* Subtle Top Metadata Indicator */}
      <div className="relative z-10 w-full max-w-6xl flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>PORTFÓLIO EXPERIMENTAL</span>
        </div>
        <div>
          <span>BRASÍLIA / DF • BRASIL</span>
        </div>
      </div>

      {/* Central Monumental Typography with 3D Kinetic Tilt */}
      <div 
        className="relative z-10 my-auto flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg) translateZ(10px)`
        }}
      >
        {/* Subtle Pre-title */}
        <div className="text-xs sm:text-sm font-mono tracking-[0.35em] text-emerald-400 uppercase font-semibold mb-3 sm:mb-6">
          EXPERIÊNCIA DIGITAL
        </div>

        {/* Monolithic Name */}
        <h1 
          data-cursor="EXPLORE"
          onClick={onExplore}
          className="font-heading font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.85] tracking-[-0.04em] text-slate-100 uppercase cursor-pointer group transition-all"
        >
          <span className="block transform transition-transform duration-500 group-hover:tracking-normal group-hover:text-emerald-300">
            JOHN
          </span>
          <span className="block text-slate-400/90 transform transition-transform duration-500 group-hover:text-white group-hover:scale-102">
            REINNER
          </span>
        </h1>

        {/* Conceptual Signature & Formula */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3">
          <div className="text-xs sm:text-base font-mono tracking-[0.3em] uppercase text-slate-300 font-medium">
            GESTÃO <span className="text-emerald-400">·</span> TECNOLOGIA <span className="text-emerald-400">·</span> IA <span className="text-emerald-400">·</span> CRIAÇÃO
          </div>
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-slate-500">
            EXPERIÊNCIA → INTELIGÊNCIA → CRIAÇÃO
          </div>
        </div>
      </div>

      {/* Bottom Minimalist Explore Callout */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <button
          onClick={onExplore}
          data-cursor="COMEÇAR"
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-300 transition-colors cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold group-hover:translate-y-0.5 transition-transform">
            EXPLORE ↓
          </span>
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-emerald-400/60 flex items-center justify-center bg-white/[0.02] group-hover:bg-emerald-500/10 transition-all">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
          </div>
        </button>
      </div>
    </section>
  );
};
