export type TabId = 
  | 'inicio'
  | 'trajetoria'
  | 'experiencia'
  | 'competencias'
  | 'tecnologia-ia'
  | 'projetos'
  | 'laboratorio'
  | 'agora'
  | 'contato';

export type SectionId = TabId;

export type ActId = 'ato-1' | 'ato-2' | 'ato-3';

export interface JourneyAct {
  id: ActId;
  number: string;
  name: string;
  subtitle: string;
  message: string;
  tabIds: TabId[];
  color: string;
  badge: string;
}

export interface RouteStep {
  id: string;
  stepNumber: string;
  label: string;
  tabId: TabId;
  actId: ActId;
}

export interface CareerMilestone {
  id: string;
  stage: string;
  title: string;
  category: 'origem' | 'experiencia' | 'transformacao' | 'estrategia' | 'inovacao' | 'futuro';
  period: string;
  organization?: string;
  role?: string;
  summary: string;
  competencies: string[];
  connectionToNext: string;
  iconName: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  area: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  competencies: string[];
  highlight?: string;
  badge?: string;
  category: 'public' | 'tech' | 'commercial' | 'admin';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
  period?: string;
  details?: string;
  type: 'academic' | 'professional' | 'course';
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    description: string;
    applications: string[];
    tag: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  concept: string;
  targetAudience: string;
  objective: string;
  stages: {
    title: string;
    description: string;
  }[];
  features: string[];
  technologies: string[];
  status: string;
  results: string;
  urlPlaceholder?: string;
  isEditable?: boolean;
  userNotes?: string;
}

export interface AudioExperiment {
  id: string;
  title: string;
  type: 'composition' | 'arrangement' | 'ai_synthesis';
  description: string;
  bpm: number;
  scale: string;
  frequencies: number[];
  status: string;
}

export interface NowItem {
  id: string;
  category: 'FAZENDO' | 'APRENDENDO' | 'CONSTRUINDO' | 'EXPLORANDO' | 'PRÓXIMO DESTINO';
  title: string;
  description: string;
  tags: string[];
}

export type ScreensaverMode = 'data-flow' | 'strategic-path' | 'digital-network' | 'sound-wave' | 'city-ideas';
