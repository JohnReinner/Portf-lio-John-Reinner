import React, { useEffect, useRef, useState } from 'react';
import { ScreensaverMode } from '../types';
import { Sparkles, X, Shuffle, Volume2, VolumeX } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface ScreensaverOverlayProps {
  isActive: boolean;
  onExit: () => void;
  initialMode?: ScreensaverMode;
}

const MODES: ScreensaverMode[] = [
  'strategic-path',
  'data-flow',
  'digital-network',
  'sound-wave',
  'city-ideas'
];

const MODE_LABELS: Record<ScreensaverMode, { title: string; subtitle: string }> = {
  'strategic-path': {
    title: 'CAMINHO ESTRATÉGICO',
    subtitle: 'Navegando entre Administração, Negócios, Gestão, Tecnologia e Inovação'
  },
  'data-flow': {
    title: 'FLUXO DE DADOS & GESTÃO',
    subtitle: 'Transformando processos em métricas e inteligência operacional'
  },
  'digital-network': {
    title: 'REDE NEURAL DE COMPETÊNCIAS',
    subtitle: 'Conexões multidisciplinares ampliadas por Inteligência Artificial'
  },
  'sound-wave': {
    title: 'FREQUÊNCIA SONORA: JOHN REINNER',
    subtitle: 'Laboratório Criativo — Harmonia, Composição e Síntese de Áudio'
  },
  'city-ideas': {
    title: 'CIDADE DAS IDEIAS & SOLUÇÕES',
    subtitle: 'Estruturação progressiva de plataformas e arquitetura de novos projetos'
  }
};

