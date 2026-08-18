import React, { useState } from 'react';
import { AUDIO_EXPERIMENTS } from '../data/portfolioData';
import { AudioExperiment } from '../types';
import { 
  Music, 
  Play, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Radio, 
  Sliders, 
  Plus, 
  Disc,
  Headphones
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const CreativeLabSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(AUDIO_EXPERIMENTS[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState(audioSynth.getIsMuted());

  const creativeSteps = [
    { title: 'IDEIA', desc: 'Concepção do tema emocional ou narrativa conceitual' },
    { title: 'COMPOSIÇÃO', desc: 'Estruturação melódica, tonalidade e progressões' },
    { title: 'ARRANJO', desc: 'Definição de instrumentos, dinâmicas e texturas' },
    { title: 'IA & SÍNTESE', desc: 'Exploração de timbres generativos e sound design' },
    { title: 'PRODUÇÃO', desc: 'Mixagem preliminar e masterização digital' }
  ];

  const handlePlayPad = (freq: number) => {
    audioSynth.playTone(freq, 1.4, 'triangle');
  };

  const handlePlayExperiment = (exp: AudioExperiment) => {
    setActiveExpId(exp.id);
    setIsPlaying(true);
    audioSynth.playChord(exp.frequencies, 2.5);
    setTimeout(() => setIsPlaying(false), 2500);
  };

  return (
    <section id="laboratorio" className="py-24 relative bg-[#0c0914] border-t border-purple-500/20 overflow-hidden">
      {/* Subtle Purple / Cyan Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-cyan-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>11 // LABORATÓRIO CRIATIVO & PRODUÇÃO MUSICAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Composição Autoral, Arranjos & Síntese Sonora
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            A música como expressão do pensamento estruturado. Uma interseção entre sensibilidade artística, progressões harmônicas e ferramentas de inteligência artificial aplicadas ao design sonoro.
          </p>
        </div>

        {/* Process Visual Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-purple-500/20 mb-10">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Ciclo de Produção Criativa</span>
            <span className="text-slate-400 text-[11px]">Música Autoral & IA</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {creativeSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-left"
              >
                <div className="text-xs font-heading font-bold text-purple-300 mb-1">
                  0{idx + 1}. {step.title}
                </div>
                <div className="text-[11px] text-slate-300 font-light leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Interactive Synthesizer Pad Player */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 bg-gradient-to-b from-[#160f26] to-[#0c0914]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">
                    Teclado de Frequências Harmônicas
                  </h3>
                  <div className="text-xs text-purple-300/80 font-mono">
                    Interativo • Síntese em Tempo Real
                  </div>
                </div>
              </div>

              <button
                id="creative-mute-toggle-btn"
                onClick={() => {
                  const muted = audioSynth.toggleMute();
                  setIsMuted(muted);
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                title={isMuted ? 'Ativar Áudio' : 'Mutar'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />}
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light mb-6">
              Clique nos pads abaixo para disparar notas e acordes baseados em escalas harmônicas desenvolvidas no laboratório criativo:
            </p>

            {/* Note Pads */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
              {[
                { note: 'C4', freq: 261.63, label: 'Dó' },
                { note: 'D4', freq: 293.66, label: 'Ré' },
                { note: 'Eb4', freq: 311.13, label: 'Mib' },
                { note: 'F4', freq: 349.23, label: 'Fá' },
                { note: 'G4', freq: 392.00, label: 'Sol' },
                { note: 'A4', freq: 440.00, label: 'Lá' },
                { note: 'Bb4', freq: 466.16, label: 'Sib' }
              ].map((pad, pIdx) => (
                <button
                  key={pIdx}
                  id={`synth-pad-${pad.note}`}
                  onClick={() => handlePlayPad(pad.freq)}
                  className="p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/30 border border-purple-500/30 text-center flex flex-col items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer group"
                >
                  <span className="text-xs font-mono font-bold text-white group-hover:text-purple-300">
                    {pad.note}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {pad.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Oscilador: Triangle Wave + Reverb</span>
              <span className="text-purple-400 font-semibold">432 Hz Tuning</span>
            </div>
          </div>

          {/* Experiments & Composition Projects List */}
          <div className="lg:col-span-6 space-y-4">
            {AUDIO_EXPERIMENTS.map((exp) => {
              const isSelected = activeExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  id={`audio-exp-card-${exp.id}`}
                  className={`glass-panel rounded-2xl p-5 border transition-all ${
                    isSelected
                      ? 'border-purple-500/50 bg-[#160f26]'
                      : 'border-white/[0.06] hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handlePlayExperiment(exp)}
                        className={`p-3 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                          isSelected && isPlaying
                            ? 'bg-purple-400 text-[#0c0914] animate-pulse'
                            : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
                        }`}
                        title="Ouvir acorde / escala do arranjo"
                      >
                        <Play className="w-4 h-4 fill-current" />
                      </button>

                      <div>
                        <h4 className="text-base font-heading font-bold text-white">
                          {exp.title}
                        </h4>
                        <div className="text-xs text-purple-300/80 font-mono">
                          {exp.scale} • {exp.bpm} BPM
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {exp.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
                    {exp.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                    <span>Laboratório de Composição</span>
                    <span className="text-purple-400">Arranjo Autoral</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Expansion Structure for Tracks & Experiments */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-200">
              Estrutura para Inclusão de Faixas & Players de Áudio
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Módulo preparado para integração de links de streaming, capas de lançamentos autorais e experimentações com sintetizadores generativos.
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20">
            [MÓDULO DE ÁUDIO DISPONÍVEL]
          </div>
        </div>
      </div>
    </section>
  );
};
