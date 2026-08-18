import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Cpu, 
  TrendingUp, 
  Landmark, 
  Music, 
  MapPin, 
  Mail,
  ShieldCheck
} from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioSynth } from '../utils/audioSynth';

interface HeroSectionProps {
  onStartJourney: () => void;
  onProjectsClick: () => void;
  onCurriculumClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartJourney,
  onProjectsClick,
  onCurriculumClick
}) => {
  const [particleMode, setParticleMode] = useState<'hero' | 'administration' | 'business' | 'technology' | 'ai' | 'music'>('hero');

  const handleModeChange = (mode: 'hero' | 'administration' | 'business' | 'technology' | 'ai' | 'music') => {
    setParticleMode(mode);
    const frequencies: Record<string, number[]> = {
      hero: [261.63, 329.63, 392.0],
      administration: [220.0, 277.18, 329.63],
      business: [261.63, 311.13, 392.0],
      technology: [293.66, 369.99, 440.0],
      ai: [329.63, 415.3, 493.88],
      music: [349.23, 440.0, 523.25]
    };
    audioSynth.playChord(frequencies[mode] || [261.63, 329.63, 392.0], 1.2);
  };

  return (
    <section id="inicio" className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center pt-16 pb-12 overflow-hidden bg-[#0a0c0b]">
      {/* Background Matrix Dot Pattern */}
      <div className="absolute inset-0 matrix-dot-bg opacity-20 pointer-events-none" />

      {/* Background Interactive Canvas */}
      <ParticleCanvas mode={particleMode} />

      {/* Subtle Sleek Glow Spheres */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[280px] bg-[#5A5A40]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Sleek Master Headline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded bg-white/[0.02] border border-white/[0.08] mb-6 backdrop-blur-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-subtle-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-slate-300 uppercase">
                {PERSONAL_INFO.location}
              </span>
              <span className="text-[#5A5A40]">•</span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-400 uppercase font-semibold">
                ATO 01 // INÍCIO
              </span>
            </div>

            {/* Massive Sleek Display Title */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-none mb-4 text-white uppercase">
              JOHN<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-400">
                REINNER
              </span>
            </h1>

            {/* Accent Line */}
            <div className="h-1 w-20 bg-emerald-500 mb-6 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>

            {/* High-Tracking Subtitle */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase font-bold text-emerald-400 mb-4">
              GESTÃO • TECNOLOGIA • INTELIGÊNCIA ARTIFICIAL • INOVAÇÃO
            </p>

            {/* Conceptual Statement */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-lg mb-8 font-light">
              <span className="text-white font-normal italic">
                "{PERSONAL_INFO.conceptualPhrase}"
              </span>{' '}
              Conectando a solidez da administração e fiscalização de contratos públicos ao desenvolvimento de plataformas tecnológicas potencializadas por IA.
            </p>

            {/* Currently Active Status Badge */}
            <div className="p-4 bg-slate-900/60 border border-slate-800/90 rounded-xl mb-8 max-w-lg backdrop-blur-sm">
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-emerald-400 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Atualmente em Foco</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-200">
                Desenvolvendo soluções em IA, Marketplace de Licitações e Plataforma de Transição de Carreira Militar.
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                id="hero-start-journey-btn"
                onClick={onStartJourney}
                className="px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0a0c0b] font-black text-xs tracking-[0.2em] uppercase flex items-center gap-3 transition-all shadow-xl shadow-emerald-950/70 hover:scale-102 cursor-pointer group"
              >
                <span>INICIAR JORNADA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              <button
                id="hero-projects-btn"
                onClick={onProjectsClick}
                className="px-5 py-3.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs tracking-wider uppercase border border-white/[0.12] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Projetos</span>
              </button>

              <button
                id="hero-cv-btn"
                onClick={onCurriculumClick}
                className="px-4 py-3.5 rounded-lg bg-transparent hover:bg-white/[0.03] text-slate-300 font-medium text-xs tracking-wider uppercase border border-white/[0.08] transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Currículo</span>
              </button>
            </div>

            {/* Interactive Universe Mode Filters */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 mr-2">
                Modo Interativo:
              </span>
              {[
                { id: 'hero', label: 'Geral' },
                { id: 'administration', label: 'Administração' },
                { id: 'business', label: 'Negócios' },
                { id: 'technology', label: 'Tecnologia' },
                { id: 'ai', label: 'IA' },
                { id: 'music', label: 'Música' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  id={`hero-mode-${tab.id}`}
                  onClick={() => handleModeChange(tab.id as any)}
                  className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded border transition-all cursor-pointer ${
                    particleMode === tab.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-semibold'
                      : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Sleek Architectural Timeline Nodes */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px]">
            {/* Horizontal Laser Glow Line */}
            <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-blue-500/0 top-1/2 -translate-y-1/2 hidden sm:block"></div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full relative z-10">
              
              {/* Node 1: Origem */}
              <div className="flex flex-col justify-center items-center gap-3 sm:mt-12 group cursor-pointer" onClick={onStartJourney}>
                <div className="w-16 h-16 rounded-full border border-[#5A5A40] flex items-center justify-center bg-[#5A5A40]/10 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(90,90,64,0.3)]">
                  <div className="w-3.5 h-3.5 bg-[#5A5A40] rounded-full"></div>
                </div>
                <div className="text-center">
                  <span className="block text-[10px] uppercase font-mono tracking-[0.25em] text-slate-500 mb-1">Origem</span>
                  <span className="block text-xs font-heading font-bold text-white tracking-wider">ADMINISTRAÇÃO</span>
                  <span className="block text-[9px] font-mono text-slate-400 mt-1">UPIS • SUSEP</span>
                </div>
              </div>

              {/* Node 2: Pilar Estratégico */}
              <div className="flex flex-col justify-center items-center gap-3 sm:-mt-12 group cursor-pointer" onClick={onStartJourney}>
                <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center bg-slate-800/30 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(100,116,139,0.3)]">
                  <div className="w-3.5 h-3.5 bg-slate-400 rounded-full"></div>
                </div>
                <div className="text-center">
                  <span className="block text-[10px] uppercase font-mono tracking-[0.25em] text-slate-500 mb-1">Setor Público</span>
                  <span className="block text-xs font-heading font-bold text-white tracking-wider leading-tight">FISCALIZAÇÃO &<br />CONTRATOS</span>
                  <span className="block text-[9px] font-mono text-slate-400 mt-1">11ª REGIÃO MILITAR</span>
                </div>
              </div>

              {/* Node 3: Conversão Digital */}
              <div className="flex flex-col justify-center items-center gap-3 sm:mt-12 group cursor-pointer" onClick={onProjectsClick}>
                <div className="w-16 h-16 rounded-full border border-blue-900/60 flex items-center justify-center bg-blue-950/30 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>
                <div className="text-center">
                  <span className="block text-[10px] uppercase font-mono tracking-[0.25em] text-slate-500 mb-1">Aquisição</span>
                  <span className="block text-xs font-heading font-bold text-white tracking-wider">MARKETING & IA</span>
                  <span className="block text-[9px] font-mono text-slate-400 mt-1">LEAD ADS • PROCESSOS</span>
                </div>
              </div>

              {/* Node 4: Futuro & Inovação */}
              <div className="flex flex-col justify-center items-center gap-3 sm:-mt-12 group cursor-pointer" onClick={onProjectsClick}>
                <div className="w-16 h-16 rounded-full border border-emerald-500/60 flex items-center justify-center bg-emerald-500/10 transition-transform group-hover:scale-110 shadow-[0_0_20px_rgba(52,211,153,0.6)]">
                  <div className="w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse"></div>
                </div>
                <div className="text-center">
                  <span className="block text-[10px] uppercase font-mono tracking-[0.25em] text-slate-500 mb-1">Futuro</span>
                  <span className="block text-xs font-heading font-bold text-white tracking-wider">INOVAÇÃO</span>
                  <span className="block text-[9px] font-mono text-emerald-400 mt-1 font-semibold">PLATAFORMAS B2B</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
