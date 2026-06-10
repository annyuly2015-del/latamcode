import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  Activity, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Workflow, 
  Settings,
  Sparkles
} from 'lucide-react';

interface Phase {
  id: string;
  stepNumber: string;
  shortLabel: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  glowAccent: string;
  textColor: string;
  borderColor: string;
  entregables: string[];
  resultado: string;
  tecnologias: string[];
}

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const phases: Phase[] = [
    {
      id: 'descubrimiento',
      stepNumber: '01',
      shortLabel: 'DSC',
      title: 'Descubrimiento',
      description: 'Analizamos el negocio, identificamos objetivos, procesos y necesidades para construir una estrategia técnica sólida.',
      icon: Search,
      accentColor: '#06b6d4', // Cyan eléctrico
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      glowAccent: 'rgba(6, 182, 212, 0.25)',
      entregables: [
        'Levantamiento de requerimientos',
        'Definición de alcance de arquitectura',
        'Roadmap inicial de ingeniería',
        'Estimación y viabilidad técnica'
      ],
      resultado: 'Visión clara, estructurada y documentada del proyecto.',
      tecnologias: ['Jira Software', 'Miro', 'Figma Blueprint', 'User Stories']
    },
    {
      id: 'arquitectura',
      stepNumber: '02',
      shortLabel: 'ARQ',
      title: 'Arquitectura',
      description: 'Diseñamos la estructura tecnológica, modelamos flujos de datos complejos y planificamos servidores elásticos.',
      icon: Layers,
      accentColor: '#3b82f6', // Azul eléctrico
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      glowAccent: 'rgba(59, 130, 246, 0.25)',
      entregables: [
        'Modelado de base de datos relacional',
        'Modelado de arquitectura y APIs',
        'Esquemas de seguridad de red',
        'Aprovisionamiento cloud de prueba'
      ],
      resultado: 'Arquitectura y base tecnológica totalmente aprobada.',
      tecnologias: ['Laravel Backend', 'Node.js Core', 'Docker Container', 'MySQL Stack', 'AWS Cloud']
    },
    {
      id: 'desarrollo',
      stepNumber: '03',
      shortLabel: 'DEV',
      title: 'Desarrollo',
      description: 'Codificamos de manera limpia, ágil e incremental a través de constantes entregas funcionales funcionales de software.',
      icon: Terminal,
      accentColor: '#8b5cf6', // Violeta tecnológico
      textColor: 'text-violet-400',
      borderColor: 'border-violet-500/30',
      glowAccent: 'rgba(139, 92, 246, 0.25)',
      entregables: [
        'Frontend modular interactivo',
        'Endpoints de API y bases de datos integradas',
        'Integración nativa con pasarelas',
        'Automatizaciones de flujos internos'
      ],
      resultado: 'Producto robusto en constante iteración y evolución.',
      tecnologias: ['React SPA', 'TypeScript Core', 'TailwindCSS Layout', 'Next.js Engine', 'GitHub Workflow']
    },
    {
      id: 'qa-validacion',
      stepNumber: '04',
      shortLabel: 'QA',
      title: 'QA y Validación',
      description: 'Sometemos el código a rigurosas validaciones funcionales, de rendimiento y simulaciones de vulnerabilidades.',
      icon: ShieldCheck,
      accentColor: '#d946ef', // Magenta premium
      textColor: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
      glowAccent: 'rgba(217, 70, 239, 0.25)',
      entregables: [
        'Pruebas QA funcionales y de regresión',
        'Análisis estático de estabilidad de código',
        'Escáneres de seguridad contra inyecciones OWASP',
        'Pruebas de estrés para picos de transacciones'
      ],
      resultado: 'Sistemas limpios de bugs y blindados para la red.',
      tecnologias: ['Cypress Automation', 'Postman Testing', 'Jest Testing Framework', 'SonarQube Metrics', 'Lighthouse Audits']
    },
    {
      id: 'despliegue',
      stepNumber: '05',
      shortLabel: 'DEP',
      title: 'Despliegue',
      description: 'Lanzamos el sistema de forma segura con tuberías automatizadas de CI/CD, garantizando cero tiempo de caída.',
      icon: Rocket,
      accentColor: '#f97316', // Naranja premium
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      glowAccent: 'rgba(249, 115, 22, 0.25)',
      entregables: [
        'Estrategia de lanzamiento Blue-Green sin fricciones',
        'Tuberías y flujos automatizados de CI/CD',
        'Sistemas telemétricos de monitoreo y alertas 24/7',
        'Manuales técnicos exhaustivos para el equipo'
      ],
      resultado: 'Plataforma operando de manera impecable en producción.',
      tecnologias: ['AWS Devops Platform', 'Google Cloud Compute Engine', 'Sentry Alerting', 'Vercel Deployment', 'GitHub Actions']
    },
    {
      id: 'evolucion',
      stepNumber: '06',
      shortLabel: 'EVO',
      title: 'Evolución Continua',
      description: 'Optimizamos la infraestructura, actualizamos funciones y escalamos el sistema acompañando su crecimiento.',
      icon: Activity,
      accentColor: '#14b8a6', // Gradiente base Teal/Cyan
      textColor: 'text-teal-400',
      borderColor: 'border-teal-500/30',
      glowAccent: 'rgba(20, 184, 166, 0.25)',
      entregables: [
        'Optimización periódica de consultas SQL',
        'Integración gradual de nuevos módulos',
        'Estrategias elásticas de escalamiento cloud',
        'Soporte técnico preferencial bajo SLA estricto'
      ],
      resultado: 'Crecimiento de transacciones y rentabilidad sostenida.',
      tecnologias: ['Google Analytics Platform', 'Mixpanel Behavior', 'New Relic APM', 'SLA Premium Support']
    }
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? phases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === phases.length - 1 ? 0 : prev + 1));
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

  const currentPhase = phases[activeIdx];

  return (
    <section 
      id="proceso" 
      className="relative py-28 bg-[#020617] border-t border-b border-white/5 overflow-hidden select-none"
    >
      {/* Delicate futuristic technical elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />
      
      {/* Slow rotating blueprint radar target simulation in corner */}
      <div className="absolute -top-32 -left-32 w-96 h-96 border border-white/5 rounded-full pointer-events-none opacity-30 flex items-center justify-center">
        <div className="w-80 h-80 border border-dashed border-white/5 rounded-full animate-[spin_40s_linear_infinite] flex items-center justify-center">
          <div className="w-56 h-56 border border-white/5 rounded-full" />
        </div>
      </div>

      {/* Floating high-tech node line lights */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-all duration-1000" 
        style={{
          background: `radial-gradient(circle, ${currentPhase.glowAccent} 0%, transparent 75%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section matching LATAMCODE pristine left format */}
        <div className="text-left max-w-4xl space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[9px] font-extrabold tracking-widest text-cyan-400 uppercase">
              METODOLOGÍA INDUSTRIAL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            NUESTRO PROCESO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 filter drop-shadow-[0_2px_10px_rgba(139,92,246,0.15)]">DE INGENIERÍA</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
            Transformamos ideas en plataformas empresariales mediante una metodología estructurada que reduce riesgos, acelera la entrega y garantiza calidad en cada etapa.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: HORIZONTAL CONTROL CENTER ROADMAP ROUTE */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative py-10 mb-14">
          
          {/* Connecting Master Pipeline Path background */}
          <div className="absolute top-[52px] left-8 right-8 h-[2px] bg-slate-900 pointer-events-none z-0" />

          {/* Animated data pulse flying through line */}
          <div className="absolute top-[52px] left-8 right-8 h-[2px] pointer-events-none z-0 overflow-hidden">
            <motion.div 
              className="h-full w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80"
              animate={{
                x: ['-100%', '300%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Connected Route Map */}
          <div className="grid grid-cols-6 gap-2 relative z-10">
            {phases.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              const isActive = activeIdx === idx;
              const isHovered = hoveredIdx === idx;
              const accentColor = phase.accentColor;

              return (
                <div 
                  key={phase.id}
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Step metadata header label */}
                  <span className="font-mono text-[9px] text-slate-500 font-black tracking-widest uppercase mb-4 transition-colors group-hover:text-slate-400">
                    SYS_0{idx + 1} // {phase.shortLabel}
                  </span>

                  {/* High tech node item container */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Ring glow background on hover or active */}
                    <AnimatePresence>
                      {(isActive || isHovered) && (
                        <motion.div 
                          className="absolute w-20 h-20 rounded-2xl blur-[12px] opacity-35 z-0"
                          layoutId="nodeGlow"
                          style={{ backgroundColor: accentColor }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.35, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Precise technical crosshairs border on active */}
                    {isActive && (
                      <div className="absolute inset-[-6px] border border-dashed rounded-2xl animate-[spin_30s_linear_infinite] opacity-60"
                           style={{ borderColor: accentColor }} />
                    )}

                    {/* Main Node Shell */}
                    <div 
                      className="w-[50px] h-[50px] rounded-2xl border-2 flex items-center justify-center relative bg-slate-950 transition-all duration-300 z-10"
                      style={{
                        borderColor: isActive 
                          ? accentColor 
                          : isHovered 
                            ? 'rgba(255, 255, 255, 0.25)' 
                            : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isActive ? `0 0 16px -2px ${phase.glowAccent}` : 'none',
                        transform: (isActive || isHovered) ? 'scale(1.1) translateY(-2px)' : 'scale(1)'
                      }}
                    >
                      {/* Active tracking signal dot */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: accentColor }}></span>
                        </span>
                      )}

                      <PhaseIcon 
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: (isActive || isHovered) ? accentColor : '#64748b' }}
                      />
                    </div>
                  </div>

                  {/* Node label text */}
                  <h4 
                    className="mt-5 font-display text-[11px] font-black tracking-widest uppercase transition-colors text-center"
                    style={{ color: isActive ? '#ffffff' : isHovered ? '#cbd5e1' : '#64748b' }}
                  >
                    {phase.title}
                  </h4>
                  
                  {/* Subtle link signal text under node */}
                  <span className="text-[7.5px] font-mono text-slate-650 opacity-40 font-bold group-hover:opacity-80 transition-opacity mt-1">
                    {isActive ? '● STATUS_ACTIVE' : 'SYSTEM_READY'}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: INTUITIVE RESPONSIVE SWIPER CAROUSEL */}
        {/* ======================================================== */}
        <div className="lg:hidden relative py-4 mb-8" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          
          <div className="border border-white/5 bg-slate-950/45 p-6 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
            
            {/* Fine design lines overlay */}
            <div className="absolute top-3 left-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-mono text-[8px] text-slate-500 font-bold">TERMINAL CAROUSEL_SYS v5.0</span>
            </div>

            <div className="absolute top-3 right-4 font-mono text-[8px] text-slate-500 font-bold">
              FASE {currentPhase.stepNumber} / 06
            </div>

            {/* Centered Node preview with animations */}
            <div className="relative mt-4 mb-4 flex items-center justify-center">
              <div 
                className="absolute w-24 h-24 rounded-full blur-xl opacity-30 animate-pulse" 
                style={{ backgroundColor: currentPhase.accentColor }} 
              />
              <div 
                className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center bg-slate-950 relative z-10"
                style={{
                  borderColor: currentPhase.accentColor,
                  boxShadow: `0 0 20px -3px ${currentPhase.glowAccent}`
                }}
              >
                {/* Dynamically instantiate current icon */}
                {React.createElement(currentPhase.icon, {
                  className: "w-7 h-7",
                  style: { color: currentPhase.accentColor }
                })}
              </div>
            </div>

            <span className="font-mono text-[9px] text-slate-500 font-extrabold tracking-wider block uppercase">
              FASE {currentPhase.stepNumber} // {currentPhase.shortLabel}
            </span>
            
            <h3 className="font-display text-lg font-black text-white uppercase tracking-wider mt-1.5 mb-2">
              {currentPhase.title}
            </h3>

            <p className="text-[11.5px] text-slate-350 leading-relaxed font-light max-w-sm">
              {currentPhase.description}
            </p>

            {/* Quick left/right paging controls */}
            <div className="flex items-center gap-6 mt-5 pt-4 border-t border-white/[0.05] w-full justify-between">
              <button 
                onClick={handlePrev}
                className="p-2 border border-white/5 bg-slate-900 rounded-xl text-slate-450 hover:text-white transition-colors"
                title="Fase anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5 items-center">
                {phases.map((_, i) => (
                  <span 
                    key={i} 
                    className="h-1 rounded-full transition-all duration-300"
                    style={{ 
                      width: i === activeIdx ? '16px' : '4px',
                      backgroundColor: i === activeIdx ? currentPhase.accentColor : 'rgba(255,255,255,0.1)'
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="p-2 border border-white/5 bg-slate-900 rounded-xl text-slate-450 hover:text-white transition-colors"
                title="Fase siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* MASTER ACTIVE WORKSPACE PANEL (Command Center Details) */}
        {/* ======================================================== */}
        <div className="relative font-mono text-[11px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="border border-white/10 bg-slate-950/70 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
              style={{
                boxShadow: `0 20px 40px -15px rgba(0,0,0,0.8), inset 0 0 25px -10px ${currentPhase.glowAccent}`
              }}
            >
              {/* Colored edge corner accents typical of radar screens */}
              <div className="absolute top-0 left-0 w-3 h-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              <div className="absolute top-0 left-0 h-3 w-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              
              <div className="absolute top-0 right-0 w-3 h-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              <div className="absolute top-0 right-0 h-3 w-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              
              <div className="absolute bottom-0 left-0 w-3 h-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              <div className="absolute bottom-0 left-0 h-3 w-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />

              <div className="absolute bottom-0 right-0 w-3 h-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />
              <div className="absolute bottom-0 right-0 h-3 w-[2px] transition-colors" style={{ backgroundColor: currentPhase.accentColor }} />

              {/* Master Console Grid Map */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                
                {/* Panel Left Side: Descriptions & Sprints details */}
                <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4 text-left">
                    
                    {/* Console status indicator */}
                    <div className="flex items-center gap-2">
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: currentPhase.accentColor }} />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: currentPhase.accentColor }} />
                      </span>
                      <span className="text-[8.5px] uppercase tracking-widest text-slate-500 font-extrabold">
                        CONSOLE::ACTIVE_WORKSPACE_RUN_F0{currentPhase.stepNumber}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight mt-2">
                      {currentPhase.title}
                    </h3>

                    <p className="text-slate-350 text-[12.5px] leading-relaxed font-light font-sans">
                      {currentPhase.description}
                    </p>
                  </div>

                  {/* Core Tools and Technologies displayed below left block */}
                  <div className="pt-4 border-t border-white/[0.04] space-y-2.5 text-left">
                    <span className="text-[9px] uppercase tracking-widest text-[#4b5563] font-black block">
                      HERRAMIENTAS & TECNOLOGÍAS EN LA ETAPA:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentPhase.tecnologias.map((tool) => (
                        <span 
                          key={tool} 
                          className="text-[9.5px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-slate-400 hover:border-white/10 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Panel Right Side: Outputs, Checklist delivery and outcomes */}
                <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/[0.06] pt-6 md:pt-0 md:pl-6 lg:pl-8 space-y-5">
                  
                  {/* Delivered list */}
                  <div className="space-y-3.5 text-left">
                    <span className="text-[9px] uppercase tracking-widest text-[#4b5563] font-black block">
                      ENTREGABLES CLAVE:
                    </span>
                    
                    <div className="space-y-2">
                      {currentPhase.entregables.map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start">
                          <CheckCircle2 
                            className="w-4 h-4 shrink-0 transition-colors" 
                            style={{ color: currentPhase.accentColor }}
                            strokeWidth={2.5}
                          />
                          <span className="text-slate-300 text-[11.5px] leading-snug font-sans font-light">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcome Terminal Box */}
                  <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4 relative overflow-hidden text-left">
                    
                    {/* Header bar of terminal */}
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.03]">
                      <span className="text-[8px] uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        RESULTADO ESPERADO / OUTPUT
                      </span>
                      <span className="text-[7.5px] text-slate-750 font-bold uppercase">SECURE_RUN_OK</span>
                    </div>

                    <p className="text-slate-200 text-[11px] leading-relaxed font-mono">
                      &gt; {currentPhase.resultado}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
