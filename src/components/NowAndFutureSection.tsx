import React, { useState } from 'react';
import { Sparkles, Compass, ArrowRight, Zap, Target } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const NOW_ACTIVE_BLOCKS = [
  { action: 'EXPLORANDO', subject: 'TECNOLOGIA & IA', detail: 'Aprofundamento diário em engenharia de prompts, automação de dados e novos modelos generativos.', tag: 'PESQUISA CONTÍNUA' },
  { action: 'CONSTRUINDO', subject: 'PROJETOS DIGITAIS', detail: 'Estruturação da plataforma de Transição de Carreira Militar e do analisador de licitações públicas.', tag: 'PRODUTO' },
  { action: 'CRIANDO', subject: 'COMPOSIÇÃO & ÁUDIO', detail: 'Desenvolvimento de arranjos autorais e experimentação em síntese sonora como escape lúdico.', tag: 'CRIATIVIDADE' },
  { action: 'IMAGINANDO', subject: 'PRÓXIMOS CAMINHOS', detail: 'Conectando parceiros, oportunidades de inovação e novos desafios em gestão e tecnologia.', tag: 'FUTURO' }
];

export const NowAndFutureSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="agora" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          07 // AGORA & FUTURO
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          O PRÓXIMO CAPÍTULO
        </span>
      </div>

      {/* Chapter 18: AGORA Section */}
      <div className="mb-20">
        <div className="mb-10">
          <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-bold block mb-1">
            ESTADO ATUAL // 2026
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-100 uppercase">
            AGORA
          </h2>
        </div>

        {/* Magnetic Words Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NOW_ACTIVE_BLOCKS.map((item, idx) => {
            const isHov = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  audioSynth.playNavClick();
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                data-cursor="FOCO"
                className={`glass-panel rounded-2xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer ${
                  isHov
                    ? 'border-emerald-400/80 bg-[#0e1712] shadow-[0_0_30px_rgba(52,211,153,0.15)] translate-y-[-4px]'
                    : 'border-white/[0.07] bg-white/[0.02]'
                }`}
              >
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                  {item.tag}
                </span>
                <div className="mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                    {item.action}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white uppercase group-hover:text-emerald-300">
                    {item.subject}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chapter 19: FUTURO (Minimalist, Contemplative Stage) */}
      <div className="glass-panel rounded-3xl p-10 sm:p-20 border border-white/[0.08] bg-gradient-to-b from-[#070908] to-[#0a100d] text-center relative overflow-hidden">
        
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-8 animate-float-slow">
          <Compass className="w-6 h-6 text-emerald-400" />
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight">
            "O PRÓXIMO CAPÍTULO AINDA ESTÁ SENDO ESCRITO."
          </h3>
          
          <p className="font-mono text-sm sm:text-base tracking-[0.2em] text-emerald-400 uppercase font-semibold">
            E TALVEZ ESSA SEJA A PARTE MAIS INTERESSANTE.
          </p>
        </div>

      </div>

    </section>
  );
};
