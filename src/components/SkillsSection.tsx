import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  Cpu, 
  Sparkles, 
  Compass, 
  CheckCircle2,
  Layers
} from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  TrendingUp,
  Target,
  Cpu,
  Sparkles,
  Compass
};

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(SKILL_CATEGORIES[0].id);

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === selectedCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="competencias" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>08 // MATRIZ DE COMPETÊNCIAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Competências Estruturadas por Eixo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Organização categórica e transparente das habilidades desenvolvidas na prática — sem barras de porcentagem fictícias, focando em aplicações reais e tangíveis.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.iconName] || Layers;
            const isSelected = selectedCategoryId === category.id;

            return (
              <button
                key={category.id}
                id={`skill-cat-btn-${category.id}`}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`p-3.5 rounded-2xl flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-md shadow-emerald-950/40 text-emerald-300'
                    : 'glass-panel hover:bg-white/[0.05] border border-white/[0.07] text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span className="text-xs font-heading font-bold line-clamp-1">
                  {category.name.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] bg-gradient-to-b from-[#101922] to-[#0d141b]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                Eixo Selecionado
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {activeCategory.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <h4 className="text-base font-heading font-bold text-slate-100">
                      {skill.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shrink-0">
                      {skill.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04]">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Aplicações Práticas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] text-slate-300 border border-white/[0.05]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
