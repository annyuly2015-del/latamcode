export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
}

export interface TechnologyItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'others';
  description: string;
  iconName: string;
  useCase: string; // How it's applied inside enterprise environments
}

export interface WorkStepItem {
  stepNumber: number;
  title: string;
  duration: string;
  shortDescription: string;
  tasks: string[];
}

export interface DifferentialItem {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
  iconName: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  results: string[];
  technologies: string[];
  scope: string;
  timeline: string;
}

export interface LeadInteraction {
  id: string;
  createdAt: string;
  author: string;
  note: string;
}

export interface Lead {
  id: string;
  createdAt: string;
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  pais: string;
  interes: string;
  alcance: string;
  presupuesto: string;
  status: 'nuevo' | 'negociacion' | 'ganado' | 'perdido';
  interacciones: LeadInteraction[];
}

