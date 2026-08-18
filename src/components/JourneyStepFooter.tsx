import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { TabId } from '../types';
import { JOURNEY_ACTS, JOURNEY_TABS } from '../data/portfolioData';

interface JourneyStepFooterProps {
  currentTab: TabId;
  onNext: () => void;
  onPrev: () => void;
  onSelectTab: (tab: TabId) => void;
}

export const JourneyStepFooter: React.FC<JourneyStepFooterProps> = ({
  currentTab,
  onNext,
  onPrev,
  onSelectTab
}) => {
  const currentTabConfig = JOURNEY_TABS.find((t) => t.id === currentTab) || JOURNEY_TABS[0];
  const currentAct = JOURNEY_ACTS.find((a) => a.id === currentTabConfig.actId) || JOURNEY_ACTS[0];
  const currentIndex = JOURNEY_TABS.findIndex((t) => t.id === currentTab);
  const totalTabs = JOURNEY_TABS.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalTabs - 1;

  const prevTabConfig = !isFirst ? JOURNEY_TABS[currentIndex - 1] : null;
  const nextTabConfig = !isLast ? JOURNEY_TABS[currentIndex + 1] : null;

  return (
    <div className="w-full mt-16 pt-8 border-t border-white/[0.08] relative z-20">
      <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] bg-gradient-to-r from-[#0c120e] via-[#0e1410] to-[#0a0c0b]">
        
        {/* Act Context Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{currentAct.badge}</span>
            </div>
            <div className="text-sm font-semibold text-slate-200">
              {currentAct.subtitle} • <span className="text-slate-400 font-light italic">"{currentAct.message}"</span>
            </div>
          </div>

          <div className="text-right flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest hidden sm:inline">
              Progresso na Rota:
            </span>
            <div className="px-3 py-1 rounded bg-[#0a0c0b] border border-white/[0.1] text-xs font-mono font-bold text-slate-200">
              <span className="text-emerald-400">{currentTabConfig.tabNumber}</span> / 0{totalTabs}
            </div>
          </div>
        </div>

        {/* Navigation Step Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          
          {/* Back Button */}
          {prevTabConfig ? (
            <button
              id={`journey-step-prev-${prevTabConfig.id}`}
              onClick={onPrev}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.1] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar: {prevTabConfig.shortLabel}</span>
            </button>
          ) : (
            <div className="hidden sm:block text-xs font-mono text-slate-600">
              Ponto de Partida da Jornada
            </div>
          )}

          {/* Keyboard hint */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <span>Dica: Use as setas</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300">←</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300">→</kbd>
            <span>para navegar</span>
          </div>

          {/* Next Button */}
          {nextTabConfig ? (
            <button
              id={`journey-step-next-${nextTabConfig.id}`}
              onClick={onNext}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0a0c0b] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-950/60 cursor-pointer group"
            >
              <span>Próximo Destino: {nextTabConfig.shortLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              id="journey-step-finish-btn"
              onClick={() => onSelectTab('inicio')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Reiniciar Jornada (Início)</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
};
