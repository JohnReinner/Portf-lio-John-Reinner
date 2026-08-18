import React from 'react';
import { Sparkles, Music, Activity, Disc, Sliders } from 'lucide-react';

const CREATIVE_PILLARS = [
  {
    title: 'COMPOSIÇÃO & HARMONIAS',
    desc: 'Estruturação de progressões harmônicas, melodias autorais e experimentação com timbres acústicos e eletrônicos.',
    tag: 'AUTORAL'
  },
  {
    title: 'ARRANJOS & TEXTURAS',
    desc: 'Construção de camadas sonoras, dinâmica rítmica e mixagem espacial para trilhas e projetos conceituais.',
    tag: 'PRODUÇÃO'
  },
  {
    title: 'INTELIGÊNCIA ARTIFICIAL SONORA',
    desc: 'Uso de ferramentas modernas de síntese e modelagem de áudio por IA para criação de atmosferas imersivas.',
    tag: 'PESQUISA & IA'
  }
];

export const LudicEscapesSection: React.FC = () => {
  return (
    <section id="laboratorio" className="relative min-h-[60vh] py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          06 // LABORATÓRIO CRIATIVO
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          NEM TUDO PRECISA TER UM OBJETIVO IMEDIATO
        </span>
      </div>

      {/* Headline */}
      <div className="mb-12">
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-100 uppercase mb-3">
          LABORATÓRIO
        </h2>
        <p className="text-base sm:text-xl font-mono text-emerald-400 uppercase tracking-widest mb-4">
          "NEM TUDO PRECISA TER UM OBJETIVO IMEDIATO."
        </p>
        <p className="text-sm sm:text-base font-light text-slate-300 max-w-3xl leading-relaxed">
          Composição autoral, arranjos musicais e síntese sonora por IA. A música representa o ponto de equilíbrio essencial entre o <span className="text-white font-medium">racional</span>, o <span className="text-white font-medium">técnico</span> e o <span className="text-emerald-300 font-medium">criativo</span>.
        </p>
      </div>

      {/* Creative Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CREATIVE_PILLARS.map((p, idx) => (
          <div key={idx} className="glass-panel rounded-2xl p-7 border border-white/[0.08] hover:border-emerald-400/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block mb-2.5 font-bold">
                {p.tag}
              </span>
              <h4 className="font-heading font-bold text-lg text-slate-100 uppercase mb-3">
                {p.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
