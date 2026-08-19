import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { NavigationRail } from './components/NavigationRail';
import { PixelDisintegrationEngine, ChapterItem } from './components/PixelDisintegrationEngine';
import { ExperientialHero } from './components/ExperientialHero';
import { OriginWordExperience } from './components/OriginWordExperience';
import { TrajectoryEvolvingLine } from './components/TrajectoryEvolvingLine';
import { InflectionPointSection } from './components/InflectionPointSection';
import { TheTurningPointSection } from './components/TheTurningPointSection';
import { ProjectsUniverseSection } from './components/ProjectsUniverseSection';
import { LudicEscapesSection } from './components/LudicEscapesSection';
import { NowAndFutureSection } from './components/NowAndFutureSection';
import { ExperientialContactFooter } from './components/ExperientialContactFooter';
import { CurriculumModal } from './components/CurriculumModal';
import { ScreensaverOverlay } from './components/ScreensaverOverlay';
import { ScreensaverMode } from './types';

export default function App() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isScreensaverActive, setIsScreensaverActive] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [screensaverMode, setScreensaverMode] = useState<ScreensaverMode>('strategic-path');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setPrefersReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    if (prefersReducedMotion) return;
    inactivityTimerRef.current = setTimeout(() => {
      const modes: ScreensaverMode[] = ['strategic-path', 'data-flow', 'digital-network', 'sound-wave', 'city-ideas'];
      setScreensaverMode(modes[Math.floor(Math.random() * modes.length)]);
      setIsScreensaverActive(true);
    }, 120000);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    const handleUserActivity = () => {
      if (isScreensaverActive) setIsScreensaverActive(false);
      resetInactivityTimer();
    };
    activityEvents.forEach((ev) => window.addEventListener(ev, handleUserActivity, { passive: true }));
    resetInactivityTimer();
    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      activityEvents.forEach((ev) => window.removeEventListener(ev, handleUserActivity));
    };
  }, [isScreensaverActive, resetInactivityTimer]);

  const chapters: ChapterItem[] = useMemo(() => [
    { id: 'entrada', number: '00', title: 'ENTRADA', subtitle: 'JOHN REINNER', transitionType: 'primordial', component: <ExperientialHero onExplore={() => setActiveChapterIndex(1)} onProjects={() => setActiveChapterIndex(5)} onCurriculum={() => setIsCurriculumOpen(true)} /> },
    { id: 'origem', number: '01', title: 'ORIGEM', subtitle: 'DE ONDE EU VENHO', transitionType: 'geometric', component: <OriginWordExperience /> },
    { id: 'trajetoria', number: '02', title: 'TRAJETÓRIA', subtitle: 'EXPERIÊNCIA & LINHA EVOLUTIVA', transitionType: 'military', component: <TrajectoryEvolvingLine /> },
    { id: 'inflexao', number: '03', title: 'INFLEXÃO', subtitle: 'O EXÉRCITO & FORMAÇÃO', transitionType: 'matrix-tech', component: <InflectionPointSection /> },
    { id: 'virada', number: '04', title: 'A VIRADA', subtitle: 'TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL', transitionType: 'neural-ai', component: <TheTurningPointSection /> },
    { id: 'projetos', number: '05', title: 'PROJETOS', subtitle: 'UNIVERSOS EM CRIAÇÃO', transitionType: 'prototype', component: <ProjectsUniverseSection /> },
    { id: 'laboratorio', number: '06', title: 'LABORATÓRIO', subtitle: 'COMPOSIÇÃO & SÍNTESE SONORA', transitionType: 'harmonic-wave', component: <LudicEscapesSection /> },
    { id: 'agora', number: '07', title: 'AGORA & FUTURO', subtitle: 'O PRÓXIMO CAPÍTULO', transitionType: 'magnetic-future', component: <NowAndFutureSection /> },
    { id: 'contato', number: '08', title: 'CONTATO', subtitle: 'CONEXÃO & DIÁLOGO', transitionType: 'minimal-destiny', component: <ExperientialContactFooter /> }
  ], []);

  return (
    <div className="min-h-screen bg-[#070908] text-[#e2e8f0] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      <a href="#main-content" className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] bg-emerald-300 text-slate-950 px-4 py-2 rounded font-bold">Pular para o conteúdo</a>
      {!prefersReducedMotion && <CustomCursor />}
      <NavigationRail activeChapterIndex={activeChapterIndex} onSelectChapterIndex={setActiveChapterIndex} onOpenCurriculum={() => setIsCurriculumOpen(true)} onOpenScreensaver={() => { setScreensaverMode('strategic-path'); setIsScreensaverActive(true); }} />
      <main id="main-content" className="w-full relative" tabIndex={-1}>
        <PixelDisintegrationEngine chapters={chapters} activeChapterIndex={activeChapterIndex} onChapterChange={setActiveChapterIndex} />
      </main>
      <CurriculumModal isOpen={isCurriculumOpen} onClose={() => setIsCurriculumOpen(false)} />
      <ScreensaverOverlay isActive={isScreensaverActive} onExit={() => setIsScreensaverActive(false)} initialMode={screensaverMode} />
    </div>
  );
}
