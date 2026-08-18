import { 
  CareerMilestone, 
  ExperienceItem, 
  EducationItem, 
  SkillCategory, 
  ProjectItem, 
  AudioExperiment, 
  NowItem,
  TabId,
  JourneyAct,
  RouteStep
} from '../types';

export const PERSONAL_INFO = {
  name: 'JOHN REINNER',
  headline: 'ESTRATÉGIA • GESTÃO • TECNOLOGIA • INOVAÇÃO',
  conceptualPhrase: 'Uma trajetória construída pela experiência e direcionada para a criação de novas soluções.',
  coreMessage: 'A experiência acumulada não é o ponto final. É a base para criar o próximo caminho.',
  location: 'Brasília, Distrito Federal, Brasil',
  email: 'saude.john@gmail.com',
  summary: 'Profissional multidisciplinar com formação em Administração de Empresas e sólida trajetória integrando gestão operacional, desenvolvimento comercial no mercado de seguros para PMEs, fiscalização de contratos na Administração Pública (Exército Brasileiro / 11ª RM), estratégias de marketing digital e desenvolvimento de soluções tecnológicas potencializadas por Inteligência Artificial.',
  philosophyFormula: 'EXPERIÊNCIA + PLANEJAMENTO + TECNOLOGIA + CRIATIVIDADE = SOLUÇÕES'
};

export const JOURNEY_ACTS: JourneyAct[] = [
  {
    id: 'ato-1',
    number: '01',
    name: 'INÍCIO',
    subtitle: 'De Onde Eu Venho',
    message: 'A experiência foi construída ao longo do caminho.',
    tabIds: ['inicio', 'trajetoria', 'experiencia'],
    color: '#5A5A40',
    badge: 'ATO 01 • ORIGEM & EXPERIÊNCIA'
  },
  {
    id: 'ato-2',
    number: '02',
    name: 'MEIO',
    subtitle: 'O Que Eu Aprimorei',
    message: 'A experiência acumulada foi lapidada e transformada em conhecimento e capacidade de execução.',
    tabIds: ['competencias', 'tecnologia-ia'],
    color: '#0284c7',
    badge: 'ATO 02 • LAPIDAÇÃO & TECNOLOGIA'
  },
  {
    id: 'ato-3',
    number: '03',
    name: 'FIM',
    subtitle: 'Para Onde Estou Indo',
    message: 'O conhecimento acumulado agora é utilizado para criar novas soluções.',
    tabIds: ['projetos', 'laboratorio', 'agora', 'contato'],
    color: '#10b981',
    badge: 'ATO 03 • CRIAÇÃO & FUTURO'
  }
];

export interface TabConfig {
  id: TabId;
  tabNumber: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  actId: 'ato-1' | 'ato-2' | 'ato-3';
  routeStepIndex: number;
  nextTab: TabId | null;
  prevTab: TabId | null;
  nextLabel: string;
  prevLabel: string;
}

export const JOURNEY_TABS: TabConfig[] = [
  {
    id: 'inicio',
    tabNumber: '01',
    shortLabel: 'Início',
    title: 'JOHN REINNER',
    subtitle: 'Uma trajetória construída pela experiência e direcionada para a criação de novas soluções.',
    actId: 'ato-1',
    routeStepIndex: 0,
    nextTab: 'trajetoria',
    prevTab: null,
    nextLabel: 'Iniciar Jornada',
    prevLabel: ''
  },
  {
    id: 'trajetoria',
    tabNumber: '02',
    shortLabel: 'Trajetória',
    title: 'DE ONDE EU VENHO',
    subtitle: 'Uma trajetória construída passo a passo: Origem → Experiência → Transformação.',
    actId: 'ato-1',
    routeStepIndex: 1,
    nextTab: 'experiencia',
    prevTab: 'inicio',
    nextLabel: 'Ver Experiências',
    prevLabel: 'Início'
  },
  {
    id: 'experiencia',
    tabNumber: '03',
    shortLabel: 'Experiência',
    title: 'ONDE A EXPERIÊNCIA FOI LAPIDADA',
    subtitle: 'Administração, Seguros, Lottus TI / ANATEL e 11ª Região Militar do Exército.',
    actId: 'ato-1',
    routeStepIndex: 1,
    nextTab: 'competencias',
    prevTab: 'trajetoria',
    nextLabel: 'Ver Competências',
    prevLabel: 'Trajetória'
  },
  {
    id: 'competencias',
    tabNumber: '04',
    shortLabel: 'Competências',
    title: 'MATRIZ DE COMPETÊNCIAS',
    subtitle: 'Gestão • Negócios • Logística • Marketing • Tecnologia • Inteligência Artificial.',
    actId: 'ato-2',
    routeStepIndex: 2,
    nextTab: 'tecnologia-ia',
    prevTab: 'experiencia',
    nextLabel: 'Tecnologia & IA',
    prevLabel: 'Experiência'
  },
  {
    id: 'tecnologia-ia',
    tabNumber: '05',
    shortLabel: 'Tecnologia & IA',
    title: 'TECNOLOGIA & INTELIGÊNCIA ARTIFICIAL',
    subtitle: 'A experiência acumulada agora encontra novas ferramentas para criar soluções.',
    actId: 'ato-2',
    routeStepIndex: 3,
    nextTab: 'projetos',
    prevTab: 'competencias',
    nextLabel: 'Explorar Projetos',
    prevLabel: 'Competências'
  },
  {
    id: 'projetos',
    tabNumber: '06',
    shortLabel: 'Projetos',
    title: 'PROJETOS & SOLUÇÕES DIGITAIS',
    subtitle: 'Destinos em um mapa digital: Transição Militar, Licitações Inteligentes e mais.',
    actId: 'ato-3',
    routeStepIndex: 4,
    nextTab: 'laboratorio',
    prevTab: 'tecnologia-ia',
    nextLabel: 'Laboratório Criativo',
    prevLabel: 'Tecnologia & IA'
  },
  {
    id: 'laboratorio',
    tabNumber: '07',
    shortLabel: 'Laboratório',
    title: 'LABORATÓRIO CRIATIVO & ESCAPES LÚDICOS',
    subtitle: 'Criar também é uma forma de pensar: Composição autoral, síntese de áudio e frequências.',
    actId: 'ato-3',
    routeStepIndex: 4,
    nextTab: 'agora',
    prevTab: 'projetos',
    nextLabel: 'Agora & Futuro',
    prevLabel: 'Projetos'
  },
  {
    id: 'agora',
    tabNumber: '08',
    shortLabel: 'Agora',
    title: 'O QUE ESTOU CONSTRUINDO HOJE',
    subtitle: 'Explorando, construindo plataformas, desenvolvendo projetos e novos objetivos.',
    actId: 'ato-3',
    routeStepIndex: 5,
    nextTab: 'contato',
    prevTab: 'laboratorio',
    nextLabel: 'Próximo Destino: Contato',
    prevLabel: 'Laboratório'
  },
  {
    id: 'contato',
    tabNumber: '09',
    shortLabel: 'Contato',
    title: 'VAMOS CONVERSAR?',
    subtitle: 'A experiência acumulada é a base para criar o próximo caminho. Vamos nos conectar.',
    actId: 'ato-3',
    routeStepIndex: 5,
    nextTab: null,
    prevTab: 'agora',
    nextLabel: '',
    prevLabel: 'Agora'
  }
];

