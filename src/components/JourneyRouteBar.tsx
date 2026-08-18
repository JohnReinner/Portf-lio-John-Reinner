import React from 'react';
import { ChevronRight, ChevronLeft, Compass, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { TabId, ActId } from '../types';
import { JOURNEY_ACTS, JOURNEY_TABS, ROUTE_STEPS } from '../data/portfolioData';

interface JourneyRouteBarProps {
  currentTab: TabId;
  onSelectTab: (tabId: TabId) => void;
  onNextTab: () => void;
  onPrevTab: () => void;
}

export const JourneyRouteBar: React.FC<JourneyRouteBarProps> = ({
  currentTab,
  onSelectTab,
  onNextTab,
  onPrevTab
}) => {
  const currentTabConfig = JOURNEY_TABS.find((t) => t.id === currentTab) || JOURNEY_TABS[0];
  const currentAct = JOURNEY_ACTS.find((a) => a.id === currentTabConfig.actId) || JOURNEY_ACTS[0];
  const currentIndex = JOURNEY_TABS.findIndex((t) => t.id === currentTab);
  const totalTabs = JOURNEY_TABS.length;

  return (
    <aside aria-label="Navegação da Jornada" className="w-full bg-[#0a0c0b]/95 border-b border-white/[0.08] backdrop-blur-md sticky top-[68px] z-30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        
        {/* Top Mini Bar: 3 Acts & Current Step Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/[0.05] pb-2 mb-2">
          
          {/* Act Selector Badges */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {JOURNEY_ACTS.map((act) => {
              const isCurrentAct = act.id === currentAct.id;
              // Clicking an act can jump to its first tab
              const firstTab = act.tabIds[0];
              return (
                <button
                  key={act.id}
                  onClick={() => onSelectTab(firstTab)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer ${
                    isCurrentAct
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-bold shadow-[0_0_10px_rgba(52,211,153,0.2)]'
                      : 'bg-white/[0.02] text-slate-400 border border-white/[0.06] hover:text-slate-200 hover:bg-white/[0.05]'
                  }`}
                  title={`${act.name}: ${act.subtitle}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isCurrentAct ? '#10b981' : '#64748b' }} />
                  <span className="font-semibold">{act.name}</span>
                  <span className="hidden md:inline text-slate-500">• {act.subtitle}</span>
                </button>
              );
            })}
          </div>

          {/* Act Message & Step Progress */}
          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
            <span className="hidden lg:inline text-slate-400 italic">
              "{currentAct.message}"
            </span>
            <div className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08] text-slate-300 font-bold">
              <span className="text-emerald-400">{currentTabConfig.tabNumber}</span>
              <span className="text-slate-600">/</span>
              <span>0{totalTabs}</span>
              <span className="text-[#5A5A40] ml-1 uppercase hidden sm:inline">• {currentTabConfig.shortLabel}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Horizontal Route of 9 Destination Tabs */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Scrollable Tabs Ribbon */}
          <nav aria-label="Abas da rota de navegação" className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 max-w-full">
            {JOURNEY_TABS.map((tab, idx) => {
              const isActive = tab.id === currentTab;
              const isPast = idx < currentIndex;

              return (
                <div key={tab.id} className="flex items-center shrink-0">
                  <button
                    id={`route-tab-${tab.id}`}
                    onClick={() => onSelectTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-mono tracking-wider uppercase transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500 text-[#0a0c0b] font-bold shadow-md shadow-emerald-950/60 scale-102'
                        : isPast
                        ? 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.08]'
                        : 'bg-transparent text-slate-400 hover:text-slate-200 border border-transparent hover:border-white/[0.06]'
                    }`}
                  >
                    <span className={`text-[9px] ${isActive ? 'text-[#0a0c0b]/80' : 'text-slate-400'}`}>
                      {tab.tabNumber}
                    </span>
                    <span>{tab.shortLabel}</span>
                  </button>

                  {idx < JOURNEY_TABS.length - 1 && (
                    <ChevronRight className="w-3 h-3 text-slate-700 mx-0.5 shrink-0" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Back & Forward Buttons on the Bar */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0 pl-2">
            <button
              id="route-bar-prev-btn"
              onClick={onPrevTab}
              disabled={currentIndex === 0}
              className={`p-1.5 rounded border transition-all text-xs flex items-center ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed border-white/[0.04] text-slate-600'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.1] text-slate-300 hover:text-white cursor-pointer'
              }`}
              title={currentTabConfig.prevLabel ? `Voltar para ${currentTabConfig.prevLabel}` : 'Início'}
              aria-label="Voltar etapa"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>

            <button
              id="route-bar-next-btn"
              onClick={onNextTab}
              disabled={currentIndex === totalTabs - 1}
              className={`px-2.5 py-1.5 rounded border transition-all text-[11px] font-mono tracking-wider uppercase flex items-center gap-1 ${
                currentIndex === totalTabs - 1
                  ? 'opacity-30 cursor-not-allowed border-white/[0.04] text-slate-600'
                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-500/40 text-emerald-300 font-semibold cursor-pointer'
              }`}
              title={currentTabConfig.nextLabel ? `Avançar para ${currentTabConfig.nextLabel}` : 'Fim'}
            >
              <span>{currentTabConfig.nextLabel || 'Concluído'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </aside>
  );
};
