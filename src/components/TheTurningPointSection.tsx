import React, { useState } from 'react';
import { Sparkles, Cpu, Bot, ArrowRight, CheckCircle2, Terminal, Code2, Zap, Workflow, Search, Rocket } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

const AI_PIPELINE_STEPS = [
  {
    step: '01',
    name: 'PROBLEMA',
    desc: 'Identificação de gargalos operacionais, ineficiência de contratos ou atrito em processos de mercado.',
    tag: 'DIAGNÓSTICO REAL'
  },
  {
    step: '02',
    name: 'IDEIA',
    desc: 'Formulação da hipótese de solução unindo a experiência prática de gestão à automação digital.',
    tag: 'ESTRATÉGIA'
  },
  {
    step: '03',
    name: 'PROMPT',
    desc: 'Engenharia de instrução precisa com contexto sistêmico, restrições e objetivos quantificáveis.',
    tag: 'ENGENHARIA DE PROMPTS'
  },
  {
    step: '04',
    name: 'IA',
    desc: 'Orquestração de modelos cognitivos para análise preditiva, sumarização e síntese de dados.',
    tag: 'MODELOS COGNITIVOS'
  },
  {
    step: '05',
    name: 'EXPERIMENTO',
    desc: 'Testes iterativos rápidos em laboratório para validar acurácia e segurança dos resultados.',
    tag: 'VALIDAÇÃO RÁPIDA'
  },
  {
    step: '06',
    name: 'PROTÓTIPO',
    desc: 'Construção da interface funcional e fluxo de usuário para testar usabilidade no mundo real.',
    tag: 'MVP OPERACIONAL'
  },
  {
    step: '07',
    name: 'SOLUÇÃO',
    desc: 'Produto final implementado gerando economia de tempo, conformidade e novos caminhos de valor.',
    tag: 'IMPACTO PRÁTICO'
  }
];

const TECH_AREAS = [
  {
    title: 'ENGENHARIA DE PROMPTS & COGNIÇÃO',
    desc: 'Estruturação de prompts avançados, contextualização e encadeamento de agentes de IA para tarefas de alta complexidade.',
    icon: <Bot className="w-5 h-5 text-emerald-400" />,
    tags: ['Arquitetura de Prompts', 'Context Caching', 'Few-Shot Conditioning']
  },
  {
    title: 'AUTOMAÇÃO & TRANSFORMAÇÃO DE PROCESSOS',
    desc: 'Eliminação de trabalho repetitivo através da integração de ferramentas modernas, scripts e fluxos inteligentes.',
    icon: <Workflow className="w-5 h-5 text-cyan-400" />,
    tags: ['Pipelines de Dados', 'Análise de Editais', 'Fluxos Operacionais']
  },
  {
    title: 'CONSTRUÇÃO DE PRODUTOS DIGITAIS',
    desc: 'Do conceito ao protótipo executável: criação de interfaces acessíveis, plataformas de serviço e ferramentas focadas no usuário.',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    tags: ['Web Apps', 'Interfaces Interativas', 'Design Centrado no Usuário']
  },
  {
    title: 'ANÁLISE & SÍNTESE DOCUMENTAL',
    desc: 'Aplicação de IA para leitura veloz, auditoria cruzada e extração de riscos em editais, minutas e contratos.',
    icon: <Search className="w-5 h-5 text-amber-400" />,
    tags: ['Governança Contratual', 'Compliance', 'Inteligência de Mercado']
  }
];

export const TheTurningPointSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="virada" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          04 // A VIRADA
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL
        </span>
      </div>

      {/* Cinematic Transition Statement */}
      <div className="mb-20 glass-panel rounded-3xl p-8 sm:p-14 border border-emerald-500/30 bg-gradient-to-r from-[#0c1410] via-[#070908] to-[#0c1410] text-center relative overflow-hidden">
        <div className="absolute inset-0 matrix-dot-bg opacity-40 pointer-events-none" />
        
        <span className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase block mb-4 font-bold">
          A TRANSMUTAÇÃO DA MATÉRIA-PRIMA
        </span>
        
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-tight max-w-4xl mx-auto">
          "MAS A EXPERIÊNCIA NÃO PRECISA TERMINAR ONDE O PASSADO TERMINOU."
        </h2>

        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
          <span>PROCESSOS & PAPÉIS</span>
          <span className="text-emerald-400">→</span>
          <span className="text-white font-bold">DADOS & REDES</span>
          <span className="text-emerald-400">→</span>
          <span className="text-emerald-300 font-bold">INTELIGÊNCIA ARTIFICIAL</span>
        </div>
      </div>

      {/* Section 11: TECNOLOGIA */}
      <div id="tecnologia-ia" className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-bold block mb-1">
              LABORATÓRIO DE SOLUÇÕES
            </span>
            <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase">
              TECNOLOGIA
            </h3>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider max-w-md">
            "DE UTILIZAR FERRAMENTAS PARA CRIAR SOLUÇÕES REAIS."
          </p>
        </div>

        {/* Tech Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TECH_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-emerald-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                    {area.icon}
                  </div>
                  <h4 className="font-heading font-bold text-base text-slate-100 uppercase">
                    {area.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                  {area.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {area.tags.map((t, tidx) => (
                  <span
                    key={tidx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 12: INTELIGÊNCIA ARTIFICIAL: UMA NOVA CAMADA DE PENSAMENTO */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/[0.1] bg-[#0c120e]">
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-bold block mb-1">
            PARADIGMA COGNITIVO
          </span>
          <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-100 uppercase mb-2">
            INTELIGÊNCIA ARTIFICIAL
          </h3>
          <p className="text-sm sm:text-base font-light text-slate-300">
            A IA não é vista como uma simples ferramenta técnica ou modismo, mas como <span className="text-emerald-300 font-semibold">uma nova camada de pensamento</span> que acelera a capacidade de resolução de problemas complexos.
          </p>
        </div>

        {/* Visual Pipeline Interactive Flow */}
        <div className="mb-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span>FLUXO DE TRANSFORMAÇÃO:</span>
            <span className="text-emerald-400">PASSO {AI_PIPELINE_STEPS[activeStep].step} DE 07</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6">
            {AI_PIPELINE_STEPS.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => {
                    setActiveStep(idx);
                    audioSynth.playNavClick();
                  }}
                  data-cursor="FLUXO"
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-[#070908] border-emerald-400 font-bold shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                      : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:bg-white/[0.06] hover:text-slate-200'
                  }`}
                >
                  <div className="text-[9px] font-mono opacity-80 mb-0.5">
                    {st.step}
                  </div>
                  <div className="text-xs font-heading font-extrabold uppercase truncate">
                    {st.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Card */}
          <div className="bg-[#070908] border border-white/[0.08] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                {AI_PIPELINE_STEPS[activeStep].tag}
              </span>
              <h4 className="font-heading font-extrabold text-xl text-white uppercase mb-1">
                {AI_PIPELINE_STEPS[activeStep].step} • {AI_PIPELINE_STEPS[activeStep].name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                {AI_PIPELINE_STEPS[activeStep].desc}
              </p>
            </div>
            <button
              onClick={() => {
                setActiveStep((prev) => (prev + 1) % AI_PIPELINE_STEPS.length);
                audioSynth.playNavClick();
              }}
              className="px-4 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-xs font-mono text-slate-200 hover:bg-emerald-500 hover:text-[#070908] hover:border-emerald-400 transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Próximo Passo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
