import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { ChevronDown, ChevronUp, ArrowDown, Sparkles, ScrollText, CheckCircle2 } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export type TransitionType = 
  | 'primordial'       // Entrada -> Origem
  | 'geometric'        // Origem -> Trajetória
  | 'military'         // Trajetória -> Exército
  | 'matrix-tech'      // Exército -> Tecnologia
  | 'neural-ai'        // Tecnologia -> IA/Virada
  | 'prototype'        // IA -> Projetos
  | 'harmonic-wave'    // Projetos -> Laboratório
  | 'magnetic-future'  // Laboratório -> Agora
  | 'minimal-destiny'; // Agora -> Contato

export interface ChapterItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  transitionType: TransitionType;
  component: React.ReactNode;
}

interface PixelDisintegrationEngineProps {
  chapters: ChapterItem[];
  activeChapterIndex: number;
  onChapterChange: (newIndex: number, direction: 'up' | 'down') => void;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  targetAlpha: number;
  shape: 'square' | 'line' | 'cross' | 'node';
  waveOffset?: number;
}

export const PixelDisintegrationEngine: React.FC<PixelDisintegrationEngineProps> = ({
  chapters,
  activeChapterIndex,
  onChapterChange
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transitionProgress, setTransitionProgress] = useState(0); // 0 (settled) to 1 (full transition)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'down' | 'up'>('down');
  const [targetChapterIndex, setTargetChapterIndex] = useState(activeChapterIndex);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'unrolling' | 'materializing'>('idle');
  const [materializationPercent, setMaterializationPercent] = useState(100);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [overscrollIndicator, setOverscrollIndicator] = useState<'none' | 'bottom' | 'top'>('none');

  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const transitionStartTimeRef = useRef<number>(0);
  const isTransitioningRef = useRef(false);
  isTransitioningRef.current = isTransitioning;

  const overscrollAccumulatorRef = useRef<number>(0);
  const overscrollResetTimerRef = useRef<number | null>(null);

  // Detect user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Determine transition archetype between current and next chapter
  const currentTransitionType: TransitionType = useMemo(() => {
    const fromIdx = Math.min(activeChapterIndex, targetChapterIndex);
    const types: TransitionType[] = [
      'primordial',
      'geometric',
      'military',
      'matrix-tech',
      'neural-ai',
      'prototype',
      'harmonic-wave',
      'magnetic-future',
      'minimal-destiny'
    ];
    return types[fromIdx] || 'geometric';
  }, [activeChapterIndex, targetChapterIndex]);

  // Spawn pixel matter particles concentrated around the unrolling papyrus roller crease
  const spawnParticles = useCallback((direction: 'down' | 'up', type: TransitionType) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const count = window.innerWidth < 768 ? 350 : 700;
    const newParticles: Particle[] = [];

    // Direction factor:
    // Scroll DOWN -> particles shed and float upwards (vy negative)
    // Scroll UP -> particles shed and float downwards (vy positive)
    const baseVy = direction === 'down' ? -1 : 1;

    for (let i = 0; i < count; i++) {
      let color = '#34d399'; // Default emerald
      let shape: 'square' | 'line' | 'cross' | 'node' = 'square';
      const size = Math.random() * 3.5 + 1.2;

      // Thematic color & physics based on chapter transition narrative
      switch (type) {
        case 'primordial': // Typographic dust & golden sparks
          color = Math.random() > 0.4 ? '#34d399' : Math.random() > 0.5 ? '#fde047' : '#a855f7';
          shape = Math.random() > 0.6 ? 'square' : 'cross';
          break;
        case 'geometric': // Geometric vectors & linear shards
          color = Math.random() > 0.3 ? '#34d399' : '#38bdf8';
          shape = Math.random() > 0.5 ? 'line' : 'square';
          break;
        case 'military': // Disciplined alignment & structural blocks
          color = Math.random() > 0.3 ? '#10b981' : '#e2e8f0';
          shape = 'square';
          break;
        case 'matrix-tech': // Green/Cyan Matrix data flow
          color = Math.random() > 0.5 ? '#10b981' : Math.random() > 0.3 ? '#06b6d4' : '#22c55e';
          shape = Math.random() > 0.7 ? 'line' : 'square';
          break;
        case 'neural-ai': // Synaptic nodes & neural filaments
          color = Math.random() > 0.4 ? '#38bdf8' : Math.random() > 0.4 ? '#a855f7' : '#34d399';
          shape = 'node';
          break;
        case 'prototype': // Blueprints & modular structures
          color = Math.random() > 0.4 ? '#0284c7' : '#e2e8f0';
          shape = 'square';
          break;
        case 'harmonic-wave': // Sound harmonic waveforms
          color = Math.random() > 0.5 ? '#a855f7' : Math.random() > 0.3 ? '#ec4899' : '#34d399';
          shape = 'node';
          break;
        case 'magnetic-future': // Ascending magnetic streams
          color = Math.random() > 0.4 ? '#34d399' : '#38bdf8';
          shape = 'cross';
          break;
        case 'minimal-destiny': // Clean negative space & monochrome stars
          color = Math.random() > 0.3 ? '#f8fafc' : '#34d399';
          shape = 'square';
          break;
      }

      newParticles.push({
        x: Math.random() * width,
        y: direction === 'down' ? height * (0.2 + Math.random() * 0.8) : height * Math.random() * 0.8,
        z: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * (type === 'harmonic-wave' ? 4 : 2),
        vy: baseVy * (Math.random() * 4.5 + 2) * (Math.random() * 0.8 + 0.6),
        size: size,
        color: color,
        alpha: Math.random() * 0.8 + 0.2,
        targetAlpha: 1,
        shape: shape,
        waveOffset: Math.random() * Math.PI * 2
      });
    }

    particlesRef.current = newParticles;
  }, []);

  // Main Master Transition Controller (Papyrus Unroll + Pixel Disintegration)
  const executeTransition = useCallback((toIndex: number, direction: 'down' | 'up') => {
    if (toIndex < 0 || toIndex >= chapters.length || toIndex === activeChapterIndex || isTransitioningRef.current) {
      return;
    }

    setIsTransitioning(true);
    setTransitionDirection(direction);
    setTargetChapterIndex(toIndex);
    setTransitionProgress(0);
    setTransitionStage('unrolling');
    setOverscrollIndicator('none');
    overscrollAccumulatorRef.current = 0;
    transitionStartTimeRef.current = performance.now();

    // Audio acoustic papyrus sweep & click
    audioSynth.playPapyrusUnrollSound();

    if (!prefersReducedMotion) {
      spawnParticles(direction, currentTransitionType);
    }

    const DURATION = prefersReducedMotion ? 450 : 1050;

    const animateStep = (now: number) => {
      const elapsed = now - transitionStartTimeRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      
      // Silky cubic-bezier easing representing physical parchment unrolling momentum
      const ease = rawProgress < 0.5
        ? 4 * rawProgress * rawProgress * rawProgress
        : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

      setTransitionProgress(ease);

      // Narrative materialization progression
      if (rawProgress < 0.6) {
        setTransitionStage('unrolling');
        setMaterializationPercent(Math.round(15 + rawProgress * 70));
      } else {
        setTransitionStage('materializing');
        const reintegProgress = (rawProgress - 0.6) / 0.4;
        const mappedPercent = Math.min(100, Math.round(60 + reintegProgress * 40));
        setMaterializationPercent(mappedPercent);
      }

      if (rawProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateStep);
      } else {
        // Transition completed: commit new chapter and scroll window to top
        onChapterChange(toIndex, direction);
        setIsTransitioning(false);
        setTransitionStage('idle');
        setMaterializationPercent(100);
        setTransitionProgress(0);
        particlesRef.current = [];

        // Scroll window to top cleanly for the new chapter
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateStep);
  }, [activeChapterIndex, chapters.length, currentTransitionType, onChapterChange, prefersReducedMotion, spawnParticles]);

  // Particle Canvas Render Loop
  useEffect(() => {
    if (!isTransitioning || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particleAnimId: number;
    let time = 0;

    const renderParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.04;

      const particles = particlesRef.current;
      const width = canvas.width;
      const height = canvas.height;

      // Draw neural filaments if in neural-ai transition
      if (currentTransitionType === 'neural-ai') {
        ctx.lineWidth = 0.5;
        for (let i = 0; i < Math.min(particles.length, 70); i++) {
          for (let j = i + 1; j < Math.min(particles.length, 70); j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 85) {
              const lineAlpha = (1 - dist / 85) * 0.25 * (p1.alpha + p2.alpha) / 2;
              ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Calculate the physical Y position of the papyrus unrolling crease
      const unrollCreaseY = transitionDirection === 'down'
        ? transitionProgress * height
        : (1 - transitionProgress) * height;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Waveform oscillation if sound transition
        if (currentTransitionType === 'harmonic-wave') {
          p.x += Math.sin(time + (p.waveOffset || 0)) * 2.5;
        }

        // Draw particle based on geometry
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;

        if (p.shape === 'square') {
          ctx.fillRect(p.x, p.y, p.size * p.z, p.size * p.z);
        } else if (p.shape === 'line') {
          ctx.fillRect(p.x, p.y, p.size * 3 * p.z, p.size * 0.8 * p.z);
        } else if (p.shape === 'cross') {
          const sz = p.size * p.z;
          ctx.fillRect(p.x - sz / 2, p.y, sz, 1);
          ctx.fillRect(p.x, p.y - sz / 2, 1, sz);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.z * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw glowing unrolling crease energy line
      const gradient = ctx.createLinearGradient(0, unrollCreaseY - 10, 0, unrollCreaseY + 10);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
      gradient.addColorStop(0.5, 'rgba(52, 211, 153, 0.45)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, unrollCreaseY - 15, width, 30);

      ctx.globalAlpha = 1;
      particleAnimId = requestAnimationFrame(renderParticles);
    };

    particleAnimId = requestAnimationFrame(renderParticles);

    return () => cancelAnimationFrame(particleAnimId);
  }, [isTransitioning, currentTransitionType, prefersReducedMotion, transitionProgress, transitionDirection]);

  // Window resize handler for canvas
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SMART NATURAL SCROLL HANDLER:
  // 1. Allows user to scroll through the full height of the current page normally.
  // 2. ONLY when user reaches the BOTTOM of the page and attempts to scroll further down -> triggers next chapter.
  // 3. ONLY when user reaches the TOP of the page and attempts to scroll further up -> triggers previous chapter.
  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioningRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        containerRef.current ? containerRef.current.scrollHeight : 0
      );

      const isAtBottom = scrollY + windowHeight >= documentHeight - 20;
      const isAtTop = scrollY <= 15;

      // When user scrolls DOWN
      if (e.deltaY > 0) {
        if (!isAtBottom) {
          // Allow standard scrolling inside the page
          overscrollAccumulatorRef.current = 0;
          setOverscrollIndicator('none');
          return;
        }

        // At the bottom of the page: accumulate intent to unroll next chapter
        if (activeChapterIndex < chapters.length - 1) {
          overscrollAccumulatorRef.current += e.deltaY;
          setOverscrollIndicator('bottom');

          if (overscrollResetTimerRef.current) clearTimeout(overscrollResetTimerRef.current);
          overscrollResetTimerRef.current = window.setTimeout(() => {
            overscrollAccumulatorRef.current = 0;
            setOverscrollIndicator('none');
          }, 400);

          const TRIGGER_THRESHOLD = 90;
          if (overscrollAccumulatorRef.current >= TRIGGER_THRESHOLD) {
            overscrollAccumulatorRef.current = 0;
            setOverscrollIndicator('none');
            executeTransition(activeChapterIndex + 1, 'down');
          }
        }
      } 
      // When user scrolls UP
      else if (e.deltaY < 0) {
        if (!isAtTop) {
          // Allow standard scrolling inside the page
          overscrollAccumulatorRef.current = 0;
          setOverscrollIndicator('none');
          return;
        }

        // At the top of the page: accumulate intent to unroll previous chapter
        if (activeChapterIndex > 0) {
          overscrollAccumulatorRef.current += e.deltaY;
          setOverscrollIndicator('top');

          if (overscrollResetTimerRef.current) clearTimeout(overscrollResetTimerRef.current);
          overscrollResetTimerRef.current = window.setTimeout(() => {
            overscrollAccumulatorRef.current = 0;
            setOverscrollIndicator('none');
          }, 400);

          const TRIGGER_THRESHOLD = -90;
          if (overscrollAccumulatorRef.current <= TRIGGER_THRESHOLD) {
            overscrollAccumulatorRef.current = 0;
            setOverscrollIndicator('none');
            executeTransition(activeChapterIndex - 1, 'up');
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const isAtBottom = scrollY + windowHeight >= documentHeight - 30;
      const isAtTop = scrollY <= 20;

      const SWIPE_THRESHOLD = 70;

      if (diffY > SWIPE_THRESHOLD && isAtBottom && activeChapterIndex < chapters.length - 1) {
        // Swipe UP at the bottom -> unroll next chapter
        executeTransition(activeChapterIndex + 1, 'down');
      } else if (diffY < -SWIPE_THRESHOLD && isAtTop && activeChapterIndex > 0) {
        // Swipe DOWN at the top -> unroll previous chapter
        executeTransition(activeChapterIndex - 1, 'up');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioningRef.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );

      const isAtBottom = scrollY + windowHeight >= documentHeight - 30;
      const isAtTop = scrollY <= 20;

      if ((e.key === 'PageDown' || e.key === 'ArrowDown') && isAtBottom && activeChapterIndex < chapters.length - 1) {
        executeTransition(activeChapterIndex + 1, 'down');
      } else if ((e.key === 'PageUp' || e.key === 'ArrowUp') && isAtTop && activeChapterIndex > 0) {
        executeTransition(activeChapterIndex - 1, 'up');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      if (overscrollResetTimerRef.current) clearTimeout(overscrollResetTimerRef.current);
    };
  }, [activeChapterIndex, chapters.length, executeTransition]);

  // Current and incoming chapters
  const currentChapter = chapters[activeChapterIndex];
  const targetChapter = chapters[targetChapterIndex];

  // PAPYRUS UNROLL & DISINTEGRATION COMPUTATIONS:
  // For Scroll DOWN:
  // The new chapter unrolls progressively from top to bottom:
  // clip-path inset reveals from top downwards: inset(0 0 ${(1 - transitionProgress) * 100}% 0)
  // Roller position travels from top (0%) to bottom (100%).
  // Outgoing chapter dissolves and moves slightly up.

  const unrollPercentage = Math.round(transitionProgress * 100);

  const outgoingOpacity = Math.max(0, 1 - transitionProgress * 1.8);
  const outgoingBlur = transitionProgress * 6;
  const outgoingTranslateY = transitionDirection === 'down'
    ? -transitionProgress * 120
    : transitionProgress * 120;

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#070908]">
      
      {/* 1. Global Disintegration & Pixel Matter Canvas */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 2. Papyrus Unrolling Cylinder Crease Bar (Visual Physical Scroll Unfurl) */}
      {isTransitioning && (
        <div
          style={{
            top: transitionDirection === 'down' ? `${transitionProgress * 100}%` : `${(1 - transitionProgress) * 100}%`,
            transform: 'translateY(-50%)'
          }}
          className="fixed left-0 right-0 z-40 pointer-events-none transition-all ease-out"
        >
          {/* Cylinder 3D Roller Bar */}
          <div className="relative w-full h-8 flex items-center justify-between px-6 bg-gradient-to-r from-emerald-900/90 via-emerald-400/80 to-emerald-900/90 border-y border-emerald-300 shadow-[0_0_40px_rgba(52,211,153,0.6)] backdrop-blur-md">
            
            {/* Left Roll Seal */}
            <div className="flex items-center gap-2">
              <ScrollText className="w-4 h-4 text-[#070908] animate-spin" />
              <span className="text-[10px] font-mono font-extrabold tracking-[0.25em] text-[#070908] uppercase">
                PAPIRO DIGITAL // DESENROLANDO
              </span>
            </div>

            {/* Center Unroll Progress Pill */}
            <div className="px-3 py-0.5 rounded-full bg-[#070908]/80 border border-emerald-400 text-emerald-300 text-[10px] font-mono font-bold tracking-widest uppercase">
              {unrollPercentage}% REVELADO
            </div>

            {/* Right Roll Seal */}
            <div className="text-[10px] font-mono text-[#070908] font-bold tracking-widest hidden sm:block">
              {targetChapter.number} // {targetChapter.title}
            </div>
          </div>

          {/* Curled Papyrus 3D Shadow Gradient */}
          <div className="w-full h-16 bg-gradient-to-b from-emerald-500/20 via-black/60 to-transparent pointer-events-none" />
        </div>
      )}

      {/* 3. Floating Narrative Transition HUD Pill */}
      {isTransitioning && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0c120e]/95 border border-emerald-500/50 text-slate-200 shadow-[0_0_35px_rgba(52,211,153,0.35)] backdrop-blur-xl animate-pulse">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-widest uppercase">
            <span className="text-emerald-300 font-bold">
              {transitionStage === 'unrolling' && `DESENROLANDO PAPIRO [${unrollPercentage}%]`}
              {transitionStage === 'materializing' && `MATERIALIZAÇÃO PIXELAR [${materializationPercent}%]`}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">
              {transitionDirection === 'down' ? `AVANÇANDO PARA ${targetChapter.title}` : `RETORNANDO PARA ${targetChapter.title}`}
            </span>
          </div>
        </div>
      )}

      {/* 4. Active Chapter Content in Natural Document Flow */}
      <div className="relative w-full">
        
        {/* Layer A: Active Settled Chapter (Full Native Height and Hover Enabled) */}
        <div
          id={currentChapter.id}
          style={{
            opacity: isTransitioning ? outgoingOpacity : 1,
            filter: isTransitioning && outgoingBlur > 0.5 ? `blur(${outgoingBlur}px)` : 'none',
            transform: isTransitioning ? `translate3d(0, ${outgoingTranslateY}px, 0)` : 'none',
            willChange: isTransitioning ? 'transform, opacity, filter' : 'auto',
            pointerEvents: isTransitioning ? 'none' : 'auto'
          }}
          className="w-full transition-all ease-out"
        >
          {currentChapter.component}

          {/* End of Chapter Narrative Unroll Prompt Banner */}
          {activeChapterIndex < chapters.length - 1 && !isTransitioning && (
            <div className="py-16 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
              <div className="h-px w-24 bg-emerald-500/40 mb-6" />
              
              <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-400 uppercase font-bold mb-2">
                FIM DO CAPÍTULO {currentChapter.number}
              </span>
              
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-slate-200 uppercase mb-4">
                Pronto para avançar na narrativa?
              </h3>
              
              <button
                onClick={() => executeTransition(activeChapterIndex + 1, 'down')}
                data-cursor="DESENROLAR"
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 via-emerald-500/30 to-emerald-500/20 border border-emerald-400/60 text-emerald-300 hover:bg-emerald-500 hover:text-[#070908] transition-all cursor-pointer shadow-[0_0_25px_rgba(52,211,153,0.25)] font-mono text-xs font-bold uppercase tracking-wider"
              >
                <ScrollText className="w-4 h-4 text-emerald-400 group-hover:text-[#070908] transition-colors" />
                <span>Desenrolar Próximo Capítulo ({chapters[activeChapterIndex + 1]?.title})</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <span className="text-[10px] font-mono text-slate-500 mt-3">
                Ou continue rolando para baixo para desenrolar o papiro
              </span>
            </div>
          )}
        </div>

        {/* Layer B: Incoming Chapter during Papyrus Unroll */}
        {isTransitioning && targetChapter && (
          <div
            id={`${targetChapter.id}-incoming`}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'hidden',
              clipPath: transitionDirection === 'down'
                ? `inset(0 0 ${(1 - transitionProgress) * 100}% 0)`
                : `inset(${transitionProgress * 100}% 0 0 0)`,
              filter: `contrast(${1 + (1 - transitionProgress) * 0.2}) brightness(${1 + (1 - transitionProgress) * 0.1})`,
              willChange: 'clip-path, filter',
              pointerEvents: 'none'
            }}
            className="w-full z-25 bg-[#070908]"
          >
            {targetChapter.component}
          </div>
        )}

      </div>

      {/* 5. Sticky Bottom Right Navigation Controls */}
      <nav aria-label="Controles de fluxo de navegação" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pointer-events-auto">
        {activeChapterIndex > 0 && (
          <button
            onClick={() => executeTransition(activeChapterIndex - 1, 'up')}
            disabled={isTransitioning}
            data-cursor="ANTERIOR"
            className="p-3 rounded-full bg-[#0c120e]/90 border border-white/[0.12] text-slate-300 hover:text-white hover:border-emerald-400/80 transition-all backdrop-blur-md cursor-pointer shadow-lg disabled:opacity-30 disabled:cursor-not-allowed group"
            title="Capítulo Anterior (Scroll Up no topo)"
            aria-label="Capítulo Anterior"
          >
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {activeChapterIndex < chapters.length - 1 && (
          <button
            onClick={() => executeTransition(activeChapterIndex + 1, 'down')}
            disabled={isTransitioning}
            data-cursor="DESENROLAR"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-emerald-300 hover:bg-emerald-500 hover:text-[#070908] transition-all backdrop-blur-md cursor-pointer shadow-[0_0_20px_rgba(52,211,153,0.2)] disabled:opacity-30 disabled:cursor-not-allowed font-mono text-xs font-bold uppercase tracking-wider group"
            title="Desenrolar Próximo Capítulo"
            aria-label="Próximo Capítulo"
          >
            <ScrollText className="w-3.5 h-3.5" />
            <span>Avançar</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        )}
      </nav>

    </div>
  );
};
