import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data';
import { motion, PanInfo } from 'motion/react';
import { Cpu, Globe, Smartphone, Sparkles, Layers, CloudLightning, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenContact: (interestId?: string) => void;
}

const iconMap: { [key: string]: any } = {
  Cpu: Cpu,
  Globe: Globe,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Layers: Layers,
  CloudLightning: CloudLightning
};

export default function Services({ onOpenContact }: ServicesProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [clickedActive, setClickedActive] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Responsive device check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay functionality every 5 seconds, paused on hover or click focus
  useEffect(() => {
    const isPaused = hoveredIdx !== null || clickedActive;
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hoveredIdx, clickedActive, SERVICES_DATA.length]);

  // Reset any click tracking when changing active card
  useEffect(() => {
    setClickedActive(false);
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  const handleDotClick = (idx: number) => {
    setActiveIdx(idx);
  };

  // Precise 3D parameters designed for smooth rendering and realistic layers
  const getCardStyle = (index: number) => {
    const diff = (index - activeIdx + SERVICES_DATA.length) % SERVICES_DATA.length;
    const isActive = diff === 0;

    if (isMobile) {
      return {
        x: isActive ? 0 : 120,
        y: 0,
        z: 0,
        scale: isActive ? 1 : 0.88,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 30 : 0,
        pointerEvents: isActive ? ('auto' as const) : ('none' as const),
        filter: isActive ? 'blur(0px)' : 'blur(4px)',
      };
    }

    // Active Card State
    if (isActive) {
      const isFocused = hoveredIdx === index || clickedActive;
      
      if (isFocused) {
        // Smoothly straightens on hover / activation click for comfortable reading
        return {
          x: 0,
          y: 0,
          z: 80,
          scale: 1.02,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto' as const,
          filter: 'blur(0px)',
        };
      } else {
        // Exquisite slanted 3D perspective state
        return {
          x: 0,
          y: 0,
          z: 40,
          scale: 1,
          rotateX: 3,
          rotateY: -8,
          rotateZ: -1,
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto' as const,
          filter: 'blur(0px)',
        };
      }
    }

    // Secondary Card (Stacked behind active)
    if (diff === 1) {
      return {
        x: 42,
        y: 18,
        z: 10,
        scale: 0.94,
        rotateX: 3,
        rotateY: -14,
        rotateZ: -1,
        opacity: 0.45,
        zIndex: 20,
        pointerEvents: 'none' as const,
        filter: 'blur(1px)',
      };
    }

    // Tertiary Card (Stacked further behind)
    if (diff === 2) {
      return {
        x: 78,
        y: 34,
        z: -20,
        scale: 0.88,
        rotateX: 3,
        rotateY: -18,
        rotateZ: -1,
        opacity: 0.25,
        zIndex: 10,
        pointerEvents: 'none' as const,
        filter: 'blur(2px)',
      };
    }

    // Hidden Card Loop State
    return {
      x: 120,
      y: 45,
      z: -60,
      scale: 0.80,
      rotateX: 3,
      rotateY: -22,
      rotateZ: -1,
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none' as const,
      filter: 'blur(6px)',
    };
  };

  const handleExplorarClick = () => {
    document.getElementById('tecnologias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="servicios" 
      className="relative py-28 lg:py-36 bg-[#030712] border-y border-white/5 overflow-hidden select-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(6, 182, 212, 0.03) 0%, rgba(99, 102, 241, 0.02) 50%, #030712 100%)'
      }}
    >
      {/* Visual Diagonal Neon Glow line coming from top right (ambient subtle deco from reference) */}
      <div className="absolute top-0 right-0 w-[500px] h-[1px] bg-gradient-to-l from-pink-500/18 via-purple-500/8 to-transparent transform rotate-[25deg] origin-top-right pointer-events-none z-0" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[1px] bg-gradient-to-l from-[#00D4FF]/12 via-blue-500/5 to-transparent transform rotate-[25deg] origin-top-right pointer-events-none z-0" />

      {/* Circle Outlines decoration */}
      <div className="absolute top-24 right-1/4 w-12 h-12 rounded-full border border-purple-500/10 pointer-events-none z-0" />
      <div className="absolute bottom-32 left-10 w-20 h-20 rounded-full border border-pink-500/5 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full border border-cyan-500/10 pointer-events-none z-0" />

      {/* Soft Symmetrical Radial ambient highlights (extremely dimmed down and natural) */}
      <div className="absolute -top-36 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-950/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-950/8 blur-[150px] pointer-events-none z-0" />

      {/* Technical Dot Mesh texture for background feel */}
      <div className="absolute inset-0 bg-mesh-dots opacity-[0.25] pointer-events-none z-0" />

      {/* Grid of accent dots in the upper margin of reference header container */}
      <div className="absolute top-12 right-12 grid grid-cols-4 gap-1.5 opacity-[0.18] pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-purple-500" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Clean Corporate Copy with Elegant Actions */}
          <div className="lg:col-span-5 space-y-7 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-[#00D4FF] uppercase">
                Capacidades Tecnológicas
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[45px] font-black tracking-tight leading-tight text-white">
                Nuestros Servicios:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  soluciones diseñadas para tu negocio
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-350 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                Construimos tecnología a medida para resolver procesos críticos, automatizar operaciones y escalar productos digitales con seguridad, velocidad y visión empresarial.
              </p>
            </div>

            {/* Principal Actions congruent with Hero.tsx templates */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleExplorarClick}
                className="group cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/25 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explorar servicios</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenContact()}
                className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/40 px-7 py-3.5 text-xs font-semibold text-slate-200 hover:text-white hover:border-white/20 hover:bg-slate-900/60 transition-all text-center flex items-center justify-center gap-2"
              >
                Consultar Ingeniero
              </button>
            </div>

            {/* Quick Core Metrics for business validity */}
            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              <div>
                <div className="text-sm font-mono font-bold text-cyan-400">100% Nativo</div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">Código con arquitectura escalable</div>
              </div>
              <div>
                <div className="text-sm font-mono font-bold text-violet-400">Alta Gama</div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">Experiencias fluidas de primer nivel</div>
              </div>
              <div>
                <div className="text-sm font-mono font-bold text-sky-400">DevOps</div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">Infraestructura tolerante a fallos</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Stack of 3 Floating Cards in true elegant 3D perspective with platforms */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative mt-10 lg:mt-0">
            
            {/* The 3D Perspective Stage Wrapper */}
            <div 
              className="relative w-full max-w-[460px] h-[360px] flex items-center justify-center"
              style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
            >
              
              {/* PLATFORM / HOLOGRAPHIC NEON BASE: Elegant elliptic neon base with violet/pink glow underneath cards */}
              <div 
                className="absolute bottom-[3px] left-1/2 -translate-x-[50%] w-[380px] h-[50px] rounded-full border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent blur-[3px] opacity-65 transform -rotate-x-[75deg] z-0 pointer-events-none shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-[85%] h-[85%] rounded-full border border-cyan-500/15 shadow-[0_0_12px_rgba(6,182,212,0.15)] animate-pulse" />
              </div>

              {/* Render 3D Stacked Cards (Maximum 2 cards behind are visible) */}
              {SERVICES_DATA.map((service, index) => {
                const IconComponent = iconMap[service.iconName] || Cpu;
                const diff = (index - activeIdx + SERVICES_DATA.length) % SERVICES_DATA.length;
                const isCurrent = diff === 0;
                const isCardFocused = isCurrent && (hoveredIdx === index || clickedActive);

                return (
                  <motion.div
                    key={service.id}
                    animate={getCardStyle(index)}
                    transition={{ 
                      type: 'tween',
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onMouseEnter={() => {
                      if (isCurrent) setHoveredIdx(index);
                    }}
                    onMouseLeave={() => {
                      if (isCurrent) setHoveredIdx(null);
                    }}
                    onClick={() => {
                      if (isCurrent) {
                        setClickedActive(!clickedActive);
                      } else {
                        setActiveIdx(index);
                      }
                    }}
                    // Framer Motion Smooth horizontal swipe drag settings & custom triggers
                    drag={isCurrent ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onDragEnd={(e, info: PanInfo) => {
                      const swipeThreshold = 60;
                      if (info.offset.x < -swipeThreshold) {
                        handleNext();
                      } else if (info.offset.x > swipeThreshold) {
                        handlePrev();
                      }
                    }}
                    className={`absolute w-full max-w-[430px] h-[300px] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden select-none transition-colors duration-300 ${
                      isCurrent 
                        ? isCardFocused 
                          ? 'bg-[#04010a]/96 border-2 border-pink-500 shadow-[0_20px_45px_rgba(236,72,153,0.2)] scale-[1.02] cursor-grabbing z-[30]' 
                          : 'bg-[#080214]/85 border border-[#FF2DAA]/45 shadow-[0_15px_35px_rgba(236,72,153,0.15),_0_8px_25px_rgba(6,182,212,0.1)] cursor-grab hover:cursor-grab z-[30]' 
                        : 'bg-[#030107]/50 border border-purple-900/15 opacity-35 pointer-events-none z-[10]'
                    }`}
                    style={{
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    
                    {/* Visual subtle glows - Magenta on left, Cyan on right (only for the active card) */}
                    {isCurrent && (
                      <>
                        <div className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-pink-500 via-pink-500/30 to-transparent opacity-80" />
                        <div className="absolute right-0 top-0 bottom-0 w-[2.5px] bg-gradient-to-t from-cyan-400 via-cyan-450/30 to-transparent opacity-80" />
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 opacity-60" />
                      </>
                    )}

                    {/* Card Body - Content layout elements */}
                    <div className="space-y-4 relative z-10">
                      
                      {/* Styled Linear Icon frame structure with title */}
                      <div className="flex items-center gap-3.5">
                        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-purple-950/40 border border-pink-500/25 text-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.15)] shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-display text-sm sm:text-base font-black text-white tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Brief description that maps neatly inside the 300px card */}
                      <p className={`text-[11.5px] sm:text-[12px] text-purple-100 leading-relaxed font-light ${!isCurrent && 'line-clamp-2'}`}>
                        {service.shortDescription}
                      </p>

                      {/* Bullet list of maximum 3 features logically rendered on active cards */}
                      <div className={`transition-all duration-300 ${isCurrent ? 'opacity-100' : 'opacity-[0.05] blur-[1px]'}`}>
                        <ul className="space-y-1.5 pt-3 border-t border-purple-950/35">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-[10.5px] sm:text-[11px] text-purple-200">
                              <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-purple-950/80 border border-pink-500/20 text-pink-400">
                                <Check className="h-2 w-2" />
                              </span>
                              <span className="leading-none text-purple-100 font-light truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Small clean call to action bottom border block */}
                    <div className={`pt-3 mt-1 border-t border-purple-950/35 flex items-center justify-between transition-all duration-300 ${isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400/50 font-semibold">LATAMCODE</span>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenContact(service.id);
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF2DAA] to-[#00D4FF] hover:opacity-95 text-white font-bold text-[10px] tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-cyan-400/20 flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Cotizar servicio</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* Symmetrical active pagination control dots and arrows Centered */}
            <div className="flex items-center justify-center gap-6 mt-8 relative z-30">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-slate-900/60 border border-white/5 text-cyan-400 hover:text-white hover:border-cyan-400/30 hover:bg-slate-800/80 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all cursor-pointer"
                title="Servicio Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {/* Symmetrical active pagination controller dots */}
              <div className="flex gap-2">
                {SERVICES_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIdx 
                        ? 'w-7 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_8px_rgba(34,211,238,0.4)]' 
                        : 'w-2 bg-slate-800 hover:bg-slate-700'
                    }`}
                    title={`Ir al servicio ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-slate-900/60 border border-white/5 text-cyan-400 hover:text-white hover:border-cyan-400/30 hover:bg-slate-800/80 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all cursor-pointer"
                title="Siguiente Servicio"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* User Interaction helper caption overlay */}
            {!isMobile && (
              <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-mono select-none pointer-events-none">
                {clickedActive ? "✓ Foco de lectura • Haz clic para volver al 3D" : "⇄ Swipe / Arrastra la card activa o desliza con el mouse"}
              </p>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
