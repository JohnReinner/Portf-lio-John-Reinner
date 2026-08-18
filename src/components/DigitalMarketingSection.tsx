import React, { useState } from 'react';
import { 
  Target, 
  Share2, 
  Users, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  Flame
} from 'lucide-react';

export const DigitalMarketingSection: React.FC = () => {
  const [activeFunnelStep, setActiveFunnelStep] = useState(0);

  const funnelSteps = [
    {
      step: '01',
      title: 'PLANEJAMENTO',
      subtitle: 'Definição de Público & Oferta',
      desc: 'Pesquisa minuciosa de persona, mapeamento de dores de empresários e decisores de PMEs, e criação da proposta de valor comercial.',
      tag: 'Estratégia'
    },
    {
      step: '02',
      title: 'CAMPANHA',
      subtitle: 'Meta Ads (Facebook & IG)',
      desc: 'Configuração técnica de anúncios no Gerenciador de Anúncios com foco em formulários instantâneos nativos (Lead Ads) e alta conversão.',
      tag: 'Tráfego Pago'
    },
    {
      step: '03',
      title: 'LEAD QUALIFICADO',
      subtitle: 'Captura com Dados Validados',
      desc: 'Recepção de contatos com filtros prévios (porte da empresa, CNPJ, quantidade de vidas/funcionários e interesse real).',
      tag: 'Aquisição'
    },
    {
      step: '04',
      title: 'CONTATO',
      subtitle: 'Abordagem Comercial Ágil',
      desc: 'Contato rápido e consultivo para apresentação das opções de planos e diagnóstico da necessidade corporativa.',
      tag: 'Atendimento'
    },
    {
      step: '05',
      title: 'OPORTUNIDADE',
      subtitle: 'Fechamento & Contrato',
      desc: 'Elaboração da proposta customizada, negociação de condições e formalização do contrato com retenção contínua.',
      tag: 'Conversão'
    }
  ];

  return (
    <section id="marketing" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <span>07 // MARKETING DIGITAL & PROSPECÇÃO ESTRATÉGICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Tráfego Pago, Meta Lead Ads & Funis de Conversão
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Domínio na estruturação de campanhas de aquisição de clientes via <strong className="text-violet-400 font-medium">Facebook Lead Ads</strong> e <strong className="text-violet-400 font-medium">Instagram Ads</strong>, integrando tráfego qualificado ao fluxo de fechamento comercial.
          </p>
        </div>

        {/* Funnel Visual Component */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-10 border border-violet-500/20 bg-gradient-to-b from-[#130f1c] to-[#0c0912]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-lg font-heading font-bold text-white">
                O Funil Estratégico de Prospecção
              </h3>
              <p className="text-xs text-slate-400">
                Processo estruturado do anúncio ao fechamento do contrato
              </p>
            </div>
            <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
              Fluxo Contínuo de Aquisição
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
            {funnelSteps.map((step, idx) => {
              const isSelected = activeFunnelStep === idx;
              return (
                <button
                  key={idx}
                  id={`funnel-step-${idx}`}
                  onClick={() => setActiveFunnelStep(idx)}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-violet-500/20 border-2 border-violet-400 shadow-lg shadow-violet-950/60'
                      : 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-violet-400">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
                      {step.tag}
                    </span>
                  </div>
                  <div className="text-xs font-heading font-bold text-white mb-1">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-violet-300 font-medium mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-center gap-2 text-center flex-wrap">
            <span className="text-violet-400 font-semibold">PLANEJAMENTO</span>
            <span>→</span>
            <span className="text-violet-400 font-semibold">CAMPANHA</span>
            <span>→</span>
            <span className="text-violet-400 font-semibold">LEAD</span>
            <span>→</span>
            <span className="text-violet-400 font-semibold">CONTATO</span>
            <span>→</span>
            <span className="text-emerald-400 font-semibold">OPORTUNIDADE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