export const ROUTE_STEPS: RouteStep[] = [
  { id: 'step-01', stepNumber: '01', label: 'ORIGEM', tabId: 'inicio', actId: 'ato-1' },
  { id: 'step-02', stepNumber: '02', label: 'EXPERIÊNCIA', tabId: 'experiencia', actId: 'ato-1' },
  { id: 'step-03', stepNumber: '03', label: 'APRIMORAMENTO', tabId: 'competencias', actId: 'ato-2' },
  { id: 'step-04', stepNumber: '04', label: 'TECNOLOGIA & IA', tabId: 'tecnologia-ia', actId: 'ato-2' },
  { id: 'step-05', stepNumber: '05', label: 'CRIAÇÃO & LAB', tabId: 'projetos', actId: 'ato-3' },
  { id: 'step-06', stepNumber: '06', label: 'FUTURO', tabId: 'contato', actId: 'ato-3' }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'formacao-admin',
    stage: '01. FORMAÇÃO & BASE',
    title: 'Graduação em Administração de Empresas',
    category: 'origem',
    period: 'Formação Superior',
    organization: 'UPIS — União Pioneira de Integração Social',
    summary: 'Estruturação da visão sistêmica sobre organizações, processos operacionais, finanças corporativas, recursos humanos e tomada de decisão fundamentada em dados.',
    competencies: ['Teoria Geral da Administração', 'Visão Sistêmica', 'Planejamento Financeiro', 'Organização de Processos'],
    connectionToNext: 'A base teórica de processos levou à aplicação prática na gestão administrativa e de rotinas operacionais.',
    iconName: 'GraduationCap',
    accentColor: '#10b981' // emerald
  },
  {
    id: 'operacional-esparta',
    stage: '02. ROTINAS & OPERAÇÃO',
    title: 'Gestão Administrativa & Comercial',
    category: 'experiencia',
    period: 'Experiência Administrativa',
    organization: 'Esparta Segurança Eletrônica',
    summary: 'Atuação prática na estruturação de propostas comerciais, controle rigoroso de planilhas eletrônicas, notas fiscais, controle de estoque e operação no sistema ERP Microsiga.',
    competencies: ['Sistema Microsiga (ERP)', 'Propostas Comerciais', 'Controle de Estoque & NF', 'Relacionamento com Clientes'],
    connectionToNext: 'O rigor com controles e processos operacionais abriu portas para a gestão comercial de alta responsabilidade.',
    iconName: 'Building2',
    accentColor: '#059669'
  },
  {
    id: 'seguros-comercial',
    stage: '03. MERCADO DE SEGUROS & PMEs',
    title: 'Desenvolvimento Comercial & Benefícios de Saúde',
    category: 'experiencia',
    period: 'Atuação Especializada',
    organization: 'Ellos Corretora & Grupo Afinidade / FUNENSEG',
    summary: 'Formação profissional em seguros (FUNENSEG / SUSEP). Coordenação e supervisão de equipe de vendas de planos de saúde e administração de carteira de clientes corporativos com foco estratégico em PMEs no Distrito Federal.',
    competencies: ['Habilitação em Seguros (FUNENSEG/SUSEP)', 'Planos de Saúde para PMEs', 'Supervisão de Equipes Comerciais', 'Administração de Carteira B2B'],
    connectionToNext: 'A experiência em negociações complexas e contratos corporativos fortaleceu a capacidade de gestão institucional.',
    iconName: 'ShieldCheck',
    accentColor: '#0d9488'
  },
  {
    id: 'admin-publica',
    stage: '04. ADMINISTRAÇÃO PÚBLICA & CONTRATOS',
    title: 'Fiscalização de Contratos & Gestão Pública',
    category: 'transformacao',
    period: 'Atuação no Setor Público',
    organization: 'Exército Brasileiro — 11ª Região Militar (Brasília/DF)',
    summary: 'Atuação administrativa e fiscalização minuciosa de contratos no âmbito militar. Acompanhamento rigoroso de processos, conformidade legal, monitoramento da execução contratual e certificação no Estágio Setorial de Fiscalização de Contratos.',
    competencies: ['Fiscalização de Contratos Públicos', 'Estágio Setorial de Fiscalização', 'Controle de Conformidade', 'Processos Administrativos Públicos'],
    connectionToNext: 'A experiência pública aliada à coordenação técnica conduziu à gestão de contratos terceirizados na área de tecnologia.',
    iconName: 'Landmark',
    accentColor: '#0284c7'
  },
  {
    id: 'tech-lottus',
    stage: '05. GESTÃO TECNOLÓGICA & PREPOSTO',
    title: 'Supervisão de Equipe de Redes na ANATEL',
    category: 'estrategia',
    period: 'Gestão de Contratos de TI',
    organization: 'Lottus Tecnologia em Informática LTDA',
    summary: 'Atuação como preposto de contrato de prestação de serviços terceirizados, exercendo a liderança, supervisão e controle de equipe técnica de redes alocada na Agência Nacional de Telecomunicações (ANATEL).',
    competencies: ['Atuação como Preposto', 'Supervisão de Equipe de TI/Redes', 'Gestão de SLA e Entregas', 'Interface ANATEL / Prestador'],
    connectionToNext: 'A imersão em ambientes de tecnologia despertou o foco em estratégias digitais, automação e atração de oportunidades.',
    iconName: 'Network',
    accentColor: '#2563eb'
  },
  {
    id: 'marketing-digital',
    stage: '06. MARKETING DIGITAL & AQUISIÇÃO',
    title: 'Tráfego Pago & Estruturação de Funis de Venda',
    category: 'estrategia',
    period: 'Estratégia Digital',
    organization: 'Operação Própria & Consultoria Comercial',
    summary: 'Planejamento e execução de campanhas de tráfego pago via Facebook e Instagram Lead Ads. Construção do funil estratégico integrado: Planejamento → Campanha → Lead → Contato → Oportunidade.',
    competencies: ['Meta Lead Ads (FB/IG)', 'Geração de Leads Qualificados', 'Social Media Strategy', 'Planos de Ação de Prospecção'],
    connectionToNext: 'A combinação de dados de aquisição com gestão levou à aplicação transversal de Inteligência Artificial.',
    iconName: 'Target',
    accentColor: '#7c3aed'
  },
  {
    id: 'ia-projetos',
    stage: '07. INTELIGÊNCIA ARTIFICIAL & INOVAÇÃO',
    title: 'Desenvolvimento de Plataformas & Soluções com IA',
    category: 'inovacao',
    period: 'Iniciativas de Inovação',
    organization: 'Projetos Estratégicos',
    summary: 'Concepção de plataformas estratégicas: Transição de Carreira para Militares Temporários e Análise Inteligente de Editais & Contratos Públicos. Utilização de IA como acelerador de produtividade, análise documental e criação de valor.',
    competencies: ['Inteligência Artificial Aplicada', 'Arquitetura de Plataformas', 'Análise Inteligente de Editais', 'Transição de Competências'],
    connectionToNext: 'Construção contínua de novas soluções conectando gestão, dados, criatividade e visão de futuro.',
    iconName: 'Sparkles',
    accentColor: '#10b981'
  },
  {
    id: 'proximo-destino',
    stage: '08. PRÓXIMO DESTINO',
    title: 'Ecossistemas de Inovação & Soluções de Alto Impacto',
    category: 'futuro',
    period: 'Visão & Futuro',
    organization: 'Novos Caminhos',
    summary: 'Consolidação de empreendimentos, integração de IA a ecossistemas corporativos e públicos, desenvolvimento de produtos digitais escaláveis e pesquisa criativa contínua.',
    competencies: ['Liderança de Projetos Tecnológicos', 'Estratégia de Inovação Aberta', 'Marketplaces B2B', 'Produção Criativa & Áudio'],
    connectionToNext: 'A jornada é contínua: experiência constrói estratégia, estratégia gera inovação.',
    iconName: 'Compass',
    accentColor: '#34d399'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exercito-brasileiro',
    organization: 'Exército Brasileiro',
    area: '11ª Região Militar — Brasília / DF',
    role: 'Administração e Fiscalização de Contratos',
    period: 'Atuação na Administração Pública',
    location: 'Brasília, DF',
    category: 'public',
    badge: 'Administração Pública',
    highlight: 'Certificado no Estágio Setorial de Fiscalização de Contratos',
    responsibilities: [
      'Execução de atividades administrativas voltadas à gestão e monitoramento de contratos públicos.',
      'Fiscalização rigorosa da execução contratual, garantindo a fiel observância dos termos acordados e especificações técnicas.',
      'Acompanhamento de processos administrativos e documentação de conformidade institucional.',
      'Monitoramento de prazos, entregas e relatórios técnicos de prestação de serviços no âmbito da 11ª Região Militar.'
    ],
    competencies: [
      'Fiscalização de Contratos Administrativos',
      'Estágio Setorial de Fiscalização de Contratos',
      'Gestão de Processos Públicos',
      'Conformidade Legal & Rigor Documental'
    ]
  },
  {
    id: 'lottus-tecnologia',
    organization: 'Lottus Tecnologia em Informática LTDA',
    area: 'Contrato de Serviços Técnicos / Alocação ANATEL',
    role: 'Preposto de Contrato de Prestação de Serviços',
    period: 'Experiência em TI & Telecomunicações',
    location: 'Brasília, DF (ANATEL)',
    category: 'tech',
    badge: 'Tecnologia da Informação',
    highlight: 'Supervisão e controle de equipe de redes alocada na ANATEL',
    responsibilities: [
      'Atuação como preposto formal do contrato perante o órgão contratante (ANATEL).',
      'Supervisão, controle de escalas, produtividade e alinhamento operacional da equipe técnica de redes.',
      'Garantia do cumprimento dos níveis de serviço (SLAs) e interlocução direta com a fiscalização técnica.',
      'Elaboração de relatórios gerenciais e controle de demandas de infraestrutura e suporte.'
    ],
    competencies: [
      'Atuação como Preposto',
      'Gestão e Supervisão de Equipes Técnicas',
      'Contratos de Serviços Terceirizados em TI',
      'Mediação Institucional & SLAs'
    ]
  },
  {
    id: 'ellos-corretora',
    organization: 'Ellos Corretora',
    area: 'Departamento Comercial',
    role: 'Coordenação e Supervisão de Equipe de Vendas',
    period: 'Mercado de Seguros & Benefícios',
    location: 'Brasília, DF',
    category: 'commercial',
    badge: 'Seguros & Benefícios',
    highlight: 'Coordenação e supervisão de equipe especializada em planos de saúde',
    responsibilities: [
      'Coordenação e acompanhamento direto das atividades da equipe comercial de benefícios de saúde.',
      'Supervisão do funil de vendas, metas semanais e estratégias de prospecção corporativa.',
      'Treinamento e alinhamento de consultores sobre produtos e regulamentações do mercado de saúde suplementar.',
      'Desenvolvimento de abordagens estratégicas para atendimento a Pequenas e Médias Empresas (PMEs).'
    ],
    competencies: [
      'Coordenação de Vendas',
      'Planos de Saúde Corporativos (PMEs)',
      'Gestão de Metas e Indicadores',
      'Desenvolvimento de Consultores'
    ]
  },
  {
    id: 'grupo-afinidade',
    organization: 'Grupo Afinidade',
    area: 'Departamento Comercial',
    role: 'Administração de Carteira de Clientes',
    period: 'Mercado de Seguros & Benefícios',
    location: 'Brasília, DF',
    category: 'commercial',
    badge: 'Gestão de Carteira',
    highlight: 'Gestão e retenção de carteira de benefícios de saúde empresarial',
    responsibilities: [
      'Administração e fidelização de carteira ativa de clientes empresariais de planos de saúde.',
      'Atendimento consultivo no pós-venda, reajustes, inclusões e adequações de planos às necessidades dos clientes.',
      'Mapeamento de oportunidades de expansão de cobertura e novos contratos corporativos no Distrito Federal.'
    ],
    competencies: [
      'Administração de Carteira de Clientes',
      'Relacionamento B2B & Pós-Venda',
      'Negociação de Benefícios Corporativos',
      'Retenção e Fidelização de Contratos'
    ]
  },
  {
    id: 'esparta-seguranca',
    organization: 'Esparta Segurança Eletrônica',
    area: 'Departamento Administrativo / Operacional',
    role: 'Atuação Administrativa e Comercial',
    period: 'Gestão Operacional',
    location: 'Brasília, DF',
    category: 'admin',
    badge: 'Gestão Administrativa',
    highlight: 'Operação integrada com sistema Microsiga (ERP) e rotinas administrativas',
    responsibilities: [
      'Elaboração e acompanhamento detalhado de propostas comerciais de segurança eletrônica.',
      'Controle e atualização de planilhas eletrônicas de controle financeiro e operacional.',
      'Gestão física e contábil de estoque de equipamentos e insumos.',
      'Emissão e controle de notas fiscais, conferência e rotinas administrativas no sistema Microsiga.',
      'Atendimento e relacionamento com clientes para suporte a propostas e faturamento.'
    ],
    competencies: [
      'Sistema ERP Microsiga',
      'Controle de Estoque e Notas Fiscais',
      'Elaboração de Propostas Comerciais',
      'Planilhas Eletrônicas Avançadas'
    ]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'upis-admin',
    degree: 'Graduação em Administração de Empresas',
    institution: 'UPIS — União Pioneira de Integração Social',
    status: 'Graduado',
    type: 'academic',
    details: 'Formação superior focada em planejamento estratégico, gestão organizacional, finanças, processos e tomada de decisão gerencial.'
  },
  {
    id: 'funenseg-seguros',
    degree: 'Formação Profissional em Seguros',
    institution: 'FUNENSEG / SUSEP',
    status: 'Certificado',
    type: 'professional',
    details: 'Habilitação profissional e técnica no mercado segurador nacional, com domínio em regulação SUSEP, estruturas de apólices e benefícios de saúde.'
  },
  {
    id: 'eb-fiscalizacao',
    degree: 'Estágio Setorial de Fiscalização de Contratos',
    institution: 'Exército Brasileiro — 11ª Região Militar',
    status: 'Certificado',
    type: 'professional',
    details: 'Capacitação específica para agentes da administração em conformidade, fiscalização e acompanhamento de contratos administrativos públicos.'
  },
  {
    id: 'sebrae-vendas',
    degree: 'Como Vender Mais e Melhor',
    institution: 'SEBRAE',
    status: 'Concluído',
    type: 'course',
    details: 'Técnicas comerciais, abordagem consultiva, planejamento de vendas e fidelização de clientes.'
  },
  {
    id: 'sebrae-financeiro',
    degree: 'Análise e Planejamento Financeiro',
    institution: 'SEBRAE',
    status: 'Concluído',
    type: 'course',
    details: 'Estruturação de fluxo de caixa, análise de indicadores financeiros e sustentabilidade de negócios.'
  },
  {
    id: 'itil-bradesco',
    degree: 'Modelos de Melhores Práticas ITIL',
    institution: 'Fundação Bradesco',
    status: 'Concluído',
    type: 'course',
    details: 'Governança de TI, gestão de serviços, ciclo de vida de serviços e alinhamento de tecnologia com negócios.'
  },
  {
    id: 'informatica',
    degree: 'Informática e Ferramentas Digitais',
    institution: 'Formação Complementar',
    status: 'Concluído',
    type: 'course',
    details: 'Domínio de ferramentas de produtividade, planilhas avançadas, sistemas corporativos e interfaces digitais.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'gestao',
    name: 'GESTÃO & ADMINISTRAÇÃO',
    iconName: 'Briefcase',
    description: 'Capacidade analítica e operacional para conduzir processos, organizar rotinas e garantir conformidade.',
    skills: [
      {
        name: 'Administração de Empresas',
        description: 'Visão sistêmica organizacional, gestão de recursos, controle orçamentário e desenho de rotinas.',
        applications: ['Diagnóstico Organizacional', 'Desenho de Processos', 'Rotinas Operacionais'],
        tag: 'Graduação UPIS'
      },
      {
        name: 'Gestão e Fiscalização de Contratos',
        description: 'Acompanhamento rigoroso de cláusulas, verificação de conformidade, prazos e controle em órgãos públicos.',
        applications: ['Fiscalização Setorial EB', 'Acompanhamento de SLAs', 'Conformidade Administrativa'],
        tag: 'Setor Público & Privado'
      },
      {
        name: 'Planejamento e Organização',
        description: 'Estruturação de fluxogramas, cronogramas operacionais e planos de ação semanais.',
        applications: ['Planos Semanais', 'Cronogramas', 'Otimização de Rotinas'],
        tag: 'Operacional & Tático'
      },
      {
        name: 'Sistemas Corporativos (ERP)',
        description: 'Operação de sistemas integrados de gestão (ex: Microsiga) para controle de estoque, faturamento e NF.',
        applications: ['Microsiga', 'Controle de Faturamento', 'Gestão de Estoque'],
        tag: 'Sistemas ERP'
      }
    ]
  },
  {
    id: 'negocios',
    name: 'NEGÓCIOS & SEGUROS',
    iconName: 'TrendingUp',
    description: 'Expertise no mercado de benefícios e seguros, com foco em PMEs no Distrito Federal e liderança de equipe.',
    skills: [
      {
        name: 'Mercado de Seguros & Planos de Saúde',
        description: 'Conhecimento aprofundado do mercado de saúde suplementar e benefícios corporativos regulados pela SUSEP/ANS.',
        applications: ['Planos Corporativos', 'Regulamentação SUSEP', 'Adequação de Coberturas'],
        tag: 'FUNENSEG / SUSEP'
      },
      {
        name: 'Atendimento e Foco em PMEs (DF)',
        description: 'Consultoria direcionada para pequenas e médias empresas do Distrito Federal na escolha de benefícios.',
        applications: ['Diagnóstico de PMEs', 'Propostas Customizadas', 'Negociação B2B'],
        tag: 'Mercado DF'
      },
      {
        name: 'Supervisão e Coordenação Comercial',
        description: 'Liderança de consultores de vendas, alinhamento de metas, treinamento de produtos e acompanhamento de funil.',
        applications: ['Supervisão de Equipe', 'Metas Comerciais', 'Capacitação Comercial'],
        tag: 'Liderança Comercial'
      },
      {
        name: 'Administração de Carteira & Prospecção',
        description: 'Manutenção de relacionamento contínuo com clientes empresariais, retenção e expansão de contratos.',
        applications: ['Prospecção Ativa', 'Retenção de Contratos', 'Pós-Venda Consultivo'],
        tag: 'Relacionamento B2B'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'MARKETING DIGITAL & AQUISIÇÃO',
    iconName: 'Target',
    description: 'Estratégias de atração de oportunidades e estruturação de funis integrados de geração de demanda.',
    skills: [
      {
        name: 'Tráfego Pago (Meta Lead Ads)',
        description: 'Planejamento e gestão de campanhas de captação de leads qualificados via Facebook Ads e Instagram Ads.',
        applications: ['Formulários Instantâneos', 'Segmentação B2B', 'Otimização de Custo por Lead'],
        tag: 'Facebook & Instagram'
      },
      {
        name: 'Geração e Qualificação de Leads',
        description: 'Estruturação do fluxo de nutrição e filtragem de contatos para abordagem comercial assertiva.',
        applications: ['Filtros de Qualificação', 'Scripts de Abordagem', 'Mapeamento de Interesse'],
        tag: 'Funil de Vendas'
      },
      {
        name: 'Planejamento de Social Media & Conteúdo',
        description: 'Definição de posicionamento, linha editorial e comunicação digital com autoridade e clareza.',
        applications: ['Posicionamento de Marca', 'Planejamento Editorial', 'Comunicação Visual'],
        tag: 'Estratégia Digital'
      },
      {
        name: 'Funil Estratégico Integrado',
        description: 'Alinhamento completo do ciclo: Planejamento → Campanha → Lead → Contato → Oportunidade.',
        applications: ['Automação de Contatos', 'Mapeamento de Gargalos', 'Taxas de Conversão'],
        tag: 'Processo Comercial'
      }
    ]
  },
  {
    id: 'tecnologia',
    name: 'TECNOLOGIA & PLATAFORMAS',
    iconName: 'Cpu',
    description: 'Aplicação de tecnologia, governança de serviços e concepção de plataformas para solucionar gargalos reais.',
    skills: [
      {
        name: 'Supervisão de Contratos de TI',
        description: 'Experiência como preposto coordenando equipe de suporte e redes em ambiente de telecomunicações (ANATEL).',
        applications: ['Preposto Técnico', 'Controle de SLAs', 'Governança Operacional'],
        tag: 'ANATEL / Lottus'
      },
      {
        name: 'Melhores Práticas ITIL',
        description: 'Compreensão de gestão de serviços de tecnologia da informação, catálogo de serviços e incidentes.',
        applications: ['Gestão de Serviços', 'Ciclo de Vida de TI', 'Melhoria Contínua'],
        tag: 'Fundação Bradesco'
      },
      {
        name: 'Concepção e Arquitetura de Soluções',
        description: 'Estruturação conceitual de plataformas web, marketplaces B2B e sistemas de análise documental.',
        applications: ['Mapeamento de Requisitos', 'Fluxo de Usuário', 'Prototipação de Produtos'],
        tag: 'Inovação Digital'
      }
    ]
  },
  {
    id: 'ia',
    name: 'INTELIGÊNCIA ARTIFICIAL APLICADA',
    iconName: 'Sparkles',
    description: 'Uso da IA como amplificador cognitivo em produtividade, análise de contratos, síntese e automação de processos.',
    skills: [
      {
        name: 'IA como Ferramenta de Produtividade',
        description: 'Aceleração de redação estratégica, estruturação de planos de negócios e automação de rotinas diárias.',
        applications: ['Elaboração de Planos', 'Automação de Textos', 'Aceleração de Pesquisa'],
        tag: 'Produtividade'
      },
      {
        name: 'Análise Inteligente de Documentos & Editais',
        description: 'Aplicação de modelos de linguagem para extração de requisitos, síntese de cláusulas e conformidade de editais.',
        applications: ['Triagem de Editais', 'Resumo de Cláusulas', 'Mapeamento de Riscos'],
        tag: 'Licitações & Editais'
      },
      {
        name: 'IA Criativa & Produção de Áudio',
        description: 'Exploração de ferramentas de geração de arranjos, harmonias e design sonoro para composições autorais.',
        applications: ['Composição Assistida', 'Processamento de Áudio', 'Exploração Harmônica'],
        tag: 'Laboratório Criativo'
      }
    ]
  },
  {
    id: 'estrategia',
    name: 'ESTRATÉGIA & PLANEJAMENTO',
    iconName: 'Compass',
    description: 'Capacidade de conectar diferentes áreas do saber para resolver problemas complexos com pragmatismo.',
    skills: [
      {
        name: 'Planos de Ação e Metodologia de Execução',
        description: 'Construção de cronogramas semanais de prospecção e execução orientados a metas claras e monitoramento.',
        applications: ['Planos Semanais', 'Matriz 5W2H', 'Acompanhamento de Resultados'],
        tag: 'Execução Tática'
      },
      {
        name: 'Estruturação de Business Plan',
        description: 'Modelagem de novos negócios, proposta de valor, viabilidade econômica e canais de distribuição.',
        applications: ['Modelagem Canvas', 'Validação de Hipóteses', 'Planejamento de Lançamento'],
        tag: 'Empreendedorismo'
      },
      {
        name: 'Resolução Pragmática de Problemas',
        description: 'Abordagem multidisciplinar para analisar gargalos operacionais e implementar melhorias diretas.',
        applications: ['Análise de Causa Raiz', 'Otimização de Fluxos', 'Conexão Multidisciplinar'],
        tag: 'Pensamento Crítico'
      }
    ]
  }
];

export const STRATEGIC_PROJECTS: ProjectItem[] = [
  {
    id: 'transicao-carreira',
    title: 'Plataforma de Transição de Carreira',
    subtitle: 'Militares Temporários → Mercado Corporativo Civil',
    category: 'Inovação Social & Empregabilidade',
    concept: 'Sistema voltado para militares temporários em Brasília no último ano de serviço militar ativo, capacitando e conectando esses profissionais com as demandas reais do mercado corporativo civil.',
    targetAudience: 'Militares temporários (Oficiais e Sargentos R/2) do Distrito Federal em processo de desmobilização e empresas privadas em busca de profissionais com disciplina, liderança e rigor operacional.',
    objective: 'CONVERTER EXPERIÊNCIAS E COMPETÊNCIAS MILITARES EM VALOR RECONHECÍVEL E MENSURÁVEL PARA O MERCADO CORPORATIVO CIVIL.',
    stages: [
      {
        title: '01. Experiência Militar',
        description: 'Mapeamento das funções exercidas em quartéis, comandos, logística, administração e liderança de tropas.'
      },
      {
        title: '02. Mapeamento de Competências',
        description: 'Identificação de soft skills e hard skills: resiliência, liderança, conformidade, hierarquia, gestão de suprimentos e pontualidade.'
      },
      {
        title: '03. Tradução para Linguagem Corporativa',
        description: 'Transposição de termos e funções militares para equivalentes no mercado civil (ex: Logística militar → Supply Chain / Operações).'
      },
      {
        title: '04. Desenvolvimento Profissional',
        description: 'Capacitação complementar em ferramentas corporativas, entrevistas, networking estratégico e cultura empresarial privada.'
      },
      {
        title: '05. Conexão com o Mercado de Trabalho',
        description: 'Apresentação de perfis validados para empresas parceiras com vagas abertas em gestão, operações e conformidade.'
      },
      {
        title: '06. Nova Carreira Consolidada',
        description: 'Acompanhamento do profissional nos primeiros meses de integração no ambiente corporativo civil.'
      }
    ],
    features: [
      'Diagnóstico individual de competências militares acumuladas',
      'Módulo de tradução semântica de currículo (Militar → Corporativo)',
      'Trilhas de capacitação em ferramentas digitais e negócios civis',
      'Mural de vagas com empresas parceiras de Brasília e região',
      'Painel de mentoria com veteranos já estabelecidos no mercado corporativo'
    ],
    technologies: [
      'Arquitetura Web Moderna (React / TypeScript)',
      'Modelos de IA para Análise Semântica de Currículos',
      'Banco de Dados Relacional / Nuvem',
      'Painéis de Gestão de Vagas e Candidatos'
    ],
    status: 'Em fase de planejamento conceitual e estruturação do modelo de negócio',
    results: 'Estruturação metodológica do fluxo de transição e validação do problema junto ao público militar de Brasília.',
    urlPlaceholder: '[EM DESENVOLVIMENTO]',
    isEditable: true,
    userNotes: 'Projeto de alto impacto social focado no contingente de militares temporários do Distrito Federal.'
  },
  {
    id: 'licitacoes-contratos',
    title: 'Inteligência em Licitações e Contratos',
    subtitle: 'Análise Inteligente de Editais & Integração B2B',
    category: 'GovTech & B2B Marketplace',
    concept: 'Plataforma dedicada à análise inteligente de editais de licitação e à integração estratégica entre fornecedores de produtos/serviços e empresas licitantes que disputam certames públicos.',
    targetAudience: 'Empresas licitantes que participam de compras governamentais, fornecedores de insumos e produtos para o setor público e gestores de contratos.',
    objective: 'OTIMIZAR A ANÁLISE DE EDITAIS COMPLEXOS COM IA E CONECTAR EMPRESAS LICITANTES A FORNECEDORES COMPETITIVOS EM TEMPO RECORDE.',
    stages: [
      {
        title: '01. Edital Público',
        description: 'Captura e ingestão de editais publicados nos diários oficiais e portais de compras públicas.'
      },
      {
        title: '02. Análise Documental Automatizada',
        description: 'Processamento do edital para extração de requisitos habilitatórios, prazos, penalidades e planilhas orçamentárias.'
      },
      {
        title: '03. Inteligência & Filtragem de Riscos',
        description: 'Geração de relatórios executivos com alertas sobre cláusulas críticas, documentação exigida e margem de viabilidade.'
      },
      {
        title: '04. Identificação de Oportunidades',
        description: 'Matching entre as exigências do edital e o portfólio de fornecedores cadastrados na base.'
      },
      {
        title: '05. Conexão Fornecedor ↔ Licitante',
        description: 'Marketplace integrado para cotações rápidas e formação de consórcios/parcerias estratégicas para o certame.'
      },
      {
        title: '06. Gestão da Execução do Contrato',
        description: 'Acompanhamento do ciclo pós-homologação, controle de entregas, fiscalização e notas fiscais.'
      }
    ],
    features: [
      'Parser inteligente de editais e termos de referência em PDF',
      'Matriz de risco e checklist automatizado de habilitação jurídica e fiscal',
      'Módulo B2B de cotações automáticas junto a fornecedores homologados',
      'Dashboard de monitoramento de prazos e impugnações de certames',
      'Módulo de apoio à fiscalização e gestão contratual'
    ],
    technologies: [
      'Engenharia de Prompt & Processamento de Linguagem Natural (NLP)',
      'Plataforma Web Responsiva & Painéis de Indicadores',
      'Mecanismos de Busca e Indexação Documental',
      'API de Integração com Portais de Compras'
    ],
    status: 'Em fase de pesquisa aplicada, modelagem de dados e desenho de interfaces',
    results: 'Mapeamento completo dos gargalos na análise de editais e validação do fluxo operacional.',
    urlPlaceholder: '[EM DESENVOLVIMENTO]',
    isEditable: true,
    userNotes: 'Combinação da vivência real em fiscalização de contratos na 11ª RM com inteligência de dados.'
  }
];

export const AUDIO_EXPERIMENTS: AudioExperiment[] = [
  {
    id: 'audio-01',
    title: 'Harmonia & Estrutura',
    type: 'composition',
    description: 'Exploração de progressões harmônicas em modo dórico com base em sintetizadores atmosféricos.',
    bpm: 88,
    scale: 'C Dórico (C, D, Eb, F, G, A, Bb)',
    frequencies: [261.63, 293.66, 311.13, 349.23, 392.00, 440.00, 466.16],
    status: 'Em Composição'
  },
  {
    id: 'audio-02',
    title: 'Frequência Estratégica',
    type: 'arrangement',
    description: 'Arranjo polifônico que conecta camadas orgânicas de cordas a pulsos eletrônicos minimalistas.',
    bpm: 110,
    scale: 'A Menor Pentatônica (A, C, D, E, G)',
    frequencies: [220.00, 261.63, 293.66, 329.63, 392.00, 440.00],
    status: 'Arranjo Finalizado'
  },
  {
    id: 'audio-03',
    title: 'Síntese & IA Sonora',
    type: 'ai_synthesis',
    description: 'Experimentação com modelos generativos de áudio para geração de texturas sonoras e ambiências imersivas.',
    bpm: 96,
    scale: 'F Maior Lídio (F, G, A, B, C, D, E)',
    frequencies: [174.61, 196.00, 220.00, 246.94, 261.63, 293.66, 329.63],
    status: 'Laboratório Experimental'
  }
];

export const NOW_ITEMS: NowItem[] = [
  {
    id: 'now-01',
    category: 'FAZENDO',
    title: 'Refinamento dos Modelos de Negócio das Plataformas',
    description: 'Detalhamento do fluxo de monetização e proposta de valor das plataformas de Transição de Carreira e Inteligência em Licitações.',
    tags: ['Business Plan', 'Modelagem', 'Validação']
  },
  {
    id: 'now-02',
    category: 'APRENDENDO',
    title: 'Aprofundamento em Engenharia de Prompt e IA Aplicada',
    description: 'Estudo contínuo de agentes autônomos, modelos de raciocínio avançado e arquitetura de automações aplicadas a processos e análises documentais.',
    tags: ['Inteligência Artificial', 'Automação', 'NLP']
  },
  {
    id: 'now-03',
    category: 'CONSTRUINDO',
    title: 'Protótipos Interativos e Mapeamento de Requisitos',
    description: 'Construção de fluxos visuais, arquitetura de informação e especificações funcionais para as soluções de tecnologia.',
    tags: ['UX/UI', 'Protótipos', 'Documentação']
  },
  {
    id: 'now-04',
    category: 'EXPLORANDO',
    title: 'Pesquisa Criativa em Composição Sonora & IA',
    description: 'Exploração de novos softwares de síntese sonora, arranjos musicais autorais e ferramentas de áudio assistidas por inteligência artificial.',
    tags: ['Música Autoral', 'Síntese Sonora', 'Criatividade']
  },
  {
    id: 'now-05',
    category: 'PRÓXIMO DESTINO',
    title: 'Lançamento de MVPs e Parcerias Estratégicas em Brasília',
    description: 'Validação de testes-piloto das plataformas com os primeiros usuários e consolidação de conexões corporativas no Distrito Federal.',
    tags: ['MVP', 'Parcerias', 'Brasília']
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Experiência Constrói Rigor',
    concept: 'EXPERIÊNCIA',
    description: 'A atuação prática no mercado de seguros, na administração pública e na supervisão de equipes ensina a lidar com variáveis reais, normas regulatórias e necessidades humanas autênticas.',
    color: 'from-emerald-600/30 to-emerald-900/10'
  },
  {
    title: 'Planejamento Define o Rumo',
    concept: 'PLANEJAMENTO',
    description: 'Nenhum resultado consistente nasce do acaso. Planos de ação estruturados, processos claros e monitoramento contínuo transformam metas abstratas em realizações concretas.',
    color: 'from-teal-600/30 to-teal-900/10'
  },
  {
    title: 'Tecnologia Amplia a Capacidade',
    concept: 'TECNOLOGIA & IA',
    description: 'A tecnologia e a inteligência artificial não substituem a bagagem humana; elas potencializam a velocidade de análise, organizam dados complexos e abrem novas possibilidades.',
    color: 'from-sky-600/30 to-sky-900/10'
  },
  {
    title: 'Criatividade Gera Soluções Únicas',
    concept: 'CRIATIVIDADE',
    description: 'A sensibilidade artística e musical estimula o pensamento lateral, permitindo enxergar conexões inusitadas entre áreas aparentemente distintas e criar produtos verdadeiramente inovadores.',
    color: 'from-indigo-600/30 to-indigo-900/10'
  }
];

export const PROFESSIONAL_MORPHS = [
  {
    id: 'morph-1',
    from: 'PLANILHA MANUAL',
    fromDesc: 'Linhas estáticas de dados, conferência individual e risco de erros de digitação.',
    to: 'DASHBOARD INTELIGENTE',
    toDesc: 'Métricas em tempo real, visualização de tendências e alertas preventivos automatizados.',
    category: 'Gestão de Dados'
  },
  {
    id: 'morph-2',
    from: 'DOCUMENTO / CONTRATO FÍSICO',
    fromDesc: 'Pilhas de processos impressos, tramitação morosa e consulta manual de cláusulas.',
    to: 'FLUXO DIGITAL & AUDITORIA IA',
    toDesc: 'Análise semântica de conformidade, extração automática de prazos e governança em nuvem.',
    category: 'Administração Pública'
  },
  {
    id: 'morph-3',
    from: 'CARTÃO DE VISITA & PROSPECÇÃO FRIA',
    fromDesc: 'Abordagens genéricas, perda de contatos e falta de métricas de engajamento.',
    to: 'PERFIL DIGITAL & FUNIL QUALIFICADO',
    toDesc: 'Meta Lead Ads segmentados, formulários dinâmicos e conexão direta com decisores de PMEs.',
    category: 'Marketing & Vendas'
  },
  {
    id: 'morph-4',
    from: 'FUNIL DE VENDAS LINEAR',
    fromDesc: 'Etapas soltas sem integração entre marketing, vendas e pós-venda corporativo.',
    to: 'PIPELINE ESTRATÉGICO INTEGRADO',
    toDesc: 'Planejamento → Campanha → Lead → Contato → Oportunidade → Retenção com fidelização.',
    category: 'Estratégia Comercial'
  },
  {
    id: 'morph-5',
    from: 'ESTRADA PROFISSIONAL LINEAR',
    fromDesc: 'Carreira vista como sequência isolada de empregos desconectados.',
    to: 'ECOSSISTEMA DE COMPETÊNCIAS',
    toDesc: 'Cada experiência fortalece a seguinte: Administração + Seguros + Contratos + TI + IA = Soluções.',
    category: 'Trajetória Profissional'
  }
];
