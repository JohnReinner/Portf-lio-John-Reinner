import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, FileText, Menu, X, Sun, Moon } from 'lucide-react';
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

export const NavigationRail: React.FC<NavigationRailProps> = ({ onOpenCurriculum, onOpenScreensaver, activeChapterIndex = 0, onSelectChapterIndex }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const activeChapterId = CHAPTERS[activeChapterIndex]?.id || 'entrada';
  const progressPercent = Math.round((activeChapterIndex / (CHAPTERS.length - 1)) * 100);
  const handleSelect = (index: number) => { setIsOpenMobile(false); onSelectChapterIndex?.(index); };
  const handleToggleSound = () => { const muted = audioSynth.toggleMute(); setIsMuted(muted); if (!muted) audioSynth.playNavClick(); };
  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-5 py-4 pointer-events-none flex items-center justify-between theme-nav">
        <div className="pointer-events-auto flex items-center gap-3">
          <button onClick={() => handleSelect(0)} data-cursor="TOP" className="flex items-center gap-2 group text-left cursor-pointer">
            <div className="theme-control w-8 h-8 rounded-sm flex items-center justify-center font-heading font-extrabold text-xs transition-all backdrop-blur-md">JR</div>
            <div className="hidden sm:block"><span className="theme-primary text-[11px] font-heading font-extrabold tracking-[0.2em] uppercase">JOHN REINNER</span><span className="text-[8px] font-mono tracking-[0.25em] text-emerald-500 block uppercase">EXPERIÊNCIA DIGITAL</span></div>
          </button>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <button onClick={toggleTheme} className="theme-control w-8 h-8 rounded-sm flex items-center justify-center transition-all backdrop-blur-md cursor-pointer" title={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}>
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button onClick={handleToggleSound} className="theme-control w-8 h-8 rounded-sm flex items-center justify-center transition-all backdrop-blur-md cursor-pointer" aria-label="Controle de áudio">{isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-500" />}</button>
          <button onClick={onOpenScreensaver} className="theme-control hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-mono tracking-wider transition-all backdrop-blur-md cursor-pointer"><Sparkles className="w-3 h-3 text-emerald-500" /><span>UNIVERSO</span></button>
          <button onClick={onOpenCurriculum} className="theme-control hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-mono tracking-wider uppercase transition-all backdrop-blur-md cursor-pointer"><FileText className="w-3 h-3" /><span>CV</span></button>
          <button onClick={() => setIsOpenMobile(!isOpenMobile)} className="theme-control lg:hidden w-8 h-8 rounded-sm flex items-center justify-center backdrop-blur-md cursor-pointer" aria-label="Menu">{isOpenMobile ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</button>
        </div>
      </header>

      <aside aria-label="Navegação em Capítulos" className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2 pointer-events-auto">
        <div className="theme-panel backdrop-blur-md rounded-xl p-3 shadow-2xl flex flex-col gap-1.5">
          <div className="theme-muted text-[8px] font-mono tracking-[0.25em] uppercase px-2 pb-1 text-right">CAPÍTULOS</div>
          {CHAPTERS.map((chap, idx) => { const isActive = activeChapterId === chap.id; return <button key={chap.id} onClick={() => handleSelect(idx)} className={`group flex items-center justify-end gap-2.5 px-2 py-1 rounded text-right cursor-pointer ${isActive ? 'text-emerald-500 font-bold bg-emerald-500/10' : 'theme-muted'}`}><span className={`text-[10px] font-mono tracking-wider ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>{chap.label}</span><span className="text-[9px] font-mono">{chap.num}</span><span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 scale-125' : 'bg-slate-500'}`} /></button>; })}
        </div>
        <div className="w-full flex items-center justify-between px-1 text-[9px] font-mono theme-muted"><span>PROGRESSO</span><span className="text-emerald-500 font-bold">{progressPercent}%</span></div>
      </aside>

      {isOpenMobile && <div className="theme-mobile lg:hidden fixed inset-0 z-50 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between pb-6"><span className="theme-primary font-heading font-bold text-sm tracking-widest uppercase">CAPÍTULOS DA EXPERIÊNCIA</span><button onClick={() => setIsOpenMobile(false)} className="theme-control p-2 rounded"><X className="w-5 h-5" /></button></div>
        <div className="flex flex-col gap-2 py-6 overflow-y-auto">{CHAPTERS.map((chap, idx) => <button key={chap.id} onClick={() => handleSelect(idx)} className={`flex items-center justify-between p-3 rounded-lg text-left ${activeChapterId === chap.id ? 'bg-emerald-500 text-[#07100b] font-bold' : 'theme-control'}`}><span className="text-xs font-mono uppercase tracking-wider">{chap.label}</span><span className="text-[10px] font-mono opacity-80">{chap.num}</span></button>)}</div>
        <div className="pt-4 flex items-center gap-3"><button onClick={() => { setIsOpenMobile(false); onOpenCurriculum(); }} className="theme-control flex-1 py-3 rounded text-xs font-mono uppercase flex justify-center gap-2"><FileText className="w-3.5 h-3.5" />Ver Currículo</button><button onClick={toggleTheme} className="theme-control flex-1 py-3 rounded text-xs font-mono uppercase flex justify-center gap-2">{theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}{theme === 'dark' ? 'Modo claro' : 'Modo escuro'}</button></div>
      </div>}
    </>
  );
};
