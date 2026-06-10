import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layout, 
  Server, 
  Smartphone, 
  Code2, 
  Braces, 
  Terminal, 
  Layers, 
  Database,
  Cpu,
  Flame,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Cloud
} from 'lucide-react';

interface TechnologiesProps {
  onOpenContact?: () => void;
}

interface Technology {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  idealPara: string[];
  ventajas: string[];
  proyectoRecomendado: string;
}

export default function Technologies({ onOpenContact }: TechnologiesProps) {
  const [selectedTechId, setSelectedTechId] = useState<string>('react');

  const technologies: Technology[] = [
    {
      id: 'react',
      name: 'React',
      icon: Layout,
      description: 'Biblioteca líder para construir interfaces de usuario interactivas, fluidas y reactivas mediante componentes reutilizables.',
      idealPara: ['Plataformas SaaS', 'Plataformas B2B', 'Dashboards de analítica', 'Portales de gran escala'],
      ventajas: ['Ecosistema maduro desarrollado por Meta', 'Renderizado veloz gracias a Virtual DOM', 'Modularidad avanzada para reducir tiempos'],
      proyectoRecomendado: 'Plataformas SaaS e interfaces dinámicas que necesiten actualizaciones de datos instantáneas en tiempo real.'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: Braces,
      description: 'Superset de JavaScript que añade tipado estricto al código, eliminando la posibilidad de bugs lógicos y facilitando el mantenimiento a largo plazo.',
      idealPara: ['Fintech y pasarelas de pago', 'Sistemas con lógicas complejas', 'Aplicativos multi-módulo', 'Estructuras de datos críticas'],
      ventajas: ['Mitiga el 95% de los errores habituales en desarrollo', 'Autocompletado predictivo para programar rápido', 'Refactorizaciones de código 100% seguras'],
      proyectoRecomendado: 'Sistemas robustos de escala corporativa donde la estabilidad de datos y el control de accesos son críticos.'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      icon: Terminal,
      description: 'Entorno de ejecución de alto rendimiento diseñado para construir servicios del lado del servidor ultrarrápidos, asíncronos y altamente concurrentes.',
      idealPara: ['Mensajería en vivo y Chats', 'Microservicios distribuidos', 'Sistemas de alertas masivas', 'APIs de alta velocidad'],
      ventajas: ['Modelo I/O no bloqueante de muy baja latencia', 'Unifica todo el equipo bajo un mismo lenguaje (JS/TS)', 'Consumo mínimo de memoria e infraestructura liviana'],
      proyectoRecomendado: 'Productos con demandas de datos masivos en tiempo real o que gestionen millones de conexiones concurrentes.'
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: Server,
      description: 'El framework web para backend más sólido y elegante de la industria, optimizado para crear flujos de trabajo limpios y seguros rápidamente.',
      idealPara: ['Sistemas administrativos (ERP, CRM)', 'Backoffices operacionales', 'Portales transaccionales robustos', 'APIs RESTful corporativas'],
      ventajas: ['Seguridad automática nativa contra XSS y CSRF', 'Eloquent ORM para bases de datos sencillas y fluidas', 'Soporte sobresaliente para integraciones empresariales'],
      proyectoRecomendado: 'Sistemas centralizados de gestión administrativa y portales corporativos que requieren solidez con el menor time-to-market.'
    },
    {
      id: 'php',
      name: 'PHP',
      icon: Code2,
      description: 'El motor tecnológico altamente confiable que impulsa la mayoría de los portales web del mundo, renovado y optimizado en su versión 8.x.',
      idealPara: ['Plataformas de e-Commerce', 'Sitios de contenido corporativo', 'Herramientas automatizadas', 'Servicios de alta escalabilidad'],
      ventajas: ['Altísima compatibilidad garantizada en la nube', 'Velocidad de procesamiento optimizada con PHP 8', 'Respaldo maduro con millones de soluciones estables'],
      proyectoRecomendado: 'Portales transaccionales masivos y sitios corporativos que busquen costos operativos ultra eficientes.'
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: Smartphone,
      description: 'Tecnología innovadora de Google para crear aplicaciones nativas de alta fluidez gráfica para Android e iOS partiendo de un único código base.',
      idealPara: ['Aplicaciones móviles de consumo', 'Fintech móviles y billeteras', 'Logística y última milla', 'Plataformas educativas'],
      ventajas: ['Un solo desarrollo que reduce costos de mantenimiento a la mitad', 'Motor gráfico propio (Skia/Impeller) a 120 FPS sin retrasos', 'Despliegues y lanzamientos en tiendas coordinados y rápidos'],
      proyectoRecomendado: 'Empresas que requieren lanzar aplicaciones móviles fluidas y consistentes para todo tipo de smartphone de forma ágil.'
    },
    {
      id: 'swift',
      name: 'Swift',
      icon: Cpu,
      description: 'Lenguaje nativo de Apple diseñado para crear aplicaciones de alto rendimiento, optimizadas al extremo para iOS, iPadOS y su ecosistema.',
      idealPara: ['Apps exclusivas para iPhone/iPad', 'Soluciones de alta fidelidad', 'Biometría avanzada (FaceID)', 'Sistemas interactivos premium'],
      ventajas: ['Rendimiento nativo insuperable en hardware de Apple', 'Consumo óptimo de recursos locales y batería', 'Acceso inmediato a los últimos sensores móviles'],
      proyectoRecomendado: 'Aplicativos premium dirigidos a usuarios del ecosistema Apple que exigen un nivel intuitivo y animaciones de gran fluidez.'
    },
    {
      id: 'android',
      name: 'Android Native',
      icon: Layers,
      description: 'Desarrollo robusto mediante código nativo Kotlin para aprovechar al máximo las capacidades de hardware de los dispositivos Android.',
      idealPara: ['Sistemas industriales y lectores', 'Integraciones robustas de hardware (GPS, BLE)', 'Sistemas logísticos de terreno', 'Consolas portátiles directas'],
      ventajas: ['Acceso profundo al hardware local sin intermediarios', 'Excelente administración de procesos en segundo plano', 'Adaptabilidad precisa en cualquier gama de equipos'],
      proyectoRecomendado: 'Aplicativos operativos para fuerza de ventas, logística de distribución o sector industrial con requerimientos estrictos sobre el hardware.'
    },
    {
      id: 'firebase',
      name: 'Firebase',
      icon: Flame,
      description: 'Completa suite de servicios en la nube de Google ideal para proveer bases de datos no relacionales de sincronización instantánea y autenticación segura.',
      idealPara: ['Sistemas de trabajo en vivo', 'Prototipos ágiles de mercado', 'Aplicativos colaborativos de chat', 'Notificaciones de alta velocidad'],
      ventajas: ['Bases de datos NoSQL con syncing remoto inmediato', 'Gestión de identidad y accesos robusta lista para usar', 'Infraestructura autoescalable con esquema serverless'],
      proyectoRecomendado: 'Soluciones digitales reactivas que dependan de interacciones en tiempo real y busquen acelerar su desarrollo.'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: Database,
      description: 'La base de datos relacional de mayor adopción en el mundo, ideal para estructurar con rigurosa seguridad la información crítica de su empresa.',
      idealPara: ['Sistemas financieros y facturación', 'Control estricto de inventarios', 'Pasarelas transaccionales', 'Sistemas de registros médicos'],
      ventajas: ['Cumplimiento riguroso ACID para consistencia cero errores', 'Óptima velocidad de respuesta en consultas de alto volumen', 'Seguridad, escalabilidad e integridad transaccional confiable'],
      proyectoRecomendado: 'Sistemas administrativos, contables o fiscales donde cada registro de datos cruzados requiera precisión quirúrgica.'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: Cloud,
      description: 'Herramienta de virtualización por contenedores que unifica y optimiza los despliegues de software al anular incompatibilidades de servidor.',
      idealPara: ['Arquitectura de microservicios', 'Esquemas en la nube y DevOps', 'Líneas automatizadas de producción', 'Seguridad en ambientes de servidor'],
      ventajas: ['Aislamiento robusto de procesos computacionales', 'Despliegues ágiles en la nube sin cortes de servicio', 'Funcionamiento idéntico en desarrollo y producción'],
      proyectoRecomendado: 'Sistemas empresariales complejos que busquen migrar a esquemas modernos de nube híbrida, escalabilidad modular y CI/CD.'
    }
  ];

  const activeTech = technologies.find(t => t.id === selectedTechId) || technologies[0];

  // Tailored visual identities specifying the requested properties
  const techColors: Record<string, {
    color: string;
    text: string;
    glow: string;
    pillBg: string;
    bulletGlow: string;
    bgNormal: string;
    bgActive: string;
    borderNormal: string;
    borderActive: string;
  }> = {
    react: {
      color: '#00d8ff',
      text: 'text-[#00d8ff]',
      glow: 'rgba(0, 216, 255, 0.35)',
      pillBg: 'bg-[#00d8ff]/10 text-[#00d8ff] border-[#00d8ff]/30',
      bulletGlow: 'bg-[#00d8ff]',
      bgNormal: 'rgba(0, 216, 255, 0.03)',
      bgActive: 'rgba(0, 216, 255, 0.12)',
      borderNormal: 'rgba(0, 216, 255, 0.16)',
      borderActive: 'rgba(0, 216, 255, 0.7)'
    },
    typescript: {
      color: '#3178c6',
      text: 'text-[#3178c6]',
      glow: 'rgba(49, 120, 198, 0.35)',
      pillBg: 'bg-[#3178c6]/10 text-[#3178c6] border-[#3178c6]/30',
      bulletGlow: 'bg-[#3178c6]',
      bgNormal: 'rgba(49, 120, 198, 0.03)',
      bgActive: 'rgba(49, 120, 198, 0.12)',
      borderNormal: 'rgba(49, 120, 198, 0.16)',
      borderActive: 'rgba(49, 120, 198, 0.7)'
    },
    nodejs: {
      color: '#43c343',
      text: 'text-[#43c343]',
      glow: 'rgba(67, 195, 67, 0.35)',
      pillBg: 'bg-[#43c343]/10 text-[#43c343] border-[#43c343]/30',
      bulletGlow: 'bg-[#43c343]',
      bgNormal: 'rgba(67, 195, 67, 0.03)',
      bgActive: 'rgba(67, 195, 67, 0.12)',
      borderNormal: 'rgba(67, 195, 67, 0.16)',
      borderActive: 'rgba(67, 195, 67, 0.7)'
    },
    laravel: {
      color: '#f93226',
      text: 'text-[#f93226]',
      glow: 'rgba(249, 50, 38, 0.35)',
      pillBg: 'bg-[#f93226]/10 text-[#f93226] border-[#f93226]/30',
      bulletGlow: 'bg-[#f93226]',
      bgNormal: 'rgba(249, 50, 38, 0.03)',
      bgActive: 'rgba(249, 50, 38, 0.12)',
      borderNormal: 'rgba(249, 50, 38, 0.16)',
      borderActive: 'rgba(249, 50, 38, 0.7)'
    },
    php: {
      color: '#8c92d6',
      text: 'text-[#8c92d6]',
      glow: 'rgba(140, 146, 214, 0.35)',
      pillBg: 'bg-[#8c92d6]/10 text-[#8c92d6] border-[#8c92d6]/30',
      bulletGlow: 'bg-[#8c92d6]',
      bgNormal: 'rgba(140, 146, 214, 0.03)',
      bgActive: 'rgba(140, 146, 214, 0.12)',
      borderNormal: 'rgba(140, 146, 214, 0.16)',
      borderActive: 'rgba(140, 146, 214, 0.7)'
    },
    flutter: {
      color: '#00b0ff',
      text: 'text-[#00b0ff]',
      glow: 'rgba(0, 176, 255, 0.35)',
      pillBg: 'bg-[#00b0ff]/10 text-[#00b0ff] border-[#00b0ff]/30',
      bulletGlow: 'bg-[#00b0ff]',
      bgNormal: 'rgba(0, 176, 255, 0.03)',
      bgActive: 'rgba(0, 176, 255, 0.12)',
      borderNormal: 'rgba(0, 176, 255, 0.16)',
      borderActive: 'rgba(0, 176, 255, 0.7)'
    },
    swift: {
      color: '#ff6200',
      text: 'text-[#ff6200]',
      glow: 'rgba(255, 98, 0, 0.35)',
      pillBg: 'bg-[#ff6200]/10 text-[#ff6200] border-[#ff6200]/30',
      bulletGlow: 'bg-[#ff6200]',
      bgNormal: 'rgba(255, 98, 0, 0.03)',
      bgActive: 'rgba(255, 98, 0, 0.12)',
      borderNormal: 'rgba(255, 98, 0, 0.16)',
      borderActive: 'rgba(255, 98, 0, 0.7)'
    },
    android: {
      color: '#3ddc84',
      text: 'text-[#3ddc84]',
      glow: 'rgba(61, 220, 132, 0.35)',
      pillBg: 'bg-[#3ddc84]/10 text-[#3ddc84] border-[#3ddc84]/30',
      bulletGlow: 'bg-[#3ddc84]',
      bgNormal: 'rgba(61, 220, 132, 0.03)',
      bgActive: 'rgba(61, 220, 132, 0.12)',
      borderNormal: 'rgba(61, 220, 132, 0.16)',
      borderActive: 'rgba(61, 220, 132, 0.7)'
    },
    firebase: {
      color: '#ffa000',
      text: 'text-[#ffa000]',
      glow: 'rgba(255, 160, 0, 0.35)',
      pillBg: 'bg-[#ffa000]/10 text-[#ffa000] border-[#ffa000]/30',
      bulletGlow: 'bg-[#ffa000]',
      bgNormal: 'rgba(255, 160, 0, 0.03)',
      bgActive: 'rgba(255, 160, 0, 0.12)',
      borderNormal: 'rgba(255, 160, 0, 0.16)',
      borderActive: 'rgba(255, 160, 0, 0.7)'
    },
    mysql: {
      color: '#008bb9',
      text: 'text-[#008bb9]',
      glow: 'rgba(0, 139, 185, 0.35)',
      pillBg: 'bg-[#008bb9]/10 text-[#008bb9] border-[#008bb9]/30',
      bulletGlow: 'bg-[#008bb9]',
      bgNormal: 'rgba(0, 139, 185, 0.03)',
      bgActive: 'rgba(0, 139, 185, 0.12)',
      borderNormal: 'rgba(0, 139, 185, 0.16)',
      borderActive: 'rgba(0, 139, 185, 0.7)'
    },
    docker: {
      color: '#38b6ff',
      text: 'text-[#38b6ff]',
      glow: 'rgba(56, 182, 255, 0.35)',
      pillBg: 'bg-[#38b6ff]/10 text-[#38b6ff] border-[#38b6ff]/30',
      bulletGlow: 'bg-[#38b6ff]',
      bgNormal: 'rgba(56, 182, 255, 0.03)',
      bgActive: 'rgba(56, 182, 255, 0.12)',
      borderNormal: 'rgba(56, 182, 255, 0.16)',
      borderActive: 'rgba(56, 182, 255, 0.7)'
    }
  };

  const activeStyle = techColors[activeTech.id] || techColors.react;

  return (
    <section 
      id="tecnologias" 
      className="relative pt-16 pb-16 bg-[#030712] overflow-hidden"
    >
      {/* CAPA DE PROFUNDIDAD 1: Gran iluminación difusa cyan (lado izquierdo) */}
      <div className="absolute top-12 -left-44 w-[650px] h-[650px] rounded-full bg-cyan-950/12 blur-[140px] pointer-events-none" />

      {/* CAPA DE PROFUNDIDAD 2: Iluminación azul eléctrica (zona central) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-blue-950/12 blur-[160px] pointer-events-none" />

      {/* CAPA DE PROFUNDIDAD 3: Iluminación violeta premium (lado derecho) */}
      <div className="absolute top-[40%] -right-44 w-[700px] h-[700px] rounded-full bg-purple-950/12 blur-[140px] pointer-events-none" />

      {/* CAPA DE PROFUNDIDAD 4: Pequeños acentos naranja tecnológico muy sutiles */}
      <div className="absolute top-1/3 left-1/4 w-52 h-52 rounded-full bg-amber-500/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-1/4 w-44 h-44 rounded-full bg-orange-500/[0.03] blur-[90px] pointer-events-none" />

      {/* Partículas lentas y puntos luminosos de energía visual */}
      <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 blur-[1px] animate-pulse pointer-events-none" />
      <div className="absolute top-[25%] right-[15%] w-1 h-1 rounded-full bg-purple-400/40 blur-[1px] pointer-events-none" />
      <div className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-amber-400/30 blur-[1.5px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-blue-400/40 blur-[1px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[40%] w-1 h-1 rounded-full bg-cyan-400/30 blur-[1px] pointer-events-none" />

      {/* Precision design coordinate vectors */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/25 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[1px] h-80 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[1px] h-80 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" />

      {/* Embedded decorative grid overlay (ultra-thin) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Embedded network line abstract graphic covering the top header region */}
      <svg className="absolute top-0 left-0 w-full h-[360px] pointer-events-none opacity-[0.15] text-cyan-500/20" viewBox="0 0 1440 360" preserveAspectRatio="none">
        <defs>
          <pattern id="banner-grid-tech" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#banner-grid-tech)" />
        
        {/* Fine technical lines and connection nodes */}
        <path d="M50 120 L250 160 L500 100 L750 220 L1050 140 L1350 180" stroke="rgba(34, 211, 238, 0.15)" strokeWidth="0.75" fill="none" strokeDasharray="3 3" />
        <path d="M120 250 L380 120 L680 180 L920 110 L1250 225" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="0.75" fill="none" />
        <path d="M300 50 L300 280" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="0.5" fill="none" />
        <path d="M900 80 L900 320" stroke="rgba(34, 211, 238, 0.08)" strokeWidth="0.5" fill="none" />
        
        {/* Nodos de conexión */}
        <circle cx="50" cy="120" r="3" fill="#22d3ee" className="animate-pulse" />
        <circle cx="250" cy="160" r="2" fill="#22d3ee" />
        <circle cx="500" cy="100" r="2.5" fill="#a78bfa" />
        <circle cx="750" cy="220" r="3" fill="#f97316" className="animate-pulse" />
        <circle cx="1050" cy="140" r="2" fill="#22d3ee" />
        <circle cx="1350" cy="180" r="3.5" fill="#6366f1" />
        <circle cx="380" cy="120" r="2.5" fill="#a78bfa" />
        <circle cx="680" cy="180" r="2" fill="#22d3ee" />
        <circle cx="920" cy="110" r="3" fill="#f97316" />
      </svg>

      {/* HEADER SECTION (Unified directly onto the background, no separate containers) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 text-left relative z-10">
        <div className="space-y-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-400 uppercase">
              LATAMCODE TECHNOLOGY DIRECTORY
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase select-none ml-0 pl-0 mb-3">
            ARQUITECTURA TECNOLÓGICA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-550 to-violet-500 filter drop-shadow-[0_2px_10px_rgba(34,211,238,0.15)]">LATAMCODE</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-4xl select-none">
            Seleccionamos las tecnologías más adecuadas para construir plataformas seguras, escalables y preparadas para crecer junto con tu negocio.
          </p>
        </div>
      </div>

      {/* LOGOS SELECTION CONTAINER (Left-Aligned, cohesive with standard grid lines) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-left relative z-10">
        <span className="block text-[10px] font-mono text-slate-500 font-extrabold tracking-widest uppercase mb-4 select-none">
          CONECTAR CON ESPECIFICACIONES DE RECURSO:
        </span>
        
        <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
          {technologies.map((tech) => {
            const isSelected = tech.id === selectedTechId;
            const style = techColors[tech.id] || techColors.react;
            const TechIcon = tech.icon;

            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTechId(tech.id)}
                className={`flex items-center gap-2.5 px-4.5 py-3 rounded-2xl border text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer relative group overflow-hidden select-none h-12 ${
                  isSelected ? 'scale-[1.05]' : 'hover:scale-[1.03]'
                }`}
                style={{
                  borderColor: isSelected ? style.borderActive : style.borderNormal,
                  backgroundColor: isSelected ? 'rgba(15, 28, 54, 0.85)' : 'rgba(10, 19, 36, 0.55)',
                  backgroundImage: isSelected 
                    ? `linear-gradient(135deg, ${style.bgActive}, transparent)` 
                    : `linear-gradient(135deg, ${style.bgNormal}, transparent)`,
                  boxShadow: isSelected 
                    ? `0 6px 20px ${style.glow}` 
                    : '0 2px 10px rgba(0,0,0,0.15)',
                  color: isSelected ? style.color : '#94a3b8'
                }}
              >
                {/* Visual state top accent line */}
                {isSelected && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300" 
                    style={{ backgroundColor: style.color }}
                  />
                )}
                
                {/* Hover state subtle glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${style.bgActive}, transparent)`
                  }}
                />

                <div 
                  className="p-1 rounded-lg border transition-all duration-300 bg-slate-950/90 shrink-0 flex items-center justify-center"
                  style={{
                    borderColor: isSelected ? `${style.color}60` : `${style.color}25`,
                    color: isSelected ? style.color : `${style.color}bb`
                  }}
                >
                  <TechIcon className="w-4 h-4" />
                </div>
                <span className="font-display font-black tracking-widest">{tech.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DYNAMIC PRESENTATION DETAIL PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTech.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#0F1E38]/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border overflow-hidden shadow-2xl"
            style={{
              borderColor: 'rgba(34, 211, 238, 0.12)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}
          >
            {/* Soft decorative visual glow in the background reflecting current tech color */}
            <div 
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-35 pointer-events-none transition-all duration-500"
              style={{ backgroundColor: activeStyle.glow }}
            />

            {/* Upper colorful status strip */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, transparent, ${activeStyle.color}, transparent)`
              }}
            />

            {/* Dual Column Content Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start relative z-10 py-2">
              
              {/* Left Column: Icon Title Description & Ideal Para */}
              <div className="space-y-8 text-left">
                <div className="flex items-center gap-5">
                  <div 
                    className="p-4 rounded-2xl bg-slate-950 border shadow-md relative overflow-hidden transition-all duration-300"
                    style={{
                      borderColor: `${activeStyle.color}30`,
                      color: activeStyle.color
                    }}
                  >
                    {(() => {
                      const TechIcon = activeTech.icon;
                      return <TechIcon className="w-8 h-8" />;
                    })()}
                  </div>
                  <div>
                    <span 
                      className="text-[9px] font-mono font-black tracking-widest px-3 py-1 rounded-full uppercase border select-none inline-block leading-none"
                      style={{
                        borderColor: `${activeStyle.color}20`,
                        backgroundColor: `${activeStyle.color}08`,
                        color: activeStyle.color
                      }}
                    >
                      ESPECIFICACIÓN DE NEGOCIO
                    </span>
                    <h4 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mt-2 leading-tight">
                      {activeTech.name}
                    </h4>
                  </div>
                </div>

                <p className="text-base text-slate-200 leading-relaxed font-light">
                  {activeTech.description}
                </p>

                <div className="space-y-3.5 border-t border-slate-800/40 pt-6">
                  <h5 className="text-[10px] font-mono uppercase font-black tracking-widest text-slate-400">
                    IDEAL PARA:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activeTech.idealPara.map((ideal, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeStyle.color }} />
                        <span>{ideal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Ventajas & Proyecto Recomendado */}
              <div className="space-y-8 text-left md:border-l md:border-slate-800/40 md:pl-10 lg:pl-14">
                <div className="space-y-4">
                  <h5 className="text-[10px] font-mono uppercase font-black tracking-widest text-slate-400">
                    VENTAJAS CORPORATIVAS:
                  </h5>
                  <div className="space-y-4">
                    {activeTech.ventajas.map((vent, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: activeStyle.color }} />
                        <span className="text-sm text-slate-300 font-light leading-relaxed">
                          {vent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-900 shadow-inner mt-6">
                  <div className="space-y-2">
                    <span className="text-[8px] font-mono uppercase text-slate-500 font-black tracking-widest block">
                      PROYECTO RECOMENDADO
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      {activeTech.proyectoRecomendado}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* BOTTOM ACTION COMMERCIAL CALLOUT STRIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-left select-none">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0d1c3a] to-[#0a142c] border border-cyan-500/10 shadow-2xl overflow-hidden">
          {/* Subtle background nodes in the corner */}
          <div className="absolute top-1/2 -left-16 w-32 h-32 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-16 w-32 h-32 rounded-full bg-violet-400/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 w-full">
            <div className="text-left max-w-2xl">
              <h5 className="font-display text-lg font-bold text-white tracking-tight leading-snug">
                ¿No sabes cuál tecnología necesita tu proyecto?
              </h5>
              <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                Nosotros nos encargamos de definir la arquitectura ideal para tus objetivos de negocio.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-display text-[10px] font-black tracking-wider uppercase flex items-center justify-center gap-2 transform transition-all duration-300 cursor-pointer text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/15 hover:scale-[1.02]"
              >
                <span>SOLICITAR RECOMENDACIÓN TECNOLÓGICA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl font-display text-[10px] font-black tracking-wider uppercase flex items-center justify-center gap-2 transform transition-all duration-300 cursor-pointer text-white bg-slate-950 hover:bg-slate-950 border border-slate-855 hover:scale-[1.02] border-slate-800"
              >
                <span>HABLAR CON UN INGENIERO</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
