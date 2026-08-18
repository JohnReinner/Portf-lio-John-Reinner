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

  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    // 45 seconds of total inactivity triggers ambient generative universe
    inactivityTimerRef.current = setTimeout(() => {
      const modes: ScreensaverMode[] = [
        'strategic-path',
        'data-flow',
        'digital-network',
        'sound-wave',
        'city-ideas'
      ];
      const randomMode = modes[Math.floor(Math.random() * modes.length)];
      setScreensaverMode(randomMode);
      setIsScreensaverActive(true);
    }, 45000);
  }, []);

  useEffect(() => {
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];

    const handleUserActivity = () => {
      if (isScreensaverActive) {
        setIsScreensaverActive(false);
      }
      resetInactivityTimer();
    };

    activityEvents.forEach((ev) => {
      window.addEventListener(ev, handleUserActivity, { passive: true });
    });

    resetInactivityTimer();

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      activityEvents.forEach((ev) => {
        window.removeEventListener(ev, handleUserActivity);
      });
    };
  }, [isScreensaverActive, resetInactivityTimer]);

  const chapters: ChapterItem[] = useMemo(() => [
    {
      id: 'entrada',
      number: '00',
      title: 'ENTRADA',
      subtitle: 'JOHN REINNER',
      transitionType: 'primordial',
      component: <ExperientialHero onExplore={() => setActiveChapterIndex(1)} />
    },
    {
      id: 'origem',
      number: '01',
      title: 'ORIGEM',
      subtitle: 'DE ONDE EU VENHO',
      transitionType: 'geometric',
      component: <OriginWordExperience />
    },
    {
      id: 'trajetoria',
      number: '02',
      title: 'TRAJETÓRIA',
      subtitle: 'EXPERIÊNCIA & LINHA EVOLUTIVA',
      transitionType: 'military',
      component: <TrajectoryEvolvingLine />
    },
    {
      id: 'inflexao',
      number: '03',
      title: 'INFLEXÃO',
      subtitle: 'O EXÉRCITO & FORMAÇÃO',
      transitionType: 'matrix-tech',
      component: <InflectionPointSection />
    },
    {
      id: 'virada',
      number: '04',
      title: 'A VIRADA',
      subtitle: 'TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL',
      transitionType: 'neural-ai',
      component: <TheTurningPointSection />
    },
    {
      id: 'projetos',
      number: '05',
      title: 'PROJETOS',
      subtitle: 'UNIVERSOS EM CRIAÇÃO',
      transitionType: 'prototype',
      component: <ProjectsUniverseSection />
    },
    {
      id: 'laboratorio',
      number: '06',
      title: 'LABORATÓRIO',
      subtitle: 'COMPOSIÇÃO & SÍNTESE SONORA',
      transitionType: 'harmonic-wave',
      component: <LudicEscapesSection />
    },
    {
      id: 'agora',
      number: '07',
      title: 'AGORA & FUTURO',
      subtitle: 'O PRÓXIMO CAPÍTULO',
      transitionType: 'magnetic-future',
      component: <NowAndFutureSection />
    },
    {
      id: 'contato',
      number: '08',
      title: 'CONTATO',
      subtitle: 'CONEXÃO & DIÁLOGO',
      transitionType: 'minimal-destiny',
      component: <ExperientialContactFooter />
    }
  ], []);

  const handleChapterChange = useCallback((newIndex: number) => {
    setActiveChapterIndex(newIndex);
  }, []);

  return (
    <div className="min-h-screen bg-[#070908] text-[#e2e8f0] relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 1. Custom Interactive Magnetic Cursor */}
      <CustomCursor />

      {/* 2. Floating Minimalist Navigation Rail */}
      <NavigationRail
        activeChapterIndex={activeChapterIndex}
        onSelectChapterIndex={(idx) => setActiveChapterIndex(idx)}
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
        onOpenScreensaver={() => {
          setScreensaverMode('strategic-path');
          setIsScreensaverActive(true);
        }}
      />

      {/* 3. Main Experimental Digital Experience with Pixel Disintegration Engine */}
      <main id="main-content" className="w-full relative">
        <PixelDisintegrationEngine
          chapters={chapters}
          activeChapterIndex={activeChapterIndex}
          onChapterChange={handleChapterChange}
        />
      </main>

      {/* 4. Structured Curriculum Vitae Modal */}
      <CurriculumModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />

      {/* 5. Interactive Ambient Screensaver Universe */}
      <ScreensaverOverlay
        isActive={isScreensaverActive}
        onExit={() => setIsScreensaverActive(false)}
        initialMode={screensaverMode}
      />

    </div>
  );
}