export const ScreensaverOverlay: React.FC<ScreensaverOverlayProps> = ({
  isActive,
  onExit,
  initialMode = 'strategic-path'
}) => {
  const [currentMode, setCurrentMode] = useState<ScreensaverMode>(initialMode);
  const [isMuted, setIsMuted] = useState(audioSynth.getIsMuted());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Switch to next mode randomly without immediate repeat
  const nextRandomMode = () => {
    const available = MODES.filter((m) => m !== currentMode);
    const chosen = available[Math.floor(Math.random() * available.length)];
    setCurrentMode(chosen);
  };

  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = () => onExit();
    const handlePointerDown = () => onExit();

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isActive, onExit]);

  // Main Canvas animation logic for 5 cinematic modes
  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let tick = 0;

    // Data for Strategic Path
    const pathStations = [
      'ORIGEM',
      'ADMINISTRAÇÃO',
      'SEGUROS & PMEs',
      'CONTRATOS PÚBLICOS',
      'MARKETING DIGITAL',
      'TECNOLOGIA & TI',
      'INTELIGÊNCIA ARTIFICIAL',
      'INOVAÇÃO'
    ];

    // Data for Digital Network
    const netNodes = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 3 + 1.5,
      pulse: Math.random() * Math.PI * 2
    }));

    // Data for City of Ideas
    const cityBuildings = Array.from({ length: 28 }, (_, i) => ({
      x: (width / 30) * i + Math.random() * 15,
      targetHeight: 120 + Math.random() * 260,
      currentHeight: 0,
      width: 24 + Math.random() * 20,
      color: ['#10b981', '#0284c7', '#0d9488', '#38bdf8', '#6366f1'][i % 5],
      speed: 1.5 + Math.random() * 2.5
    }));

    const render = () => {
      tick += 0.025;
      ctx.fillStyle = 'rgba(11, 15, 18, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // --- 1. STRATEGIC PATH MODE ---
      if (currentMode === 'strategic-path') {
        const centerY = height / 2;
        const total = pathStations.length;
        const spacing = width / (total + 1);

        // Draw flowing backbone
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.lineWidth = 3;
        ctx.moveTo(spacing, centerY);
        for (let i = 0; i < total; i++) {
          const x = spacing * (i + 1);
          const y = centerY + Math.sin(tick + i * 0.8) * 35;
          ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw nodes and active runner
        const activeIdx = Math.floor((tick * 0.8) % total);
        pathStations.forEach((station, i) => {
          const x = spacing * (i + 1);
          const y = centerY + Math.sin(tick + i * 0.8) * 35;
          const isActive = i === activeIdx;

          ctx.beginPath();
          ctx.arc(x, y, isActive ? 9 : 5, 0, Math.PI * 2);
          ctx.fillStyle = isActive ? '#34d399' : '#64748b';
          ctx.shadowBlur = isActive ? 15 : 0;
          ctx.shadowColor = '#10b981';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Station Label
          ctx.font = `${isActive ? '600 13px' : '400 11px'} "Plus Jakarta Sans", sans-serif`;
          ctx.fillStyle = isActive ? '#ffffff' : '#94a3b8';
          ctx.textAlign = 'center';
          ctx.fillText(station, x, y - 22);
        });

        // Pulsing core text
        ctx.font = '800 36px "Syne", sans-serif';
        ctx.fillStyle = 'rgba(248, 250, 252, 0.9)';
        ctx.textAlign = 'center';
        ctx.fillText('JOHN REINNER', width / 2, height / 2 - 120);

        ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#10b981';
        ctx.fillText('ESTRATÉGIA • GESTÃO • TECNOLOGIA • INOVAÇÃO', width / 2, height / 2 - 85);
      }

      // --- 2. DATA FLOW MODE ---
      else if (currentMode === 'data-flow') {
        const streamCount = 18;
        for (let s = 0; s < streamCount; s++) {
          const x = (width / streamCount) * s + 20;
          const speed = (s % 3 + 1) * 2;
          const yHead = ((tick * 100 * speed + s * 120) % (height + 200)) - 100;

          ctx.beginPath();
          const gradient = ctx.createLinearGradient(x, yHead - 140, x, yHead);
          gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0.7)');
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.moveTo(x, yHead - 140);
          ctx.lineTo(x, yHead);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(x, yHead, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }

        ctx.font = '700 28px "Syne", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.textAlign = 'center';
        ctx.fillText('DATA & WORKFLOW ARCHITECTURE', width / 2, height / 2);

        ctx.font = '400 14px "JetBrains Mono", monospace';
        ctx.fillStyle = '#34d399';
        ctx.fillText('EXPERIÊNCIA → DADOS → CONEXÕES → INTELIGÊNCIA', width / 2, height / 2 + 35);
      }

      // --- 3. DIGITAL NETWORK MODE ---
      else if (currentMode === 'digital-network') {
        netNodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          node.pulse += 0.05;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + Math.sin(node.pulse) * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
        });

        for (let i = 0; i < netNodes.length; i++) {
          for (let j = i + 1; j < netNodes.length; j++) {
            const dx = netNodes[i].x - netNodes[j].x;
            const dy = netNodes[i].y - netNodes[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 160) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(16, 185, 129, ${ (1 - d / 160) * 0.35 })`;
              ctx.lineWidth = 1;
              ctx.moveTo(netNodes[i].x, netNodes[i].y);
              ctx.lineTo(netNodes[j].x, netNodes[j].y);
              ctx.stroke();
            }
          }
        }

        ctx.font = '800 32px "Syne", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('ECOSSISTEMA INTEGRADO', width / 2, height / 2 - 10);

        ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('ADMINISTRAÇÃO • NEGÓCIOS • TECNOLOGIA • IA', width / 2, height / 2 + 25);
      }

      // --- 4. SOUND WAVE MODE ---
      else if (currentMode === 'sound-wave') {
        const centerY = height / 2;
        const waveCount = 4;

        for (let w = 0; w < waveCount; w++) {
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = ['#8b5cf6', '#38bdf8', '#10b981', '#ec4899'][w];
          for (let x = 0; x < width; x += 6) {
            const freq = 0.008 * (w + 1);
            const amp = 40 + Math.sin(tick * 2 + w) * 25;
            const envelope = Math.sin((x / width) * Math.PI);
            const y = centerY + Math.sin(x * freq + tick * (w + 1.5)) * amp * envelope;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Center typography
        ctx.font = '800 42px "Syne", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('JOHN REINNER', width / 2, centerY - 60);

        ctx.font = '600 13px "JetBrains Mono", monospace';
        ctx.fillStyle = '#c084fc';
        ctx.fillText('CREATIVE AUDIO LAB & SYNTHESIS // 432 Hz', width / 2, centerY + 70);
      }

      // --- 5. CITY OF IDEAS MODE ---
      else if (currentMode === 'city-ideas') {
        const groundY = height - 120;

        // Ground baseline
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
        ctx.lineWidth = 2;
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();

        // Draw animated buildings
        cityBuildings.forEach((b) => {
          if (b.currentHeight < b.targetHeight) {
            b.currentHeight += b.speed;
          }

          ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
          ctx.fillRect(b.x, groundY - b.currentHeight, b.width, b.currentHeight);

          ctx.strokeStyle = b.color;
          ctx.lineWidth = 1.2;
          ctx.strokeRect(b.x, groundY - b.currentHeight, b.width, b.currentHeight);

          // Roof beacon
          if (b.currentHeight >= b.targetHeight - 5) {
            ctx.beginPath();
            ctx.arc(b.x + b.width / 2, groundY - b.currentHeight - 5, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.fill();
          }
        });

        ctx.font = '800 32px "Syne", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('CIDADE DAS SOLUÇÕES', width / 2, 160);

        ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#34d399';
        ctx.fillText('Construção contínua de plataformas, projetos e novos caminhos', width / 2, 195);
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [isActive, currentMode]);

  if (!isActive) return null;

  return (
    <div 
      id="screensaver-overlay"
      className="fixed inset-0 z-50 bg-[#0b0f12]/95 backdrop-blur-md flex flex-col justify-between p-6 select-none cursor-pointer animate-fadeIn"
      onClick={onExit}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Top Controls Bar */}
      <div 
        className="relative z-10 flex items-center justify-between max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs text-emerald-400 tracking-wider uppercase">
            Modo Screensaver Ativo ({MODE_LABELS[currentMode].title})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <button
            id="screensaver-switch-btn"
            onClick={nextRandomMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
            title="Alternar modo visual"
          >
            <Shuffle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Alternar Efeito</span>
          </button>

          {/* Sound Toggle */}
          <button
            id="screensaver-sound-btn"
            onClick={() => {
              const muted = audioSynth.toggleMute();
              setIsMuted(muted);
              if (!muted) {
                audioSynth.playChord([261.63, 329.63, 392.0, 523.25], 2.5);
              }
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            title={isMuted ? 'Ativar harmonia sonora' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Exit Button */}
          <button
            id="screensaver-exit-btn"
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-xs text-emerald-300 border border-emerald-500/30 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Voltar ao Portfólio</span>
          </button>
        </div>
      </div>

      {/* Bottom Information and Wake instructions */}
      <div 
        className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left pt-6 border-t border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="text-sm font-semibold text-slate-200">
            {MODE_LABELS[currentMode].title}
          </h3>
          <p className="text-xs text-slate-400">
            {MODE_LABELS[currentMode].subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Mova o mouse, toque na tela ou aperte qualquer tecla para continuar</span>
        </div>
      </div>
    </div>
  );
};
