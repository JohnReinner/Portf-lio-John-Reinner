import React, { useState } from 'react';
import { Layers, FileText, CheckCircle2, TrendingUp, ShieldAlert, Cpu, Award, ArrowRight } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const EVOLUTION_STAGES = [
  { id: 'linha', label: 'LINHA', desc: 'Rigor e linearidade de processos administrativos' },
  { id: 'fluxo', label: 'FLUXO', desc: 'Dinâmica de mercado, vendas e relacionamento B2B' },
  { id: 'rede', label: 'REDE', desc: 'Conexão entre PMEs, operadoras e ecossistema de negócios' },
  { id: 'dados', label: 'DADOS', desc: 'Supervisão técnica, métricas e governança pública' },
  { id: 'inteligencia', label: 'INTELIGÊNCIA', desc: 'Capacidade de síntese e aplicação estratégica' }
];

const EXPERIENCE_CHAPTERS = [
  {
    id: 'admin',
    title: 'ADMINISTRAÇÃO',
    subtitle: 'Primeiras bases e estruturação',
    badge: 'PROCESSOS & CONTROLES',
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    items: [
      'Estruturação de fluxos operacionais e conferência documental',
      'Elaboração de planilhas de controle e monitoramento de estoque',
      'Emissão e controle de propostas comerciais e contratos iniciais',
      'Atendimento direto a clientes e alinhamento de rotinas internas'
    ],
    takeaway: 'Compreensão de que qualquer sistema robusto depende de disciplina nos processos de base.'
  },
  {
    id: 'comercial',
    title: 'COMERCIAL',
    subtitle: 'Expansão e gestão de relacionamento',
    badge: 'VENDAS & CARTEIRA',
    icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
    items: [
      'Prospecção ativa e vendas consultivas de alto valor agregado',
      'Desenvolvimento de relacionamentos de longo prazo e retenção',
      'Gestão de carteira de clientes corporativos e metas operacionais',
      'Supervisão e alinhamento de equipes comerciais'
    ],
    takeaway: 'Habilidade de traduzir necessidades complexas em propostas de valor claras e viáveis.'
  },
  {
    id: 'seguros',
    title: 'SEGUROS & SAÚDE CORPORATIVA',
    subtitle: 'Consultoria especializada para PMEs no DF',
    badge: 'RISCOS & MERCADO CORPORATIVO',
    icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
    items: [
      'Diagnóstico e dimensionamento de planos de saúde corporativos',
      'Consultoria para Pequenas e Médias Empresas (PMEs) no Distrito Federal',
      'Intermediação técnica com as principais operadoras e seguradoras do país',
      'Análise atuarial de risco e sustentabilidade dos benefícios'
    ],
    takeaway: 'Domínio sobre proteção patrimonial, gestão de riscos e negociação institucional.'
  },
  {
    id: 'tecnologia',
    title: 'TECNOLOGIA & OPERAÇÕES',
    subtitle: 'Acompanhamento de equipes e serviços técnicos',
    badge: 'SUPERVISÃO TECH',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    items: [
      'Supervisão de fluxos de atendimento e prestação de serviços tecnológicos',
      'Acompanhamento de chamados e conformidade de SLAs',
      'Ponte de comunicação entre demandas operacionais e suporte técnico',
      'Otimização de rotinas com ferramentas digitais'
    ],
    takeaway: 'Entendimento de como a tecnologia acelera e suporta operações críticas.'
  },
  {
    id: 'exercito',
    title: 'EXÉRCITO BRASILEIRO (11ª RM)',
    subtitle: 'Administração e fiscalização de contratos públicos',
    badge: 'GOVERNANÇA & ALTA RESPONSABILIDADE',
    icon: <Award className="w-5 h-5 text-emerald-300" />,
    items: [
      'Administração e fiscalização rigorosa de contratos administrativos',
      'Estágio Setorial de Fiscalização de Contratos na 11ª Região Militar',
      'Acompanhamento minucioso de editais, termos de referência e medições',
      'Garantia irrestrita de conformidade com a legislação e auditorias'
    ],
    takeaway: 'O ápice da lapidação profissional: responsabilidade extrema, integridade e precisão pública.'
  }
];

