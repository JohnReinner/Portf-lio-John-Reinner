import React, { useState } from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { EducationItem } from '../types';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Plus, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export const FormationSection: React.FC = () => {
  const [items, setItems] = useState<EducationItem[]>(EDUCATION_ITEMS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newInstitution, setNewInstitution] = useState('');
  const [newDetails, setNewDetails] = useState('');

  const handleAddCustomCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newInstitution.trim()) return;

    const newItem: EducationItem = {
      id: `custom-${Date.now()}`,
      degree: newTitle,
      institution: newInstitution,
      status: 'Concluído / Em Andamento',
      type: 'course',
      details: newDetails || 'Certificação / Curso adicionado para atualização contínua.'
    };

    setItems([...items, newItem]);
    setNewTitle('');
    setNewInstitution('');
    setNewDetails('');
    setShowAddForm(false);
  };

  return (
    <section id="formacao" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>04 // FORMAÇÃO ACADÊMICA & CAPACITAÇÕES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Base Teórica & Aperfeiçoamento Contínuo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Formação sólida em Administração de Empresas, habilitação técnica em seguros regulada pela SUSEP, capacitação institucional em fiscalização de contratos públicos e certificações de governança e negócios.
          </p>
        </div>

        {/* Formation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {items.map((item) => {
            const isAcademic = item.type === 'academic';
            const isProfessional = item.type === 'professional';

            return (
              <div
                key={item.id}
                id={`education-card-${item.id}`}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border flex flex-col justify-between ${
                  isAcademic
                    ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 to-[#101820]'
                    : isProfessional
                    ? 'border-sky-500/30 bg-gradient-to-br from-sky-950/20 to-[#101820]'
                    : 'border-white/[0.07]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${
                      isAcademic ? 'bg-emerald-500/20 text-emerald-400' :
                      isProfessional ? 'bg-sky-500/20 text-sky-400' : 'bg-white/5 text-slate-300'
                    }`}>
                      {isAcademic ? <GraduationCap className="w-5 h-5" /> :
                       isProfessional ? <Award className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-1.5">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 mb-3">
                    {item.institution}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable "Adicionar Futura Formação/Certificação" */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1]">
          {!showAddForm ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-200">
                  Estrutura Aberta para Novas Especializações & Certificações
                </h4>
                <p className="text-xs text-slate-400">
                  Espaço modular para inclusão de futuros treinamentos em Inteligência Artificial, desenvolvimento de software e finanças.
                </p>
              </div>
              <button
                id="add-certification-toggle-btn"
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Registrar Nova Formação</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleAddCustomCourse} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-mono text-emerald-400">
                  Registrar Nova Especialização / Curso
                </span>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cancelar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nome do Curso ou Especialização (ex: Engenharia de Prompts)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
                  required
                />
                <input
                  type="text"
                  placeholder="Instituição / Certificador (ex: DeepLearning.AI)"
                  value={newInstitution}
                  onChange={(e) => setNewInstitution(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Detalhes ou competências desenvolvidas"
                value={newDetails}
                onChange={(e) => setNewDetails(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
              />

              <div className="flex justify-end gap-2">
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0b0f12] text-xs font-bold transition-colors cursor-pointer"
                >
                  Adicionar ao Registro
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
