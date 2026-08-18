import React from 'react';
import { Compass, ArrowUp, Mail, MapPin } from 'lucide-react';
import { TabId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onSelectTab?: (tabId: TabId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleTabClick = (tabId: TabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    scrollToTop();
  };

  return (
    <footer className="py-12 bg-[#080a09] border-t border-white/[0.08] text-slate-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Sleek Header Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/[0.06]">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-emerald-400 mb-1.5 font-semibold">
              Projeto de Destaque
            </span>
            <button 
              onClick={() => handleTabClick('projetos')}
              className="text-xs font-semibold text-slate-200 hover:text-emerald-400 text-left transition-colors cursor-pointer"
            >
              Transição de Carreira Militar
            </button>
            <span className="text-[10px] font-mono text-slate-500 mt-1">Brasília / DF</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-sky-400 mb-1.5 font-semibold">
              Inteligência & Contratos
            </span>
            <button 
              onClick={() => handleTabClick('experiencia')}
              className="text-xs font-semibold text-slate-200 hover:text-sky-400 text-left transition-colors cursor-pointer"
            >
              Fiscalização de Contratos & Editais
            </button>
            <span className="text-[10px] font-mono text-slate-500 mt-1">11ª RM • Governança</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-purple-400 mb-1.5 font-semibold">
              Laboratório Criativo
            </span>
            <button 
              onClick={() => handleTabClick('laboratorio')}
              className="text-xs font-semibold text-slate-200 hover:text-purple-400 text-left transition-colors cursor-pointer"
            >
              Composição & Produção Musical
            </button>
            <span className="text-[10px] font-mono text-slate-500 mt-1">Arranjos Autorais & Escapes Lúdicos</span>
          </div>

          <div className="flex sm:justify-end items-center gap-2.5">
            <button
              onClick={() => handleTabClick('inicio')}
              className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-slate-300 hover:bg-emerald-500 hover:text-[#0a0c0b] hover:border-emerald-400 transition-colors cursor-pointer"
              title="Ir para o Início"
            >
              JR
            </button>
            <button
              onClick={() => handleTabClick('experiencia')}
              className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-slate-300 hover:bg-emerald-500 hover:text-[#0a0c0b] hover:border-emerald-400 transition-colors cursor-pointer"
              title="Histórico Profissional"
            >
              EX
            </button>
            <button
              onClick={() => handleTabClick('contato')}
              className="w-8 h-8 rounded bg-white/[0.04] border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-slate-300 hover:bg-emerald-500 hover:text-[#0a0c0b] hover:border-emerald-400 transition-colors cursor-pointer"
              title="Contato"
            >
              CT
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-[#5A5A40] flex items-center justify-center text-[9px] text-[#5A5A40] font-bold">
              JR
            </div>
            <span>
              © {new Date().getFullYear()} John Reinner • Brasília, DF • Estratégia • Gestão • Tecnologia • Inovação
            </span>
          </div>

          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

