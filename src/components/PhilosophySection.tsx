import React from 'react';
import { PHILOSOPHY_PILLARS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Lightbulb, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Music, 
  Layers,
  Sparkles
} from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>14 // FILOSOFIA PROFISSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Como Eu Penso & Estruturo Soluções
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Princípios pragmáticos que orientam a tomada de decisão, o desenho de processos e a arquitetura de novos projetos.
          </p>
        </div>

        {/* Master Equation Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-[#0d1620] to-[#0a1017] text-center">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-3">
            A Equação Central
          </span>
          <div className="text-xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight mb-4">
            EXPERIÊNCIA <span className="text-emerald-400">+</span> PLANEJAMENTO <span className="text-teal-400">+</span> TECNOLOGIA <span className="text-sky-400">+</span> CRIATIVIDADE <span className="text-indigo-400">=</span> <span className="text-emerald-400 underline decoration-emerald-500/40">SOLUÇÕES</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl mx-auto">
            A maturidade de quem viveu a operação diária, combinada ao rigor do planejamento, à agilidade da tecnologia e à inventividade da criação.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              id={`philosophy-pillar-${idx}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                  0{idx + 1} // {pillar.concept}
                </span>
                <h3 className="text-lg font-heading font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] text-[10px] font-mono text-slate-500">
                Pilar Estratégico #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
