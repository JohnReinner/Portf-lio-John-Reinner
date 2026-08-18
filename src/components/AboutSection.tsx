import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Landmark, 
  Target, 
  Cpu, 
  Sparkles, 
  Lightbulb, 
  TrendingUp,
  GraduationCap,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const axes = [
    {
      id: 'admin',
      title: 'Administração',
      subtitle: 'Formação & Visão Sistêmica',
      description: 'Graduação em Administração de Empresas pela UPIS. Domínio de planejamento organizacional, processos, finanças e controle estruturado.',
      icon: GraduationCap,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      id: 'gestao',
      title: 'Gestão & Supervisão',
      subtitle: 'Controle Operacional & Liderança',
      description: 'Supervisão de equipes operacionais e comerciais, atuação como preposto em contratos de TI e rigor com controles administrativos.',
      icon: Layers,
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      border: 'border-teal-500/20'
    },
    {
      id: 'negocios',
      title: 'Negócios & Seguros',
      subtitle: 'PMEs no Distrito Federal',
      description: 'Formação em seguros (FUNENSEG / SUSEP). Especialização comercial em planos de saúde corporativos para pequenas e médias empresas.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      border: 'border-cyan-500/20'
    },
    {
      id: 'publica',
      title: 'Administração Pública',
      subtitle: '11ª Região Militar / EB',
      description: 'Atuação administrativa e fiscalização minuciosa de contratos públicos no Exército Brasileiro. Certificado no Estágio Setorial de Fiscalização de Contratos.',
      icon: Landmark,
      color: 'text-sky-400',
      bgColor: 'bg-sky-500/10',
      border: 'border-sky-500/20'
    },
    {
      id: 'marketing',
      title: 'Marketing Digital',
      subtitle: 'Meta Ads & Geração de Leads',
      description: 'Campanhas de tráfego pago via Facebook e Instagram Lead Ads. Construção de funis de prospecção e conversão de oportunidades comerciais.',
      icon: Target,
      color: 'text-violet-400',
      bgColor: 'bg-violet-500/10',
      border: 'border-violet-500/20'
    },
    {
      id: 'tecnologia',
      title: 'Tecnologia & Plataformas',
      subtitle: 'Soluções Digitais & Governança',
      description: 'Coordenação técnica (ANATEL/Lottus), conhecimentos de boas práticas ITIL e modelagem de arquitetura funcional de sistemas.',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      id: 'ia',
      title: 'Inteligência Artificial',
      subtitle: 'Amplificador de Produtividade',
      description: 'Utilização transversal de IA para aceleração de análises, síntese de documentos complexos, automação de tarefas e suporte ao raciocínio estratégico.',
      icon: Sparkles,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      id: 'inovacao',
      title: 'Inovação & Soluções',
      subtitle: 'Resolução de Problemas Reais',
      description: 'Desenvolvimento de projetos próprios voltados a dores concretas: Transição de Carreira Militar e Análise Inteligente de Editais Públicos.',
      icon: Lightbulb,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      border: 'border-amber-500/20'
    }
  ];

  return (
    <section id="sobre" className="py-24 relative border-t border-white/[0.06] bg-[#0a0c0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#5A5A40]/15 border border-[#5A5A40]/40 text-[#c2c29d] text-[10px] font-mono tracking-[0.25em] uppercase mb-4">
            <span>01 // IDENTIDADE & VISÃO MULTIDISCIPLINAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight mb-4 uppercase">
            Conectando Saberes para Construir Soluções
          </h2>
          <div className="h-0.5 w-14 bg-emerald-500 mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            Não me posiciono como especialista isolado em uma única caixa. Meu valor central reside na capacidade de transitar com fluidez entre a gestão administrativa, a perspicácia comercial, a conformidade de contratos e o potencial transformador da tecnologia.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-16 border border-white/[0.08] relative overflow-hidden bg-gradient-to-br from-[#0e1411] to-[#0a0c0b]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xl font-heading font-bold text-slate-100 mb-4">
                Das Raízes Administrativas à Inovação com Inteligência Artificial
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                Minha trajetória começou com a formação em <strong className="text-emerald-400 font-semibold">Administração de Empresas (UPIS)</strong> e rotinas operacionais rigorosas em empresas como Esparta Segurança. Evoluiu para o mercado de seguros corporativos (FUNENSEG/SUSEP), liderando vendas de benefícios para PMEs no Distrito Federal.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                Na <strong className="text-sky-400 font-semibold">Administração Pública (Exército Brasileiro / 11ª Região Militar)</strong>, aprofundei a disciplina na fiscalização de contratos administrativos. Na Lottus Tecnologia, atuei como preposto coordenando equipe de TI alocada na <strong className="text-slate-100 font-semibold">ANATEL</strong>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Hoje, essa bagagem converge na criação de soluções estratégicas e plataformas digitais onde a <strong className="text-emerald-400 font-semibold">Inteligência Artificial</strong> atua como multiplicadora da experiência humana.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-3 p-6 rounded-xl bg-[#0e1210] border border-white/[0.08]">
              <div className="text-[10px] font-mono text-emerald-400 tracking-[0.25em] uppercase">
                Fórmula de Atuação
              </div>
              <div className="text-xl font-heading font-black text-white leading-snug">
                EXPERIÊNCIA
                <span className="text-emerald-400"> + </span>
                ESTRATÉGIA
                <span className="text-sky-400"> + </span>
                TECNOLOGIA
                <span className="text-[#5A5A40]"> = </span>
                <span className="text-emerald-400 underline decoration-emerald-500/40">SOLUÇÃO</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Brasília, Distrito Federal • Atuação B2B & Setor Público
              </div>
            </div>
          </div>
        </div>

        {/* 8 Core Axes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {axes.map((axis) => {
            const Icon = axis.icon;
            return (
              <div
                key={axis.id}
                id={`about-axis-${axis.id}`}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/[0.07] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${axis.bgColor} ${axis.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {axis.id}
                    </span>
                  </div>

                  <h4 className="text-base font-heading font-bold text-slate-100 mb-1">
                    {axis.title}
                  </h4>
                  <div className="text-xs font-medium text-emerald-400/90 mb-3">
                    {axis.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {axis.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
