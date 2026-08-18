import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setError('');
    setSubmitted(true);
    audioSynth.playChord([261.63, 329.63, 392.0, 523.25], 1.8);
  };

  return (
    <section id="contato" className="py-24 relative bg-[#090d10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Intro & Direct Channels */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
              <span>15 // VAMOS CONVERSAR?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
              Novas Conexões, Parcerias & Projetos
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-light mb-8">
              Aberto a diálogos sobre consultoria comercial e planos de benefícios, gestão e conformidade de contratos, modelagem de plataformas digitais e parcerias em Brasília e em todo o Brasil.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="glass-panel glass-panel-hover p-4 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">E-mail Direto</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <div className="glass-panel p-4 rounded-2xl border border-white/[0.08] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Localização Base</div>
                  <div className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono text-slate-400 leading-relaxed">
              <strong className="text-emerald-400">Atendimento Consultivo:</strong> Propostas comerciais e diagnósticos estruturados sob medida.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/[0.08] bg-gradient-to-b from-[#101923] to-[#0d141b]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-2">
                    <h3 className="text-lg font-heading font-bold text-white">
                      Envie uma Mensagem Direta
                    </h3>
                    <span className="text-xs font-mono text-emerald-400">
                      Resposta Rápida
                    </span>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Carlos Eduardo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="exemplo@empresa.com.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Proposta de Planos de Saúde para PME / Projeto de Plataforma"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva sua necessidade ou proposta..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0b0f12] font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-950/50"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 animate-subtle-pulse">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 font-light">
                    Obrigado pelo contato, <strong>{name}</strong>. Responderei ao e-mail <strong>{email}</strong> em breve.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-300 border border-white/[0.08] transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
