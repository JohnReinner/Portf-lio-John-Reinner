import React, { useState } from 'react';
import { 
  Sparkles, 
  FileSearch, 
  Workflow, 
  TrendingUp, 
  Music, 
  Building2, 
  Cpu, 
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const AiVisionSection: React.FC = () => {
  const [selectedField, setSelectedField] = useState<number>(0);

  const aiApplications = [
    {
      title: 'Administração & Documentação',
      category: 'ADMINISTRAÇÃO',
      desc: 'Síntese de termos contratuais complexos, verificação automatizada de conformidade de relatórios e padronização de atas e documentos corporativos.',
      icon: Building2,
      impact: 'Redução drástica de tempo na redação e checagem de minutas e normas regulatórias.'
    },
    {
      title: 'Negócios & Seguros Corporativos',
      category: 'NEGÓCIOS',
      desc: 'Comparação inteligente entre tabelas de coberturas de planos de saúde, análise de reajustes e suporte a diagnósticos de necessidades de PMEs.',
      icon: TrendingUp,
      impact: 'Propostas customizadas com maior rapidez e precisão para empresários do DF.'
    },
    {
      title: 'Marketing & Criação de Conteúdo',
      category: 'MARKETING',
      desc: 'Geração de copys persuasivas para Meta Lead Ads, estruturação de linhas editoriais e análise de dados de engajamento de campanhas.',
      icon: Sparkles,
      impact: 'Testes A/B rápidos de criativos e anúncios para otimização contínua de CAC/CPL.'
    },
    {
      title: 'Análise de Editais & Licitações',
      category: 'ANÁLISE',
      desc: 'Extração automática de cláusulas críticas, prazos de impugnação, requisitos de habilitação e itens de planilhas orçamentárias.',
      icon: FileSearch,
      impact: 'Triagem de dezenas de páginas de editais em minutos, identificando riscos contratuais.'
    },
    {
      title: 'Automação & Processos',
      category: 'AUTOMAÇÃO',
      desc: 'Criação de fluxos inteligentes que conectam formulários de leads, notificações instantâneas e acompanhamento de tarefas.',
      icon: Workflow,
      impact: 'Eliminação de tarefas manuais repetitivas e resposta comercial ágil ao cliente.'
    },
    {
      title: 'Composição & Produção Musical',
      category: 'CRIATIVIDADE & ÁUDIO',
      desc: 'Exploração de harmonias, arranjos sonoros e design de texturas de áudio assistidos por ferramentas de IA generativa de áudio.',
      icon: Music,
      impact: 'Ampliação do potencial criativo e refinamento de composições musicais autorais.'
    }
  ];

  return (
    <section id="ia" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>09 // INTELIGÊNCIA ARTIFICIAL TRANSVERSAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            A IA como Amplificadora da Experiência
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            A inteligência artificial não atua de forma isolada; ela permeia cada etapa da jornada como um acelerador cognitivo de produtividade, análise, modelagem e criatividade.
          </p>
        </div>

        {/* Central Manifest Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 mb-12 border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-[#0d161d] to-[#091118] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-3">
              Princípio Fundamental
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white leading-relaxed mb-4">
              “Tecnologia não substitui experiência. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                Tecnologia amplia a capacidade de transformar experiência em solução.
              </span>”
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
              Utilização pragmática de modelos de linguagem e ferramentas de IA para resolver problemas reais com velocidade e profundidade.
            </p>
          </div>
        </div>

        {/* 6 Application Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiApplications.map((app, idx) => {
            const Icon = app.icon;
            const isSelected = selectedField === idx;

            return (
              <div
                key={idx}
                id={`ai-app-card-${idx}`}
                onClick={() => setSelectedField(idx)}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500/50 bg-emerald-950/10'
                    : 'border-white/[0.07]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                      {app.category}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-bold text-white mb-2">
                    {app.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {app.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.05] text-[11px] text-emerald-300/90 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{app.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
