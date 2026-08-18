import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Building, 
  TrendingUp, 
  CheckCircle2, 
  Handshake, 
  FileCheck 
} from 'lucide-react';

export const InsuranceBusinessSection: React.FC = () => {
  const pillars = [
    {
      title: 'Planos de Saúde para PMEs',
      desc: 'Análise detalhada de custos, coberturas, redes credenciadas e adequação de planos empresariais de saúde para Pequenas e Médias Empresas no DF.',
      icon: ShieldCheck
    },
    {
      title: 'Coordenação Comercial',
      desc: 'Supervisão de equipe de consultores, treinamento de produtos de saúde suplementar, acompanhamento de metas e padronização do atendimento.',
      icon: Users
    },
    {
      title: 'Administração de Carteira B2B',
      desc: 'Relacionamento consultivo contínuo, pós-venda, inclusão de beneficiários, negociação de reajustes e retenção de contratos corporativos.',
      icon: Handshake
    },
    {
      title: 'Planejamento de Prospecção',
      desc: 'Elaboração de planos semanais estruturados de prospecção corporativa para empresas do Distrito Federal.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="seguros" className="py-24 relative bg-[#0b0f12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
              <span>05 // MERCADO DE SEGUROS & NEGÓCIOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-6 leading-tight">
              Especialista em Planos de Saúde Corporativos para PMEs no DF
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6 font-light">
              Com formação técnica em seguros pela <strong className="text-teal-400 font-medium">FUNENSEG / SUSEP</strong>, desenvolvi sólida atuação comercial na coordenação de equipes de vendas e na administração de carteiras de benefícios de saúde no Distrito Federal.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-8 font-light">
              O foco estratégico em Pequenas e Médias Empresas combina empatia com as necessidades do empresário, domínio regulatório e rigor técnico na análise de apólices e contratos corporativos.
            </p>

            <div className="space-y-3">
              {[
                'Habilitação profissional técnica FUNENSEG / SUSEP',
                'Coordenação e supervisão de equipe de vendas de benefícios',
                'Atendimento consultivo e estruturação de propostas B2B',
                'Gestão contínua de carteira e retenção com alta fidelidade'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Architecture (Pessoas + Negócios + Estratégia) */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-teal-500/20 relative overflow-hidden bg-gradient-to-b from-[#0d1a1b] to-[#091113]">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>Ecossistema Comercial de Saúde</span>
                <span className="px-2 py-0.5 rounded bg-teal-500/20 text-[10px]">Distrito Federal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-500/30 transition-colors"
                    >
                      <div className="p-2 w-fit rounded-lg bg-teal-500/10 text-teal-400 mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-heading font-bold text-white mb-1.5">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Formula Badge */}
              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-center">
                <div className="text-[11px] font-mono text-teal-300">
                  PESSOAS <span className="text-slate-400">+</span> NEGÓCIOS <span className="text-slate-400">+</span> ESTRATÉGIA <span className="text-teal-400">=</span> CONTRATOS SUSTENTÁVEIS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
