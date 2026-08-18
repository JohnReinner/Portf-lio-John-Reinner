import React, { useState } from 'react';
import { STRATEGIC_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Users, 
  Layers, 
  Edit3, 
  Check, 
  X,
  Target,
  Workflow
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(STRATEGIC_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editUrl, setEditUrl] = useState('');

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setEditNotes(project.userNotes || '');
    setEditStatus(project.status || '');
    setEditUrl(project.urlPlaceholder || '');
    setIsEditing(false);
    audioSynth.playChord([329.63, 392.0, 493.88], 1.5);
  };

  const handleSaveEdit = () => {
    if (!selectedProject) return;
    const updated = projects.map(p => {
      if (p.id === selectedProject.id) {
        return {
          ...p,
          userNotes: editNotes,
          status: editStatus,
          urlPlaceholder: editUrl
        };
      }
      return p;
    });
    setProjects(updated);
    setSelectedProject({
      ...selectedProject,
      userNotes: editNotes,
      status: editStatus,
      urlPlaceholder: editUrl
    });
    setIsEditing(false);
  };

  return (
    <section id="projetos" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <span>10 // PROJETOS ESTRATÉGICOS & DESTINOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Projetos como Destinos de Inovação
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Iniciativas proprietárias desenhadas para solucionar gargalos concretos, unindo a vivência no setor público e no mercado privado a ferramentas tecnológicas modernas.
          </p>
        </div>

        {/* 2 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => {
            const isTransition = project.id === 'transicao-carreira';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between relative overflow-hidden ${
                  isTransition
                    ? 'border-emerald-500/30 bg-gradient-to-b from-[#0e1e17] to-[#09110e]'
                    : 'border-sky-500/30 bg-gradient-to-b from-[#0e1724] to-[#090e17]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      isTransition ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                      'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    }`}>
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Destino {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5">
                    {project.title}
                  </h3>
                  <div className="text-sm font-semibold text-emerald-400 mb-4">
                    {project.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {project.concept}
                  </p>

                  {/* Objective statement */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Objetivo Central
                    </div>
                    <div className="text-xs font-heading font-semibold text-slate-100">
                      {project.objective}
                    </div>
                  </div>

                  {/* Process Stage Preview */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                      Fluxo de Valor do Projeto
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-slate-300">
                      {project.stages.slice(0, 4).map((st, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                            {st.title.split('. ')[1] || st.title}
                          </span>
                          {sIdx < 3 && <span className="text-slate-600">→</span>}
                        </React.Fragment>
                      ))}
                      <span className="text-slate-500">+2</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400">
                    Status: <span className="text-slate-200 font-medium">{project.status.split(' ')[0]}...</span>
                  </div>
                  <button
                    id={`open-project-btn-${project.id}`}
                    onClick={() => handleOpenProject(project)}
                    className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer border border-white/[0.08]"
                  >
                    <span>Explorar Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Deep-Dive Drawer */}
        {selectedProject && (
          <div 
            id="project-modal"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass-panel max-w-4xl w-full rounded-3xl p-6 sm:p-8 border border-white/10 max-h-[90vh] overflow-y-auto bg-[#0d1318]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 pb-4 mb-6 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300">
                    {selectedProject.subtitle}
                  </div>
                </div>

                <button
                  id="close-project-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Public Audience & Objective */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    Público-Alvo
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {selectedProject.targetAudience}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                    Objetivo Principal
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {selectedProject.objective}
                  </p>
                </div>
              </div>

              {/* Full Interactive Process Stages */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Etapas do Fluxo Operacional:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedProject.stages.map((stage, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="text-xs font-heading font-bold text-emerald-400 mb-1">
                        {stage.title}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-light">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Tech */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Funcionalidades Mapeadas
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Tecnologias & Arquitetura
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] text-xs text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[11px] font-mono text-slate-400 mb-1">Status Atual:</div>
                    <div className="text-xs text-slate-200">{selectedProject.status}</div>
                  </div>
                </div>
              </div>

              {/* Editable / Additional Data Section */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.1]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Notas de Desenvolvimento & Resultados
                  </div>
                  {!isEditing ? (
                    <button
                      id="edit-project-notes-btn"
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-400"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Editar Dados do Projeto</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSaveEdit}
                        className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 text-[#0b0f12] text-xs font-bold"
                      >
                        <Check className="w-3.5 h-3.5" /> Salvar
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <div className="text-xs text-slate-300 font-light leading-relaxed">
                    <p className="mb-2"><strong className="text-slate-200">Resultados & Validação:</strong> {selectedProject.results}</p>
                    <p className="mb-2"><strong className="text-slate-200">Notas Adicionais:</strong> {selectedProject.userNotes || '[Nenhuma observação extra cadastrada]'}</p>
                    <p><strong className="text-slate-200">URL / Acesso:</strong> <span className="font-mono text-emerald-400">{selectedProject.urlPlaceholder || '[DADO A PREENCHER]'}</span></p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Status Atual</label>
                      <input
                        type="text"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Notas e Observações</label>
                      <textarea
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        rows={2}
                        className="w-full px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">URL / Link da Plataforma</label>
                      <input
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
