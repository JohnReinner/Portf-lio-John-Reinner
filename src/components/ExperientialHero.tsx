import React, { useState, useRef } from 'react';
import { ArrowDown, BriefcaseBusiness, FileText } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface ExperientialHeroProps {
  onExplore: () => void;
  onProjects?: () => void;
  onCurriculum?: () => void;
}

export const ExperientialHero: React.FC<ExperientialHeroProps> = ({ onExplore, onProjects, onCurriculum }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
    });
  };

  return (
    <section
      id="entrada"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 pt-20 pb-12 overflow-hidden bg-[#070908] select-none"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 motion-reduce:hidden">
        <ParticleCanvas mode="strategic-path" />
      </div>
      <div className="absolute inset-0 studio-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl flex justify-between items-center text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-slate-500 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
          <span>PORTFÓLIO PROFISSIONAL</span>
        </div>
        <span className="hidden sm:inline">BRASÍLIA / DF • BRASIL</span>
      </div>

      <div
        className="relative z-10 my-auto flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out motion-reduce:transform-none"
        style={{ transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg) translateZ(10px)` }}
      >
        <div className="text-xs sm:text-sm font-mono tracking-[0.3em] text-emerald-400 uppercase font-semibold mb-3 sm:mb-6">
          GESTÃO • PRODUTO • TECNOLOGIA • IA
        </div>

        <h1 id="hero-title" className="font-heading font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.85] tracking-[-0.04em] text-slate-100 uppercase">
          <span className="block">JOHN</span>
          <span className="block text-slate-400/90">REINNER</span>
        </h1>

        <p className="mt-7 sm:mt-9 max-w-2xl text-sm sm:text-lg leading-relaxed text-slate-300 px-3">
          Gestão, produto e inteligência artificial aplicados à criação de experiências digitais, projetos e soluções com impacto real.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={onProjects || onExplore} className="min-w-44 px-5 py-3 rounded-md bg-emerald-400 text-[#07100b] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 transition-colors">
            <BriefcaseBusiness className="w-4 h-4" aria-hidden="true" /> Ver projetos
          </button>
          {onCurriculum && (
            <button onClick={onCurriculum} className="min-w-44 px-5 py-3 rounded-md border border-white/15 bg-white/[0.04] text-slate-100 font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:border-emerald-400/60 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 transition-colors">
              <FileText className="w-4 h-4" aria-hidden="true" /> Currículo
            </button>
          )}
        </div>
      </div>

      <button onClick={onExplore} aria-label="Explorar próximo capítulo" className="relative z-10 group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 transition-colors">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase font-bold">Explorar</span>
        <span className="w-8 h-8 rounded-full border border-white/10 group-hover:border-emerald-400/60 flex items-center justify-center bg-white/[0.02]">
          <ArrowDown className="w-3.5 h-3.5 motion-safe:animate-bounce text-emerald-400" aria-hidden="true" />
        </span>
      </button>
    </section>
  );
};
