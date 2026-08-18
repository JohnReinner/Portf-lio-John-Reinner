import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Building2, Briefcase, ShieldCheck, Cpu, Layers, Award } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface OriginStep {
  id: string;
  word: string;
  tag: string;
  icon: React.ReactNode;
  skillAcquired: string;
  detail: string;
  context: string;
  color: string;
}

const ORIGIN_STEPS: OriginStep[] = [
  {
    id: 'admin',
    word: 'ADMINISTRAÇÃO',
    tag: 'FUNDAÇÃO OPERACIONAL',
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    skillAcquired: 'Rigor com processos, fluxo documental, controles e visão sistêmica.',
    detail: 'Primeiras vivências práticas na estruturação de processos administrativos, conferência de documentações, emissão de propostas, controles de estoque e acompanhamento de rotinas operacionais.',
    context: 'UPIS • Administração de Empresas',
    color: '#d97706'
  },
  {
    id: 'comercial',
    word: 'COMERCIAL',
    tag: 'RELACIONAMENTO & VENDAS',
    icon: <Briefcase className="w-5 h-5 text-blue-400" />,
    skillAcquired: 'Negociação consultiva, prospecção ativa e escuta qualificada.',
    detail: 'Desenvolvimento de relacionamento B2B e B2C, identificação de necessidades reais, estruturação de propostas comerciais de valor e fidelização de carteira.',
    context: 'Atendimento Consultivo',
    color: '#3b82f6'
  },
  {
    id: 'seguros',
    word: 'SEGUROS',
    tag: 'MITIGAÇÃO DE RISCOS & PMES',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    skillAcquired: 'Análise criteriosa de riscos, dimensionamento de planos de saúde e proteção patrimonial.',
    detail: 'Atuação especializada no mercado de seguros e benefícios para Pequenas e Médias Empresas (PMEs) no DF. Estruturação de coberturas, intermediação junto a operadoras e consultoria preventiva.',
    context: 'Habilitação FUNENSEG / SUSEP',
    color: '#10b981'
  },
  {
    id: 'tecnologia',
    word: 'TECNOLOGIA',
    tag: 'OPERAÇÕES & SUPERVISÃO',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    skillAcquired: 'Coordenação operacional, suporte a equipes técnicas e alinhamento de entregas digitais.',
    detail: 'Supervisão direta de rotinas operacionais ligadas a serviços de tecnologia, acompanhamento de fluxos de atendimento, gestão de chamados e garantia da qualidade de serviço.',
    context: 'Serviços & Operações Tech',
    color: '#06b6d4'
  },
  {
    id: 'gestao',
    word: 'GESTÃO',
    tag: 'LIDERANÇA & PLANEJAMENTO',
    icon: <Layers className="w-5 h-5 text-purple-400" />,
    skillAcquired: 'Planejamento estratégico, tomada de decisão sob pressão e alocação de recursos.',
    detail: 'Integração de processos, gestão de pessoas e visão orientada a resultados sustentáveis, unindo a visão de negócio à execução prática.',
    context: 'Estratégia & Execução',
    color: '#a855f7'
  },
  {
    id: 'exercito',
    word: 'EXÉRCITO',
    tag: 'DISCIPLINA & CONTRATOS PÚBLICOS',
    icon: <Award className="w-5 h-5 text-emerald-300" />,
    skillAcquired: 'Conformidade legal máxima, fiscalização minuciosa e governança de recursos públicos.',
    detail: '11ª Região Militar. Atuação direta na Administração e Fiscalização de Contratos, acompanhamento de editais, termos de referência, medições e auditorias com precisão técnica irretocável.',
    context: '11ª RM • Fiscalização de Contratos',
    color: '#34d399'
  }
];

export const OriginWordExperience: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<OriginStep>(ORIGIN_STEPS[0]);

  const handleSelect = (step: OriginStep) => {
    setSelectedStep(step);
    audioSynth.playNavClick();
  };

  return (
    <section id="origem" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          01 // ORIGEM
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          DE ONDE EU VENHO
        </span>
      </div>

      {/* Chapter Headline */}
      <div className="mb-14">
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-100 uppercase mb-4">
          DE ONDE EU VENHO
        </h2>
        <p className="text-base sm:text-xl font-light text-slate-300 max-w-2xl">
          A trajetória não começou na tecnologia. Começou na <span className="text-white font-medium">gestão real</span>, nos processos, nas pessoas e na disciplina.
        </p>
      </div>

      {/* Main Kinetic Interactive Words Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Progressive Word Ladder */}
        <div className="lg:col-span-6 flex flex-col gap-2">
          {ORIGIN_STEPS.map((step, idx) => {
            const isSelected = selectedStep.id === step.id;
            return (
              <button
                key={step.id}
                onClick={() => handleSelect(step)}
                data-cursor="DETALHE"
                className={`w-full group text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-white/[0.08] border-emerald-400/60 shadow-[0_0_25px_rgba(52,211,153,0.15)] translate-x-2'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-600'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`font-heading font-extrabold text-lg sm:text-2xl tracking-wider uppercase transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {step.word}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:inline ${
                    isSelected ? 'text-emerald-400' : 'text-slate-600'
                  }`}>
                    {step.tag}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-700'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Progressive Discovery Card (A Habilidade Deixada) */}
        <div className="lg:col-span-6 sticky top-24">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.1] relative overflow-hidden bg-gradient-to-br from-[#0e1410] to-[#070908]">
            
            {/* Ambient Background Accent */}
            <div 
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: selectedStep.color }}
            />

            {/* Stage Tag */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1]">
                  {selectedStep.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">
                    {selectedStep.context}
                  </div>
                  <div className="font-heading font-bold text-lg text-slate-100 uppercase">
                    {selectedStep.word}
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400">
                {selectedStep.tag}
              </span>
            </div>

            {/* Core Principle Statement */}
            <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HABILIDADE LAPIDADA</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-100">
                "{selectedStep.skillAcquired}"
              </p>
            </div>

            {/* Detailed Context Narrative */}
            <p className="text-sm leading-relaxed text-slate-300 font-light mb-6">
              {selectedStep.detail}
            </p>

            {/* Bottom Statement of Philosophy */}
            <div className="pt-4 border-t border-white/[0.06] text-right">
              <span className="text-[11px] font-mono text-slate-500 italic">
                "Cada etapa deixou uma habilidade essencial para o futuro."
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
