import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, FileText, Compass, ArrowUp, Menu, X } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavigationRailProps {
  onOpenCurriculum: () => void;
  onOpenScreensaver: () => void;
  activeChapterIndex?: number;
  onSelectChapterIndex?: (index: number) => void;
}

export const CHAPTERS = [
  { id: 'entrada', label: 'ENTRADA', num: '00' },
  { id: 'origem', label: 'ORIGEM', num: '01' },
  { id: 'trajetoria', label: 'TRAJETÓRIA', num: '02' },
  { id: 'inflexao', label: 'INFLEXÃO', num: '03' },
  { id: 'virada', label: 'A VIRADA', num: '04' },
  { id: 'projetos', label: 'PROJETOS', num: '05' },
  { id: 'laboratorio', label: 'LABORATÓRIO', num: '06' },
  { id: 'agora', label: 'AGORA & FUTURO', num: '07' },
  { id: 'contato', label: 'CONTATO', num: '08' }
];

export const NavigationRail: React.FC<NavigationRailProps> = ({
  onOpenCurriculum,
  onOpenScreensaver,
  activeChapterIndex = 0,
  onSelectChapterIndex
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const activeChapterId = CHAPTERS[activeChapterIndex]?.id || 'entrada';
  const progressPercent = Math.round((activeChapterIndex / (CHAPTERS.length - 1)) * 100);

  const handleSelect = (index: number) => {
    setIsOpenMobile(false);
    if (onSelectChapterIndex) {
      onSelectChapterIndex(index);
    } else {
      const el = document.getElementById(CHAPTERS[index].id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleSound = () => {
    const muted = audioSynth.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      audioSynth.playNavClick();
    }
  };

  return (
    <>
      {/* Top Floating Mini Header Brand (Ultra-minimalist) */}
      <header className="fixed top-0 left-0 right-0 z-40 px-5 py-4 pointer-events-none flex items-center justify-between">
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => handleSelect(0)}
            data-cursor="TOP"
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0c120e]/90 border border-white/[0.12] flex items-center justify-center font-heading font-extrabold text-xs text-slate-100 group-hover:border-emerald-400/80 group-hover:text-emerald-300 transition-all backdrop-blur-md">
              JR
            </div>
            <div className="hidden sm:block">
              <span className="text-[11px] font-heading font-extrabold tracking-[0.2em] text-slate-200 uppercase group-hover:text-emerald-300 transition-colors">
                JOHN REINNER
              </span>
              <span className="text-[8px] font-mono tracking-[0.25em] text-emerald-400/80 block uppercase">
                EXPERIÊNCIA DIGITAL
              </span>
            </div>
          </button>
        </div>

        {/* Action Pills */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={handleToggleSound}
            data-cursor="ÁUDIO"
            className="w-8 h-8 rounded-sm bg-[#0c120e]/90 border border-white/[0.12] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-400/60 transition-all backdrop-blur-md cursor-pointer"
            title={isMuted ? 'Ativar sintetizador sonoro' : 'Mutar áudio'}
            aria-label="Controle de Áudio"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-500" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
          </button>

          <button
            onClick={onOpenScreensaver}
            data-cursor="VISUAL"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#0c120e]/90 border border-white/[0.12] text-slate-300 hover:text-white hover:border-white/30 text-[10px] font-mono tracking-wider transition-all backdrop-blur-md cursor-pointer"
            title="Screensaver Algorítmico"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>UNIVERSO</span>
          </button>

          <button
            onClick={onOpenCurriculum}
            data-cursor="CURRÍCULO"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/[0.05] border border-white/[0.15] text-slate-200 hover:text-white hover:border-emerald-400/60 text-[10px] font-mono tracking-wider uppercase transition-all backdrop-blur-md cursor-pointer"
          >
            <FileText className="w-3 h-3 text-sky-400" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpenMobile(!isOpenMobile)}
            className="lg:hidden w-8 h-8 rounded-sm bg-[#0c120e]/90 border border-white/[0.12] flex items-center justify-center text-slate-200 backdrop-blur-md cursor-pointer"
            aria-label="Menu"
          >
            {isOpenMobile ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Floating Vertical Progress Rail on Desktop (Right Side) */}
      <aside aria-label="Navegação em Capítulos" className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2 pointer-events-auto">
        <div className="bg-[#0c120e]/85 backdrop-blur-md border border-white/[0.08] rounded-xl p-3 shadow-2xl flex flex-col gap-1.5">
          <div className="text-[8px] font-mono tracking-[0.25em] text-slate-500 uppercase px-2 pb-1 border-b border-white/[0.06] text-right">
            CAPÍTULOS
          </div>
          {CHAPTERS.map((chap, idx) => {
            const isActive = activeChapterId === chap.id;
            return (
              <button
                key={chap.id}
                onClick={() => handleSelect(idx)}
                data-cursor="SALTAR"
                className={`group flex items-center justify-end gap-2.5 px-2 py-1 rounded transition-all text-right cursor-pointer ${
                  isActive
                    ? 'text-emerald-300 font-bold bg-emerald-500/10'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-white/[0.02]'
                }`}
              >
                <span className={`text-[10px] font-mono tracking-wider transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {chap.label}
                </span>
                <span className={`text-[9px] font-mono ${isActive ? 'text-emerald-400 font-bold' : 'text-slate-600'}`}>
                  {chap.num}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-emerald-400 scale-125 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                      : 'bg-slate-700 group-hover:bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Global Progress Bar Indicator */}
        <div className="w-full flex items-center justify-between px-1 text-[9px] font-mono text-slate-500">
          <span>PROGRESSO</span>
          <span className="text-emerald-400 font-bold">{progressPercent}%</span>
        </div>
      </aside>

      {/* Mobile Chapter Drawer Modal */}
      {isOpenMobile && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#070908]/95 backdrop-blur-xl p-6 flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <span className="font-heading font-bold text-sm tracking-widest text-slate-200 uppercase">
              CAPÍTULOS DA EXPERIÊNCIA
            </span>
            <button
              onClick={() => setIsOpenMobile(false)}
              className="p-2 rounded bg-white/[0.05] text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-6 overflow-y-auto">
            {CHAPTERS.map((chap, idx) => {
              const isActive = activeChapterId === chap.id;
              return (
                <button
                  key={chap.id}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between p-3 rounded-lg text-left transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-[#070908] font-bold'
                      : 'bg-white/[0.02] text-slate-300 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="text-xs font-mono uppercase tracking-wider">{chap.label}</span>
                  <span className="text-[10px] font-mono opacity-80">{chap.num}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
            <button
              onClick={() => {
                setIsOpenMobile(false);
                onOpenCurriculum();
              }}
              className="flex-1 py-3 rounded bg-white/[0.06] text-slate-200 text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Ver Currículo</span>
            </button>
            <button
              onClick={() => {
                setIsOpenMobile(false);
                onOpenScreensaver();
              }}
              className="flex-1 py-3 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Universo</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
