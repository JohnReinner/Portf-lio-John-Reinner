import React, { useState } from 'react';
import { PROFESSIONAL_MORPHS } from '../data/portfolioData';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';

export const MorphingSection: React.FC = () => {
  const [activeMorphIdx, setActiveMorphIdx] = useState(0);
  const [isTransformed, setIsTransformed] = useState(true);

  const currentMorph = PROFESSIONAL_MORPHS[activeMorphIdx];

  return (
    <section id="morphing" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>12 // MORPHING & EVOLUÇÃO ESTRATÉGICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Transformações Conceituais & Operacionais
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Como ferramentas e processos tradicionais evoluem para sistemas integrados, potencializados por inteligência e visão de futuro.
          </p>
        </div>

        {/* Morphing Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {PROFESSIONAL_MORPHS.map((m, idx) => (
            <button
              key={m.id}
              id={`morph-tab-${idx}`}
              onClick={() => {
                setActiveMorphIdx(idx);
                setIsTransformed(true);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeMorphIdx === idx
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-slate-200'
              }`}
            >
              {m.category}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] bg-gradient-to-b from-[#101923] to-[#0d141b] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Eixo: {currentMorph.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                De Processos Isolados para Soluções Integradas
              </h3>
            </div>

            <button
              id="toggle-morph-state-btn"
              onClick={() => setIsTransformed(!isTransformed)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/[0.1] transition-all cursor-pointer self-start"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${isTransformed ? 'rotate-180' : ''} transition-transform duration-500`} />
              <span>{isTransformed ? 'Ver Estado Anterior' : 'Ver Estado Evoluído'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Traditional State */}
            <div 
              className={`p-6 rounded-2xl border transition-all ${
                !isTransformed 
                  ? 'bg-amber-950/20 border-amber-500/40 shadow-lg' 
                  : 'bg-white/[0.02] border-white/[0.06] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Origem / Abordagem Tradicional
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <h4 className="text-lg font-heading font-bold text-slate-200 mb-2">
                {currentMorph.from}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {currentMorph.fromDesc}
              </p>
            </div>

            {/* Transformed / Modern State */}
            <div 
              className={`p-6 rounded-2xl border transition-all ${
                isTransformed 
                  ? 'bg-emerald-950/30 border-emerald-400/50 shadow-xl shadow-emerald-950/50' 
                  : 'bg-white/[0.02] border-white/[0.06] opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Evolução / Solução Inteligente</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2">
                {currentMorph.to}
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                {currentMorph.toDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
