import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  Settings, 
  Check, 
  Users, 
  Terminal, 
  Workflow, 
  Network, 
  Layout, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Search,
  BookOpen,
  User,
  FolderLock
} from 'lucide-react';

interface FeaturedCaseProps {
  onOpenContact: (interestId?: string) => void;
}

interface ProjectCase {
  id: string;
  label: string;
  name: string;
  description: string;
  technologies: string[];
  components: string[];
  accentColor: string;
  glowAccent: string;
}

export default function FeaturedCase({ onOpenContact }: FeaturedCaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const projects: ProjectCase[] = [
    {
      id: 'nexus-axion',
      label: 'PLATAFORMA FINANCIERA COLABORATIVA',
      name: 'Nexus Axion',
      description: 'Ecosistema digital diseñado para administrar comunidades financieras, automatizar procesos operativos y centralizar la interacción entre usuarios, administradores y equipos de trabajo.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      components: [
        'Portal Nexer',
        'Gestión de pagos',
        'Estado de cuenta',
        'Educación financiera',
        'Actas y reuniones',
        'Gestión de equipos',
        'Beneficiarios',
        'Panel administrativo',
        'Sistema de solicitudes'
      ],
      accentColor: '#10b981', // Emerald green 
      glowAccent: 'rgba(16, 185, 129, 0.2)'
    },
    {
      id: 'visionate-crypto',
      label: 'FINTECH & KYC',
      name: 'Visionate Crypto',
      description: 'Plataforma orientada al onboarding progresivo de usuarios y validación escalonada mediante procesos de identificación digital y monitoreo operativo.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      components: [
        'Splash',
        'Registro',
        'Calculadora',
        'Cuenta bancaria',
        'Dashboard',
        'Verificación KYC',
        'Gestión documental'
      ],
      accentColor: '#06b6d4', // Cyan
      glowAccent: 'rgba(6, 182, 212, 0.2)'
    },
    {
      id: 'vitalia',
      label: 'SALUD DIGITAL',
      name: 'Vitalia',
      description: 'Portal de servicios médicos diseñado para optimizar la experiencia digital de pacientes y profesionales de la salud.',
      technologies: ['React', 'Tailwind'],
      components: [
        'Especialidades',
        'Agenda médica',
        'Gestión de citas',
        'Turnos',
        'Resultados',
        'Portal paciente'
      ],
      accentColor: '#8b5cf6', // Violet
      glowAccent: 'rgba(139, 92, 246, 0.2)'
    },
    {
      id: 'arquitecturas-personalizadas',
      label: 'DESARROLLO EMPRESARIAL',
      name: 'Arquitecturas Personalizadas',
      description: 'Diseñamos soluciones completamente adaptadas a procesos únicos de negocio, integraciones complejas y operaciones de alta criticidad.',
      technologies: ['Según requerimientos'],
      components: [
        'ERP',
        'CRM',
        'Integraciones API',
        'Automatización',
        'Facturación',
        'Dashboards',
        'Analítica',
        'Portales corporativos'
      ],
      accentColor: '#f59e0b', // Amber
      glowAccent: 'rgba(245, 158, 11, 0.2)'
    }
  ];

  // Slow autoplay cycle
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 12000); // 12 seconds autoplay
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      touchStartX.current = null;
    }
  };

  const activeProject = projects[currentIndex];

  // Modern blueprint interactive flows
  const renderArchitectureMockup = (id: string, accentColor: string) => {
    switch (id) {
      case 'nexus-axion':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 text-left relative z-10 font-mono text-[11px] text-slate-300">
            {/* Header info */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">BLUEPRINT DE INTERCONEXIÓN</span>
            </div>

            {/* Vertical Flow Diagram using standard Framer Motion paths */}
            <div className="flex flex-col items-center w-full max-w-[320px] gap-6 relative py-4">
              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '260px' }}>
                <defs>
                  <linearGradient id="line-grad-emerald" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* 1 -> 2 */}
                <line x1="50%" y1="36" x2="50%" y2="76" stroke="url(#line-grad-emerald)" strokeWidth="1" strokeDasharray="3 3" />
                <motion.circle cx="50%" cy="36" r="3" fill="#10b981" animate={{ cy: [36, 76] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />

                {/* 2 -> 3 */}
                <line x1="50%" y1="112" x2="50%" y2="152" stroke="url(#line-grad-emerald)" strokeWidth="1" strokeDasharray="3 3" />
                <motion.circle cx="50%" cy="112" r="3" fill="#10b981" animate={{ cy: [112, 152] }} transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }} />

                {/* 3 -> 4 & 5 Branch */}
                {/* 3 to 4 */}
                <path d="M 160 188 L 100 188 L 100 228" fill="none" stroke="url(#line-grad-emerald)" strokeWidth="1" strokeDasharray="3 3" />
                <motion.circle r="2.5" fill="#10b981" animate={{ pathOffset: [0, 1], cy: [188, 188, 228], cx: [160, 100, 100] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} />

                {/* 3 to 5 */}
                <path d="M 160 188 L 220 188 L 220 228" fill="none" stroke="url(#line-grad-emerald)" strokeWidth="1" strokeDasharray="3 3" />
                <motion.circle r="2.5" fill="#10b981" animate={{ pathOffset: [0, 1], cy: [188, 188, 228], cx: [160, 220, 220] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} />
              </svg>

              {/* Node 1: Usuarios */}
              <div className="z-10 w-full flex justify-center">
                <div className="border border-white/10 bg-slate-950/90 rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-lg w-48 hover:border-emerald-500/40 hover:shadow-emerald-500/5 transition-all group">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[10px]">Usuarios</div>
                    <div className="text-[8px] text-slate-500">Clientes & Socios</div>
                  </div>
                </div>
              </div>

              {/* Node 2: Portal Nexer */}
              <div className="z-10 w-full flex justify-center">
                <div className="border border-white/10 bg-slate-950/90 rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-lg w-48 hover:border-emerald-500/40 hover:shadow-emerald-500/5 transition-all">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                    <Layout className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[10px]">Portal Nexer</div>
                    <div className="text-[8px] text-slate-500">Frontend React/JS</div>
                  </div>
                </div>
              </div>

              {/* Node 3: Servicios Laravel */}
              <div className="z-10 w-full flex justify-center">
                <div className="border border-white/10 bg-slate-950/90 rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-lg w-48 hover:border-emerald-500/45 hover:shadow-emerald-500/8 transition-all relative">
                  <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div className="p-1 rounded bg-emerald-500/15 text-emerald-400">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[10px]">Servicios Laravel</div>
                    <div className="text-[8px] text-slate-500">Core Backend / PHP</div>
                  </div>
                </div>
              </div>

              {/* Bottom Nodes row: SQL & Admin Console */}
              <div className="z-10 flex justify-between w-full h-[50px] relative px-1">
                {/* DB */}
                <div className="border border-white/10 bg-slate-950/90 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg w-36 hover:border-emerald-500/40 hover:shadow-emerald-500/5 transition-all">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                    <Database className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[9.5px]">Base de Datos</div>
                    <div className="text-[8px] text-slate-500 font-mono">MySQL Cluster</div>
                  </div>
                </div>

                {/* Admin console */}
                <div className="border border-white/10 bg-slate-950/90 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg w-36 hover:border-emerald-500/40 hover:shadow-emerald-500/5 transition-all">
                  <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                    <Settings className="w-3 h-3" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-[9.5px]">Panel Admin</div>
                    <div className="text-[8px] text-slate-500 font-mono">Control de Operaciones</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      case 'visionate-crypto':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 text-left relative z-10 font-mono text-[11px] text-slate-300">
            {/* Header info */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">FLUJO MULTI-NIVEL COMPLETO</span>
            </div>

            {/* Sequence line nodes */}
            <div className="flex flex-col w-full max-w-[280px] gap-3 pt-6 relative">
              {[
                { step: '01', label: 'Splash UI Entrada', desc: 'Pre-carga inteligente', icon: Layout },
                { step: '02', label: 'Registro Progresivo', desc: 'Validación celular y email', icon: Users },
                { step: '03', label: 'Cuenta Bancaria', desc: 'Asignación de cuentas', icon: Server },
                { step: '04', label: 'Módulo Operaciones', desc: 'Consistencia y saldos', icon: Activity },
                { step: '05', label: 'KYC Avanzado Inteligente', desc: 'Trigger automático de volumen', icon: FolderLock, active: true },
              ].map((item, idx, arr) => {
                const IconComp = item.icon;
                return (
                  <div className="relative flex items-center gap-3 w-full" key={idx}>
                    {/* Horizontal link line */}
                    {idx < arr.length - 1 && (
                      <div className="absolute left-6 top-7 w-[2px] h-[16px] bg-slate-800 z-0">
                        <motion.div 
                          className="w-full bg-cyan-400" 
                          animate={{ height: ['0%', '100%'] }} 
                          transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.3 }}
                        />
                      </div>
                    )}

                    {/* Step tag */}
                    <div className={`z-10 w-11 h-6 rounded-md border flex items-center justify-center font-mono text-[9px] font-bold ${
                      item.active 
                        ? 'border-cyan-400/40 bg-cyan-950/40 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.25)]' 
                        : 'border-white/10 bg-slate-950 text-slate-500'
                    }`}>
                      {item.step}
                    </div>

                    {/* Node UI box */}
                    <div className={`z-10 flex-1 border rounded-lg px-3 py-1.5 flex items-center gap-2.5 transition-all ${
                      item.active 
                        ? 'border-cyan-500/30 bg-slate-950/95 shadow-[0_4px_12px_rgba(0,0,0,0.4)]' 
                        : 'border-white/[0.05] bg-slate-950/20'
                    }`}>
                      <IconComp className={`w-3.5 h-3.5 ${item.active ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <div>
                        <div className={`text-[9.5px] font-bold ${item.active ? 'text-white' : 'text-slate-400'}`}>{item.label}</div>
                        <div className="text-[8px] text-slate-500 leading-none">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'vitalia':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 text-left relative z-10 font-mono text-[11px] text-slate-300">
            {/* Header info */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">SEQUENCE PIPELINE CLINIC</span>
            </div>

            {/* Sequence block pipeline */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] pt-8">
              {[
                { title: 'Especialidades', action: 'Buscador Experto SEO', bg: 'bg-purple-950/10', border: 'border-purple-500/10', text: 'text-purple-300' },
                { title: 'Agenda Médica', action: 'Sincronización Médicos', bg: 'bg-purple-950/10', border: 'border-purple-500/10', text: 'text-purple-300' },
                { title: 'Citas y Horarios', action: 'Calendario Reservaciones', bg: 'bg-purple-950/10', border: 'border-purple-500/10', text: 'text-purple-300' },
                { title: 'Resultados', action: 'Verificación de PDF', bg: 'bg-purple-950/10', border: 'border-purple-500/10', text: 'text-purple-300' },
              ].map((node, i) => (
                <div 
                  className={`border ${node.border} ${node.bg} p-3 rounded-xl flex flex-col justify-between h-[75px] hover:border-purple-400/30 transition-all shadow-md group`}
                  key={i}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[7.5px] text-slate-500 font-black uppercase">PIPELINE 0{i+1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400/40 group-hover:bg-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-extrabold text-white leading-tight uppercase">{node.title}</h5>
                    <p className="text-[8px] text-slate-550 truncate font-light mt-0.5">{node.action}</p>
                  </div>
                </div>
              ))}

              {/* Patient portal connection bottom bar */}
              <div className="col-span-2 border border-white/10 bg-slate-950/90 rounded-xl p-3 flex items-center justify-between hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase">Portal Paciente Integrado</span>
                </div>
                <span className="text-[8px] text-slate-500 font-bold uppercase">React Components</span>
              </div>
            </div>
          </div>
        );

      case 'arquitecturas-personalizadas':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 text-left relative z-10 font-mono text-[11px] text-slate-300">
            {/* Header info */}
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">CICLO DE INGENIERÍA</span>
            </div>

            {/* Stepped process flow showing custom architectures */}
            <div className="flex flex-col gap-2 w-full max-w-[280px] pt-8">
              {[
                { order: 'A', name: 'Análisis', desc: 'Identificar flujo y cuellos de botella' },
                { order: 'B', name: 'Arquitectura', desc: 'Diseñar blueprint y tecnologías' },
                { order: 'C', name: 'Desarrollo', desc: 'Ingeniería segura de código limpio' },
                { order: 'D', name: 'Integración', desc: 'Integrar sistemas preexistentes' },
                { order: 'E', name: 'Escalabilidad', desc: 'Optimizar servidores para crecimiento' },
              ].map((node, i) => (
                <div 
                  className="group flex items-center gap-3 border border-white/[0.03] bg-slate-950/30 p-2 rounded-xl hover:border-amber-500/20 hover:bg-slate-950/60 transition-all"
                  key={i}
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-[8.5px]">
                    {node.order}
                  </div>
                  <div>
                    <h6 className="text-[9.5px] font-extrabold text-white leading-none uppercase">{node.name}</h6>
                    <p className="text-[8px] text-slate-500 leading-none mt-1">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0
    })
  };

  return (
    <section 
      id="soluciones-desarrolladas" 
      className="relative py-24 bg-[#030712] border-t border-b border-white/5 overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Decorative technical grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25 pointer-events-none" />
      
      {/* Ambient gradient halos matching current slide color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] rounded-full blur-[130px] opacity-25 pointer-events-none transition-all duration-1000" 
        style={{
          background: `radial-gradient(circle, ${activeProject.glowAccent} 0%, transparent 75%)`
        }}
      />
      
      {/* Laser discrete vector line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-72 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header aligned strictly left */}
        <div className="text-left max-w-4xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[9px] font-extrabold tracking-widest text-cyan-400 uppercase">
              SHOWROOM TECNOLÓGICO
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            ARQUITECTURAS QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400 filter drop-shadow-[0_2px_10px_rgba(34,211,238,0.15)]">CONSTRUIMOS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            Cada solución requiere una combinación distinta de tecnologías, procesos y componentes. Descubre cómo diseñamos plataformas empresariales escalables para diferentes industrias.
          </p>
        </div>

        {/* INTERACTIVE SHOWROOM SLIDER */}
        <div className="relative">
          
          {/* Main Card */}
          <div className="relative min-h-[580px] lg:min-h-[490px] flex items-stretch">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-2xl overflow-hidden items-stretch relative"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px -5px ${activeProject.glowAccent}`
                }}
              >
                {/* Visual top indicator colored based on the project's accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300" 
                  style={{ backgroundColor: activeProject.accentColor }}
                />

                {/* Left pane: Architectural description and components checklist */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 text-left flex flex-col justify-between space-y-6 lg:space-y-0">
                  
                  {/* Category & Name */}
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono tracking-widest font-black uppercase text-slate-500 block">
                      {activeProject.label}
                    </span>
                    
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                      {activeProject.name}
                    </h3>

                    <p className="text-[13px] sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Components developed checkbox list */}
                  <div className="py-5 border-t border-b border-white/[0.06] my-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black block mb-3.5">
                      COMPONENTES DESARROLLADOS:
                    </span>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {activeProject.components.map((comp, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                        >
                          <div 
                            className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-colors bg-slate-900"
                            style={{ 
                              borderColor: `${activeProject.accentColor}30`,
                              backgroundColor: `${activeProject.accentColor}06`
                            }}
                          >
                            <Check 
                              className="w-3 h-3" 
                              style={{ color: activeProject.accentColor }} 
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-[11px] font-medium leading-none tracking-tight">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech layout + Contact Action button */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 pt-3">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-slate-500 font-black uppercase block tracking-widest">
                        TECNOLOGÍAS CORE:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.technologies.map(tech => (
                          <span 
                            key={tech} 
                            className="text-[10px] font-mono font-bold rounded-md px-2.5 py-1 bg-slate-900 border border-white/5 text-slate-450 hover:border-slate-800 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenContact(activeProject.id)}
                      className="group cursor-pointer py-3.5 px-6 rounded-2xl font-display text-[11px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transform transition-all duration-300 text-white bg-slate-900 border border-white/10 hover:border-white/20 hover:scale-[1.03] shadow-lg shrink-0"
                    >
                      <span>DESPLEGAR DISEÑO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* Right cell: Architecture blueprint flow visual widget */}
                <div className="lg:col-span-5 bg-slate-950/45 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/[0.06] relative overflow-hidden min-h-[300px] lg:min-h-auto p-4 md:p-6">
                  {/* Fine design grid structure inside diagram pane */}
                  <div className="absolute inset-x-0 inset-y-0 bg-[linear-gradient(rgba(255,255,255,0.001)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.001)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
                  
                  {/* Subtle blur accent */}
                  <div 
                    className="absolute inset-[15%] rounded-full blur-[55px] opacity-25 pointer-events-none transition-all duration-500" 
                    style={{ backgroundColor: activeProject.accentColor }}
                  />

                  {renderArchitectureMockup(activeProject.id, activeProject.accentColor)}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <div className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-16 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-xl"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-16 -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-xl"
              title="Siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-7' 
                    : 'w-1.5 hover:w-3.5'
                }`}
                style={{
                  backgroundColor: idx === currentIndex ? activeProject.accentColor : 'rgba(255, 255, 255, 0.15)'
                }}
                title={`Ver ${proj.name}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
