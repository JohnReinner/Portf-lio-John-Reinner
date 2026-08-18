import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  FileText, 
  Send,
  Navigation
} from 'lucide-react';
import { TabId } from '../types';
import { JOURNEY_TABS, JOURNEY_ACTS } from '../data/portfolioData';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tabId: TabId) => void;
  onOpenCurriculum: () => void;
  onTriggerScreensaver: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenCurriculum,
  onTriggerScreensaver
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(audioSynth.getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelect = (id: TabId) => {
    setMobileMenuOpen(false);
    onSelectTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      audioSynth.playChord([261.63, 329.63, 392.0], 1.5);
    }
  };

  const currentTabConfig = JOURNEY_TABS.find((t) => t.id === activeTab) || JOURNEY_TABS[0];
  const currentAct = JOURNEY_ACTS.find((a) => a.id === currentTabConfig.actId) || JOURNEY_ACTS[0];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c0b]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-[#0a0c0b]/80 backdrop-blur-sm border-b border-white/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Sleek Personal Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => handleSelect('inicio')}
            className="flex items-center gap-3.5 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 border-2 border-[#5A5A40] flex items-center justify-center font-heading font-extrabold text-sm text-slate-100 bg-[#5A5A40]/10 transition-transform group-hover:scale-105">
              JR
            </div>
            <div className="hidden sm:block h-px w-6 bg-[#5A5A40]/60"></div>
            <div>
              <div className="font-heading font-extrabold text-sm tracking-[0.15em] text-slate-100 group-hover:text-emerald-400 transition-colors uppercase">
                JOHN REINNER
              </div>
              <div className="text-[9px] text-[#5A5A40] font-mono tracking-[0.25em] uppercase font-semibold flex items-center gap-1.5">
                <span>Brasília / DF</span>
                <span className="text-emerald-400 font-bold">• {currentAct.name}</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items - 9 Journey Tabs */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0e1310]/80 border border-white/[0.08] rounded-lg px-2 py-1 backdrop-blur-md">
            {JOURNEY_TABS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleSelect(item.id)}
                  className={`px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase transition-all rounded cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-[#0a0c0b] font-bold shadow-sm shadow-emerald-950/60'
                      : 'text-slate-400 hover:text-emerald-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </nav>

          {/* Action Utilities */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              id="nav-sound-toggle-btn"
              onClick={handleToggleSound}
              className="p-2 rounded bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 border border-white/[0.1] transition-colors cursor-pointer"
              title={isMuted ? 'Ativar sintetizador de áudio' : 'Mutar áudio'}
              aria-label="Controle de Áudio"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              )}
            </button>

            {/* Screensaver Preview */}
            <button
              id="nav-screensaver-btn"
              onClick={onTriggerScreensaver}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 border border-white/[0.1] text-[11px] font-mono tracking-wider transition-colors cursor-pointer"
              title="Iniciar visualizador / screensaver"
            >
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span className="hidden md:inline uppercase text-[10px]">Screensaver</span>
            </button>

            {/* Curriculum Modal Button */}
            <button
              id="nav-curriculum-btn"
              onClick={onOpenCurriculum}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.12] text-[11px] font-mono tracking-wider uppercase transition-colors cursor-pointer"
            >
              <FileText className="w-3 h-3 text-sky-400" />
              <span>Currículo</span>
            </button>

            {/* CTA Contact */}
            <button
              id="nav-contact-cta"
              onClick={() => handleSelect('contato')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-[#0a0c0b] font-bold text-[11px] tracking-wider uppercase transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Contato</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-white/[0.05] text-slate-200 border border-white/[0.1] cursor-pointer"
              aria-label="Abrir Menu da Jornada"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-dropdown-menu"
            className="xl:hidden mt-3 p-4 bg-[#0d1310] border border-white/10 rounded-xl shadow-2xl flex flex-col gap-2 animate-fadeIn"
          >
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest px-1 pb-1">
              Etapas da Jornada (3 Atos)
            </div>
            <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-white/[0.08]">
              {JOURNEY_TABS.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleSelect(item.id)}
                  className={`text-left px-3 py-2 rounded text-xs font-mono tracking-wider transition-colors ${
                    activeTab === item.id
                      ? 'bg-emerald-500 text-[#0a0c0b] font-bold'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] opacity-75 mr-1.5">{item.tabNumber}</span>
                  {item.shortLabel}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                id="mobile-curriculum-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCurriculum();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-white/5 text-slate-200 text-xs font-mono uppercase tracking-wider border border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Currículo</span>
              </button>

              <button
                id="mobile-screensaver-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTriggerScreensaver();
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-white/5 text-slate-200 text-xs font-mono uppercase tracking-wider border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Screensaver</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

