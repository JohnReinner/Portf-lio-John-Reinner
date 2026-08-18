import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, FileSearch, Building2, CheckCircle2, Layers, ExternalLink, X, Play } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface UniverseProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  atmosphere: 'human' | 'analytical' | 'business';
  essence: string;
  flow: string[];
  objective: string;
  features: string[];
  technologies: string[];
  impact: string;
  accentColor: string;
}

const PROJECTS_DATA: UniverseProject[] = [
  {
    id: 'transicao-carreira',
    number: '01',
    title: 'TRANSIÇÃO DE CARREIRA MILITAR',
    subtitle: 'TRADUZIR EXPERIÊNCIA. CONECTAR COMPETÊNCIAS. CRIAR NOVOS CAMINHOS.',
    atmosphere: 'human',
    essence: 'Plataforma e metodologia orientada a traduzir o vocabulário, as competências de liderança e a alta disciplina de militares da reserva em qualificações requisitadas pelo mercado corporativo civil.',
    flow: [
      'EXPERIÊNCIA MILITAR',
      'MAPEAMENTO DE COMPETÊNCIAS',
      'TRADUÇÃO DE LINGUAGEM',
      'MERCADO CORPORATIVO CIVIL'
    ],
    objective: 'Eliminar a assimetria de comunicação entre o ecossistema militar e o mercado corporativo, permitindo que talentos com rigor operacional alcancem posições de alta liderança civil.',
    features: [
      'Dicionário semântico e ontologia de cargos militares para equivalências civis',
      'Diagnóstico de hard e soft skills com foco em governança, logística e gestão',
      'Reestruturação de narrativa profissional e portfólio de realizações de comando',
      'Trilha de capacitação em ferramentas contemporâneas de tecnologia e IA'
    ],
    technologies: ['Engenharia de Prompts', 'Taxonomia de Competências', 'Modelos Cognitivos', 'UX Estratégica'],
    impact: 'Reaproveitamento de capital humano de altíssima integridade e disciplina em operações corporativas.',
    accentColor: '#10b981'
  },
  {
    id: 'inteligencia-licitacoes',
    number: '02',
    title: 'INTELIGÊNCIA EM LICITAÇÕES',
    subtitle: 'EDITAIS. DADOS. IA. OPORTUNIDADES.',
    atmosphere: 'analytical',
    essence: 'Sistema inteligente de leitura, auditoria preditiva e monitoramento de editais de compras públicas, cruzando exigências técnicas com a capacidade de entrega de fornecedores.',
    flow: [
      'EDITAL PÚBLICO',
      'ANÁLISE COGNITIVA',
      'SÍNTESE & INTELIGÊNCIA',
      'OPORTUNIDADE QUALIFICADA',
      'FORNECEDOR'
    ],
    objective: 'Transformar documentos densos de licitação em painéis claros de conformidade, riscos, prazos e vantagens competitivas para PMEs e grandes fornecedores.',
    features: [
      'Extração automática de requisitos eliminatórios e cláusulas de qualificação técnica',
      'Matriz de risco contratual com base na Lei 14.133/21 e jurisprudências correlatas',
      'Score de compatibilidade entre o acervo da empresa e o Termo de Referência',
      'Painel de alertas para impugnações, esclarecimentos e monitoramento de prazos'
    ],
    technologies: ['LLMs Especializados', 'Parsing Documental', 'NLP Jurídico-Administrativo', 'Análise de Risco'],
    impact: 'Redução de 85% no tempo de triagem de editais e aumento expressivo na assertividade de lances.',
    accentColor: '#0284c7'
  }
];

export const ProjectsUniverseSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<UniverseProject | null>(null);

  const handleOpenProject = (proj: UniverseProject) => {
    setSelectedProject(proj);
    audioSynth.playNavClick();
  };

  return (
    <section id="projetos" className="relative min-h-screen py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          05 // PROJETOS
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          O QUE ESTOU CRIANDO
        </span>
      </div>

      {/* Headline */}
      <div className="mb-14">
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-slate-100 uppercase mb-4">
          O QUE ESTOU CRIANDO
        </h2>
        <p className="text-base sm:text-xl font-light text-slate-300 max-w-3xl">
          Projetos concebidos como <span className="text-white font-medium">universos próprios</span>, integrando experiência acumulada, tecnologia moderna e impacto real.
        </p>
      </div>

      {/* Big Universe Visual Objects */}
      <div className="flex flex-col gap-10">
        {PROJECTS_DATA.map((proj) => {
          const isHuman = proj.atmosphere === 'human';
          const isAnalytical = proj.atmosphere === 'analytical';
          
          return (
            <div
              key={proj.id}
              className={`glass-panel rounded-3xl p-8 sm:p-12 border transition-all duration-300 relative overflow-hidden group ${
                isHuman
                  ? 'border-emerald-500/30 hover:border-emerald-400 bg-gradient-to-br from-[#0c1410] to-[#070908]'
                  : isAnalytical
                  ? 'border-sky-500/30 hover:border-sky-400 bg-gradient-to-br from-[#0a1218] to-[#070908]'
                  : 'border-purple-500/30 hover:border-purple-400 bg-gradient-to-br from-[#120a18] to-[#070908]'
              }`}
            >
              {/* Subtle ambient light */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none transition-opacity group-hover:opacity-25"
                style={{ backgroundColor: proj.accentColor }}
              />

              <div className="relative z-10 flex flex-col justify-between">
                
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-emerald-400">
                      PROJETO // {proj.number}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 uppercase">
                      ATMOSFERA: {proj.atmosphere.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    UNIVERSO ATIVO
                  </span>
                </div>

                {/* Main Title & Subtitle */}
                <div className="mb-8">
                  <h3 className="font-heading font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Visual Transformation Flow Ribbon */}
                <div className="bg-[#070908]/90 border border-white/[0.06] rounded-2xl p-4 sm:p-5 mb-8">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                    FLUXO DE TRANSFORMAÇÃO:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-slate-200">
                    {proj.flow.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className={`px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] ${idx === proj.flow.length - 1 ? 'text-emerald-400 font-bold border-emerald-500/40' : ''}`}>
                          {step}
                        </span>
                        {idx < proj.flow.length - 1 && (
                          <span className="text-slate-600 font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Essence description & CTA Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/[0.06]">
                  <p className="text-sm font-light text-slate-300 max-w-xl">
                    {proj.essence}
                  </p>

                  <button
                    onClick={() => handleOpenProject(proj)}
                    data-cursor="DETALHES"
                    className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-emerald-500 hover:text-[#070908] border border-white/[0.12] hover:border-emerald-400 text-xs font-mono font-bold tracking-widest uppercase text-slate-100 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg"
                  >
                    <span>EXPLORE UNIVERSO →</span>
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Project Modal Universe */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#070908]/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center animate-fadeIn">
          <div className="glass-panel max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-white/[0.15] bg-[#0c120e] max-h-[90vh] overflow-y-auto relative shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                UNIVERSO // {selectedProject.number}
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white uppercase">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {/* Objective */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1 font-bold">
                  OBJETIVO ESTRATÉGICO
                </span>
                <p className="text-sm text-slate-200 font-medium">
                  {selectedProject.objective}
                </p>
              </div>

              {/* Features */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  ARQUITETURA DE ENTREGAS & RECURSOS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-2">
                  TECNOLOGIAS & PILARES COGNITIVOS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded bg-white/[0.05] border border-white/[0.1] text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">IMPACTO ESTIMADO:</span>
                <span className="text-emerald-400 font-bold">{selectedProject.impact}</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 text-[#070908] font-mono font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer"
              >
                Fechar Universo
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
