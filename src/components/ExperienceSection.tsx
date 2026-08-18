import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Building2, 
  Landmark, 
  Network, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredExperiences = activeCategory === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.category === activeCategory);

  return (
    <section id="experiencia" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>03 // EXPERIÊNCIA PROFISSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Histórico e Atuações Reais
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Atuação consistente em ambientes corporativos e públicos de alta exigência, combinando supervisão, gestão de contratos, relacionamento B2B e rigor administrativo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', label: 'Todas as Experiências' },
            { id: 'public', label: 'Administração Pública (EB)' },
            { id: 'tech', label: 'Tecnologia / ANATEL' },
            { id: 'commercial', label: 'Seguros & Comercial' },
            { id: 'admin', label: 'Administrativo & ERP' }
          ].map((cat) => (
            <button
              key={cat.id}
              id={`exp-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiences List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => {
            const isPublic = exp.category === 'public';
            const isTech = exp.category === 'tech';

            return (
              <div
                key={exp.id}
                id={`exp-card-${exp.id}`}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all ${
                  isPublic 
                    ? 'border-sky-500/30 bg-gradient-to-r from-[#0d1722]/80 to-[#0b0f12]/90'
                    : isTech
                    ? 'border-emerald-500/30 bg-gradient-to-r from-[#0d1f18]/80 to-[#0b0f12]/90'
                    : 'border-white/[0.08]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/[0.05] text-emerald-400 border border-emerald-500/20">
                        {exp.badge}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                      {exp.organization}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs font-normal text-slate-400">{exp.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-400 self-start">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {exp.highlight && (
                  <div className="mb-6 px-4 py-2.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-medium text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{exp.highlight}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Responsibilities */}
                  <div className="lg:col-span-8">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      Atividades & Responsabilidades
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies */}
                  <div className="lg:col-span-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                      Competências Aplicadas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.competencies.map((comp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-medium text-slate-300 border border-white/[0.06]"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
