import React, { useState } from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  EDUCATION_ITEMS, 
  SKILL_CATEGORIES 
} from '../data/portfolioData';
import { 
  FileText, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  X, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ShieldCheck 
} from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
CURRÍCULO PROFISSIONAL — JOHN REINNER
Estratégia • Gestão • Tecnologia • Inovação
Localização: ${PERSONAL_INFO.location}
E-mail: ${PERSONAL_INFO.email}

RESUMO PROFISSIONAL:
${PERSONAL_INFO.summary}

FORMAÇÃO ACADÊMICA & CERTIFICAÇÕES:
- Graduação em Administração de Empresas — UPIS
- Formação Profissional em Seguros — FUNENSEG / SUSEP
- Estágio Setorial de Fiscalização de Contratos — Exército Brasileiro (11ª RM)
- Cursos SEBRAE (Vendas, Planejamento Financeiro) & ITIL (Fundação Bradesco)

EXPERIÊNCIAS PRINCIPAIS:
1. Exército Brasileiro (11ª RM) — Administração e Fiscalização de Contratos
2. Lottus Tecnologia — Preposto de Contrato de TI / Redes (ANATEL)
3. Ellos Corretora — Coordenação e Supervisão Comercial de Saúde
4. Grupo Afinidade — Administração de Carteira de Benefícios de Saúde
5. Esparta Segurança Eletrônica — Rotinas Administrativas, Propostas e ERP Microsiga
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="curriculum-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="glass-panel max-w-4xl w-full rounded-3xl p-6 sm:p-10 border border-white/10 max-h-[92vh] overflow-y-auto bg-[#0d1318] text-slate-100 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header & Quick Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08] no-print">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
              Documento Profissional Estruturado
            </div>
            <h2 className="text-2xl font-heading font-extrabold text-white">
              Curriculum Vitae Oficial
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="cv-copy-btn"
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/[0.08] transition-colors cursor-pointer"
              title="Copiar Resumo em Texto"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              id="cv-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0f12] text-xs font-bold transition-colors cursor-pointer shadow-md"
              title="Imprimir / Salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              id="cv-close-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- PRINTABLE CURRICULUM BODY --- */}
        <div className="space-y-8">
          {/* Header Contact */}
          <div className="pb-6 border-b border-white/[0.08]">
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-semibold text-emerald-400 tracking-wide mb-3">
              {PERSONAL_INFO.headline}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-light">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Resumo Profissional</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Formação Acadêmica & Qualificações</span>
            </h3>
            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="text-sm font-heading font-bold text-slate-100">{edu.degree}</span>
                    <span className="text-[11px] font-mono text-emerald-400">{edu.status}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mb-1">{edu.institution}</div>
                  {edu.details && <div className="text-xs text-slate-300 font-light">{edu.details}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Histórico Profissional Detalhado</span>
            </h3>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-heading font-bold text-white">{exp.organization}</h4>
                      <div className="text-xs font-semibold text-emerald-400">{exp.role} • <span className="text-slate-300 font-normal">{exp.area}</span></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">{exp.period}</span>
                  </div>

                  {exp.highlight && (
                    <div className="text-xs text-sky-300 mb-3 font-medium bg-sky-950/20 p-2 rounded-lg border border-sky-500/20">
                      ★ {exp.highlight}
                    </div>
                  )}

                  <ul className="space-y-1.5 mb-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-white/[0.04]">
                    {exp.competencies.map((comp, cIdx) => (
                      <span key={cIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