export const TrajectoryEvolvingLine: React.FC = () => {
  const [activeStage, setActiveStage] = useState('linha');

  return (
    <section id="trajetoria" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          02 // TRAJETÓRIA & EXPERIÊNCIA
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          UM CAMINHO ATÉ O EXÉRCITO
        </span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-100 uppercase mb-4">
          A TRAJETÓRIA
        </h2>
        <p className="text-base sm:text-xl font-light text-slate-300 max-w-3xl">
          Uma evolução contínua da matéria-prima profissional: da linearidade dos controles até a inteligência de tomada de decisão.
        </p>
      </div>

      {/* Experimental Generative Evolving Line Visualization */}
      <div className="mb-16 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] bg-[#0c120e]">
        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.25em] mb-4">
          METAMORFOSE DA LINHA PROFISSIONAL
        </div>

        {/* Evolving Stages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {EVOLUTION_STAGES.map((stg, idx) => {
            const isCurrent = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => {
                  setActiveStage(stg.id);
                  audioSynth.playHarmonicSequence();
                }}
                data-cursor="EVOLUÇÃO"
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isCurrent ? '#10b981' : '#475569' }} />
                </div>
                <div className="font-heading font-extrabold text-sm tracking-wider uppercase mb-1">
                  {stg.label}
                </div>
                <div className="text-[10px] font-mono text-slate-400 line-clamp-2">
                  {stg.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Dynamic Line Render */}
        <div className="relative h-12 w-full flex items-center justify-between px-2 bg-[#070908] rounded-xl border border-white/[0.06] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-emerald-400/20" />
          
          {/* Connecting SVG Morph Line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M 0,24 Q 250,5 500,24 T 1000,24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray={activeStage === 'linha' ? 'none' : activeStage === 'fluxo' ? '6 4' : '2 6'}
              className="opacity-70 transition-all duration-500"
            />
          </svg>

          <div className="relative z-10 flex items-center justify-between w-full px-4 text-[10px] font-mono text-slate-400">
            <span>INÍCIO // PROCESSOS</span>
            <span className="text-emerald-400 font-bold tracking-widest uppercase">
              ESTÁGIO ATUAL: {activeStage.toUpperCase()}
            </span>
            <span>APOGEU // INTELIGÊNCIA</span>
          </div>
        </div>
      </div>

      {/* Chapters of Real Experience */}
      <div className="flex flex-col gap-6">
        {EXPERIENCE_CHAPTERS.map((chap, idx) => (
          <div
            key={chap.id}
            className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/[0.18] transition-all"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              
              {/* Left Side: Chapter & Title */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    {chap.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                    CAPÍTULO 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-100 uppercase mb-1">
                  {chap.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  {chap.subtitle}
                </p>
                <div className="inline-block px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-slate-300">
                  {chap.badge}
                </div>
              </div>

              {/* Right Side: Key Responsibilities & Takeaway */}
              <div className="lg:w-2/3 flex flex-col justify-between">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {chap.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-white/[0.02] border-l-2 border-emerald-400/80 p-3 rounded-r-lg">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-0.5">
                    O QUE FOI CONSTRUÍDO:
                  </span>
                  <p className="text-xs font-semibold text-slate-200 italic">
                    "{chap.takeaway}"
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Climax Statement */}
      <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#0e1410] to-[#070908] border border-emerald-500/30 text-center">
        <span className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase block mb-2 font-bold">
          O APOGEU DA EXPERIÊNCIA DE BASE
        </span>
        <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
          "FOI AQUI QUE A EXPERIÊNCIA FOI LAPIDADA."
        </h3>
      </div>

    </section>
  );
};
