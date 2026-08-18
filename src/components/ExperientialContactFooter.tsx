import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, RotateCcw, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioSynth } from '../utils/audioSynth';

export const ExperientialContactFooter: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) return;
    setIsSubmitted(true);
    audioSynth.playSuccessSound();
  };

  const handleResetTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    audioSynth.playNavClick();
  };

  return (
    <footer id="contato" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center border-t border-white/[0.08]">
      
      {/* Chapter Marker */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase">
          08 // CONTATO & CONCLUSÃO
        </span>
        <div className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10px] font-mono text-slate-500 uppercase">
          VAMOS CONVERSAR
        </span>
      </div>

      {/* Chapter 20: Progressive Invitation */}
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/[0.1] bg-[#0c120e] mb-20">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-lg font-mono text-slate-400 uppercase tracking-widest mb-4">
            <span className="text-white font-bold">TEM UMA IDEIA?</span>
            <span className="text-emerald-400">·</span>
            <span>UM PROJETO?</span>
            <span className="text-emerald-400">·</span>
            <span>UMA OPORTUNIDADE?</span>
            <span className="text-emerald-400">·</span>
            <span className="text-emerald-300 font-bold">UMA CONVERSA?</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight mb-6">
            VAMOS CONVERSAR.
          </h2>

          <p className="text-sm sm:text-base font-light text-slate-300 max-w-xl mx-auto mb-8">
            Disponível para consultorias estratégicas, parcerias de tecnologia, desenvolvimento de produtos e desafios de alta responsabilidade.
          </p>

          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                audioSynth.playNavClick();
              }}
              data-cursor="MENSAGEM"
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#070908] font-mono font-extrabold text-sm tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(52,211,153,0.3)] flex items-center justify-center gap-3 mx-auto cursor-pointer"
            >
              <span>VAMOS CONVERSAR →</span>
            </button>
          )}
        </div>

        {/* Direct Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            data-cursor="EMAIL"
            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-400/40 transition-all flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-white/[0.04] text-emerald-400">
              <Mail className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[9px] font-mono text-slate-500 uppercase block">EMAIL DIRETO</span>
              <span className="text-xs font-mono text-slate-200 truncate block">{PERSONAL_INFO.email}</span>
            </div>
          </a>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] text-sky-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-slate-500 uppercase block">LOCALIZAÇÃO</span>
              <span className="text-xs font-mono text-slate-200">Brasília, DF • Brasil</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] text-purple-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[9px] font-mono text-slate-500 uppercase block">DISPONIBILIDADE</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">Projetos & Estratégia</span>
            </div>
          </div>
        </div>

        {/* Interactive Form Drawer */}
        {showForm && (
          <div className="mt-10 pt-10 border-t border-white/[0.1] animate-fadeIn">
            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-heading font-extrabold text-xl text-white uppercase mb-2">
                  MENSAGEM REGISTRADA COM SUCESSO
                </h4>
                <p className="text-xs font-mono text-slate-300 mb-4">
                  Obrigado pelo contato. Responderei em breve pelo email fornecido.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded bg-white/[0.05] text-xs font-mono text-slate-300 hover:text-white"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      SEU NOME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Nome ou Organização"
                      className="w-full px-4 py-3 rounded-xl bg-[#070908] border border-white/[0.1] text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                      SEU EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="exemplo@dominio.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070908] border border-white/[0.1] text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    ASSUNTO
                  </label>
                  <input
                    type="text"
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    placeholder="Transição, Parceria, Projeto ou Consultoria"
                    className="w-full px-4 py-3 rounded-xl bg-[#070908] border border-white/[0.1] text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5">
                    MENSAGEM *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva sua ideia, objetivo ou proposta..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070908] border border-white/[0.1] text-xs font-mono text-slate-100 placeholder-slate-600 focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs font-mono text-slate-500 hover:text-slate-300"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    data-cursor="ENVIAR"
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#070908] font-mono font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Enviar Mensagem</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>

      {/* Chapter 32: Grand Finale Statement & Restart */}
      <div className="text-center pt-8 space-y-6">
        
        <div className="max-w-4xl mx-auto space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
            EXPERIÊNCIA É O QUE FOI CONSTRUÍDO.
          </h2>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl text-emerald-400 uppercase tracking-tight leading-tight">
            INOVAÇÃO É O QUE PODE SER CRIADO A PARTIR DELA.
          </h2>
        </div>

        <div className="pt-6">
          <div className="font-heading font-extrabold text-xl tracking-[0.2em] text-slate-100 uppercase mb-1">
            JOHN REINNER
          </div>
          <div className="text-xs font-mono tracking-[0.25em] text-slate-500 uppercase">
            GESTÃO · TECNOLOGIA · IA · CRIAÇÃO
          </div>
        </div>

        <div className="pt-8">
          <button
            onClick={handleResetTop}
            data-cursor="REINICIAR"
            className="group px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] hover:border-emerald-400/60 text-slate-300 hover:text-white text-xs font-mono tracking-[0.2em] uppercase transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <span>COMEÇAR NOVAMENTE</span>
            <RotateCcw className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>

        <div className="pt-10 text-[10px] font-mono text-slate-600">
          © {new Date().getFullYear()} JOHN REINNER • EXPERIÊNCIA DIGITAL EXPERIMENTAL
        </div>

      </div>

    </footer>
  );
};
