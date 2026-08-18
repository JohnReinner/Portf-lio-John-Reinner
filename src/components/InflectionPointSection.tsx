import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const MORPHING_WORDS = [
  'DISCIPLINA.',
  'PROCESSO.',
  'RESPONSABILIDADE.',
  'GESTÃO.',
  'CONTROLE.',
  'EXPERIÊNCIA.',
  'APRENDIZADO.'
];

const FORMATION_PILLARS = [
  {
    title: 'ADMINISTRAÇÃO DE EMPRESAS',
    institution: 'UPIS — União Pioneira de Integração Social',
    status: 'Graduação Concluída (Bacharelado)',
    badge: 'BASE SISTÊMICA & GESTÃO',
    highlight: 'Fundamentos sólidos de finanças, organização empresarial, marketing e operações.'
  },
  {
    title: 'PÓS-GRADUAÇÃO EM LOGÍSTICA',
    institution: 'Especialização Executiva / MBA',
    status: 'Pós-Graduação',
    badge: 'FLUXOS & EFICIÊNCIA',
    highlight: 'Gestão de suprimentos, otimização de cadeias, dimensionamento de estoques e rotas.'
  },
  {
    title: 'SEGUROS & GESTÃO DE RISCOS',
    institution: 'FUNENSEG / SUSEP',
    status: 'Habilitação Técnica Profissional',
    badge: 'ANÁLISE ATUARIAL & CONTRATOS',
    highlight: 'Certificação habilitante para consultoria técnica de seguros e planos de saúde empresariais.'
  }
];

export const InflectionPointSection: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % MORPHING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isManual]);

  const handleSelectWord = (idx: number) => {
    setIsManual(true);
    setWordIndex(idx);
    audioSynth.playNavClick();
  };

  return (
    <section id="inflexao" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          03 // PONTO DE INFLEXÃO
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          O EXÉRCITO & A MATÉRIA-PRIMA
        </span>
      </div>

      {/* Inflection Kinetic Stage: High Negative Space */}
      <div className="my-8 glass-panel rounded-3xl p-8 sm:p-14 border border-white/[0.1] bg-gradient-to-b from-[#0e1410] to-[#070908] text-center relative overflow-hidden">
        
        <div className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-emerald-400/90 font-semibold mb-6 flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>11ª REGIÃO MILITAR • FISCALIZAÇÃO DE CONTRATOS</span>
        </div>

        {/* Big Morphing Word */}
        <div className="min-h-[160px] sm:min-h-[220px] flex items-center justify-center">
          <h2
            key={wordIndex}
            data-cursor="MUDAR"
            onClick={() => handleSelectWord((wordIndex + 1) % MORPHING_WORDS.length)}
            className="font-heading font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase transition-all duration-500 cursor-pointer hover:scale-105 hover:text-emerald-300 select-none animate-fadeIn"
          >
            {MORPHING_WORDS[wordIndex]}
          </h2>
        </div>

        {/* Word Indicators Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MORPHING_WORDS.map((w, idx) => {
            const isCurrent = wordIndex === idx;
            return (
              <button
                key={w}
                onClick={() => handleSelectWord(idx)}
                className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-500 text-[#070908] font-bold shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                    : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08]'
                }`}
              >
                {w.replace('.', '')}
              </button>
            );
          })}
        </div>

        {/* Culmination Text */}
        <div className="pt-8 border-t border-white/[0.08] max-w-xl mx-auto">
          <p className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 uppercase tracking-tight mb-2">
            "A EXPERIÊNCIA ACUMULADA FOI LAPIDADA."
          </p>
          <p className="text-xs font-mono text-slate-400">
            A exigência máxima do serviço militar e a governança de contratos públicos transformaram a intuição administrativa em rigor cirúrgico.
          </p>
        </div>
      </div>

      {/* Chapter 09: Formação como Matéria-Prima (Visual e Ultra-Objetivo) */}
      <div className="mt-14">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-[0.25em] mb-4 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-sky-400" />
          <span>FORMAÇÃO // AS MATÉRIAS-PRIMAS DO PENSAMENTO</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FORMATION_PILLARS.map((form, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/[0.07] flex flex-col justify-between hover:border-emerald-400/40 transition-all group"
            >
              <div>
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-2">
                  {form.badge}
                </span>
                <h3 className="font-heading font-extrabold text-lg text-slate-100 uppercase mb-1 group-hover:text-white">
                  {form.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {form.institution}
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {form.highlight}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-semibold">{form.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
