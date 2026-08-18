import React, { useState } from 'react';
import { 
  CAREER_MILESTONES 
} from '../data/portfolioData';
import { CareerMilestone } from '../types';
import { 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  Landmark, 
  Network, 
  Target, 
  Sparkles, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  GraduationCap,
  Building2,
  ShieldCheck,
  Landmark,
  Network,
  Target,
  Sparkles,
  Compass
};

export const CareerRoadSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<CareerMilestone>(CAREER_MILESTONES[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toda a Jornada' },
    { id: 'origem', label: '01. Origem' },
    { id: 'experiencia', label: '02. Experiência' },
    { id: 'transformacao', label: '03. Transformação' },
    { id: 'estrategia', label: '04. Estratégia' },
    { id: 'inovacao', label: '05. Inovação' },
    { id: 'futuro', label: '06. Futuro' }
  ];

  const filteredMilestones = filterCategory === 'all' 
    ? CAREER_MILESTONES 
    : CAREER_MILESTONES.filter(m => m.category === filterCategory);

  const handleSelectMilestone = (milestone: CareerMilestone, index: number) => {
    setSelectedMilestone(milestone);
    const tones = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
    audioSynth.playTone(tones[index % tones.length], 0.8, 'triangle');
  };

  return (
    <section id="trajetoria" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>02 // O CAMINHO CENTRAL DA CARREIRA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            A Estrada Evolutiva: Das Raízes à Inovação
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Cada etapa foi o alicerce para a seguinte. Veja como a administração estruturou a gestão, os seguros refinaram o olhar comercial, a fiscalização pública lapidou a conformidade e a tecnologia abriu caminhos para a inovação com Inteligência Artificial.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-road-${cat.id}`}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filterCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Pathway Strip */}
        <div className="relative mb-12">
          {/* Horizontal Track Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/30 via-sky-500/30 to-indigo-500/30 -translate-y-1/2 z-0" />

          {/* Milestone Step Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {CAREER_MILESTONES.map((m, idx) => {
              const Icon = ICON_MAP[m.iconName] || Compass;
              const isSelected = selectedMilestone.id === m.id;

              return (
                <button
                  key={m.id}
                  id={`milestone-node-${m.id}`}
                  onClick={() => handleSelectMilestone(m, idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500/20 border-2 border-emerald-400 shadow-lg shadow-emerald-950/60 scale-105'
                      : 'glass-panel hover:bg-white/[0.05] border border-white/[0.08]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform ${
                      isSelected
                        ? 'bg-emerald-400 text-[#0b0f12] scale-110 font-bold'
                        : 'bg-white/[0.05] text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 mb-0.5">
                    {m.stage.split('.')[0]}
                  </span>
                  <span className="text-xs font-heading font-semibold text-slate-200 line-clamp-1">
                    {m.title.split(' ')[0]} {m.title.split(' ')[1] || ''}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Deep-Dive Card */}
        <div 
          id="milestone-details-panel"
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/30 relative overflow-hidden bg-gradient-to-b from-[#101820] to-[#0d1318]"
        >
          <div className="absolute top-0 right-0 px-4 py-2 bg-emerald-500/10 text-emerald-400 font-mono text-xs rounded-bl-2xl border-l border-b border-emerald-500/20">
            {selectedMilestone.stage}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                {selectedMilestone.period} • {selectedMilestone.organization || 'Iniciativa Própria'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                {selectedMilestone.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {selectedMilestone.summary}
              </p>

              {/* Competencies Acquired */}
              <div className="mb-6">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Competências Estruturadas nesta Etapa</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.competencies.map((comp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Connection to Next Stage */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ArrowRight className="w-4 h-4" />
                  <span>Conexão com a Próxima Etapa</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{selectedMilestone.connectionToNext}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Eixo: {selectedMilestone.category.toUpperCase()}</span>
                <span className="text-emerald-400">Progresso Contínuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
