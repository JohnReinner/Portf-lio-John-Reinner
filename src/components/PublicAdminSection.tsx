import React, { useState } from 'react';
import { 
  Landmark, 
  FileText, 
  Eye, 
  CheckSquare, 
  Award, 
  ShieldAlert, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';

export const PublicAdminSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processFlow = [
    {
      title: '01. Contrato',
      subtitle: 'Formalização e Instrumento',
      desc: 'Compreensão aprofundada dos termos de referência, cláusulas contratuais, obrigações da contratada e especificações do objeto pactuado.',
      icon: FileText
    },
    {
      title: '02. Acompanhamento',
      subtitle: 'Monitoramento Contínuo',
      desc: 'Verificação periódica dos prazos de entrega, alocação de equipes, regularidade cadastral e rotinas operacionais no órgão.',
      icon: ClipboardList
    },
    {
      title: '03. Fiscalização',
      subtitle: 'Vistoria & Conformidade',
      desc: 'Inspeção in loco da fiel execução do serviço, conferência técnica e emissão de apontamentos e notificações quando cabível.',
      icon: Eye
    },
    {
      title: '04. Controle',
      subtitle: 'Rigor e Prestação de Contas',
      desc: 'Validação documental de notas fiscais, atesto formal de serviços e conformidade com as normas da Administração Pública.',
      icon: CheckSquare
    },
    {
      title: '05. Resultado',
      subtitle: 'Entrega com Eficiência Pública',
      desc: 'Garantia do atendimento ao interesse público com economicidade, segurança jurídica e integridade institucional.',
      icon: Award
    }
  ];

  return (
    <section id="administracao-publica" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-4">
            <span>06 // ADMINISTRAÇÃO PÚBLICA & CONTRATOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Fiscalização & Rigor no Exército Brasileiro
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Atuação administrativa e fiscalização de contratos no âmbito da <strong className="text-sky-400 font-semibold">11ª Região Militar (Brasília/DF)</strong>, fundamentada no Estágio Setorial de Fiscalização de Contratos e no zelo pelo cumprimento estrito da legalidade pública.
          </p>
        </div>

        {/* Highlight Certification Banner */}
        <div className="glass-panel rounded-2xl p-5 mb-10 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-950/20 to-[#0b0f12]">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-sky-500/20 text-sky-400">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-sky-400">Certificação Oficial</div>
              <h3 className="text-base font-heading font-bold text-white">
                Estágio Setorial de Fiscalização de Contratos — 11ª Região Militar
              </h3>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            Brasília / DF
          </div>
        </div>

        {/* Process Flow Interactive Stepper */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            Fluxo do Ciclo de Gestão Contratual Pública:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processFlow.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={idx}
                  id={`public-step-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500/20 border-2 border-sky-400 shadow-lg shadow-sky-950/50'
                      : 'glass-panel hover:bg-white/[0.05] border border-white/[0.08]'
                  }`}
                >
                  <div className={`p-2 rounded-lg w-fit mb-3 ${
                    isSelected ? 'bg-sky-400 text-[#0b0f12]' : 'bg-white/[0.05] text-sky-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-heading font-bold text-white mb-1">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-sky-400 font-medium mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
