import React, { useState } from 'react';
import { NOW_ITEMS } from '../data/portfolioData';
import { NowItem } from '../types';
import { 
  Activity, 
  Clock, 
  Sparkles, 
  Compass, 
  Code2, 
  BookOpen, 
  Lightbulb, 
  Target 
} from 'lucide-react';

export const NowSection: React.FC = () => {
  const [items] = useState<NowItem[]>(NOW_ITEMS);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'FAZENDO': return Activity;
      case 'APRENDENDO': return BookOpen;
      case 'CONSTRUINDO': return Code2;
      case 'EXPLORANDO': return Lightbulb;
      case 'PRÓXIMO DESTINO': return Target;
      default: return Sparkles;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'FAZENDO': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'APRENDENDO': return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'CONSTRUINDO': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'EXPLORANDO': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'PRÓXIMO DESTINO': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  return (
    <section id="agora" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>13 // SEÇÃO AGORA (NOW PAGE)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            O que Estou Construindo Atualmente
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Um panorama em tempo real das prioridades de estudo, prototipação, negócios e novos horizontes.
          </p>
        </div>

        {/* Dynamic Grid of Current Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const Icon = getCategoryIcon(item.category);
            const colorClasses = getCategoryColor(item.category);

            return (
              <div
                key={item.id}
                id={`now-card-${item.id}`}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/[0.07] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold border ${colorClasses} flex items-center gap-1.5`}>
                      <Icon className="w-3 h-3" />
                      <span>{item.category}</span>
                    </span>

                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-subtle-pulse" />
                  </div>

                  <h3 className="text-base font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-slate-400 border border-white/[0.05]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
