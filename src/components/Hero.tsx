import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Check } from 'lucide-react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import LatamCodeNeonLogo from './LatamCodeNeonLogo';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const handleScrollToCases = () => {
    const element = document.getElementById('soluciones-desarrolladas');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-auto md:min-h-screen flex items-center justify-center pt-[120px] pb-[80px] md:pt-24 md:pb-16 overflow-hidden bg-slate-950"
    >
      {/* 1. Fondo Oscuro Premium con Bruma Haze y Partículas Suspendidas */}
      <AnimatedCodeBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LADO IZQUIERDO: Texto y Llamadas a la Acción */}
          <div className="relative z-10 lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Badge Premium */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Software Factory Latam
              </span>
            </motion.div>

            {/* Títulos y Subtítulos */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                DESARROLLAMOS{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  SOFTWARE A MEDIDA
                </span>{' '}
                PARA EMPRESAS QUE QUIEREN ESCALAR
              </motion.h1>

              {/* Subtítulo Copy Depurado */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Creamos plataformas, aplicaciones y solutions digitales diseñadas para optimizar procesos, automatizar operaciones y acelerar el crecimiento empresarial.
              </motion.p>
            </div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto group cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/25 transition-all text-center flex items-center justify-center gap-2"
              >
                Iniciar Proyecto
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleScrollToCases}
                className="w-full sm:w-auto group cursor-pointer relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white hover:border-white/20 hover:bg-slate-900/60 transition-all text-center flex items-center justify-center gap-2"
              >
                Ver Soluciones Desarrolladas
              </button>
            </motion.div>

            {/* Bullets inferiores con Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 md:pt-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-2 text-xs">
                {[
                  'Desarrollo Web',
                  'Aplicaciones Móviles',
                  'IA y Automatización',
                  'Integraciones Empresariales'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/25">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-slate-200 font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* LADO DERECHO: Isotipo LatamCode Neón Interactivo (Parallax 3D & Pulsación de Luz) */}
          <div className="absolute md:relative z-0 md:z-10 opacity-[0.28] md:opacity-100 w-[125%] max-w-none md:w-full md:max-w-full bottom-[4%] left-1/2 -translate-x-1/2 md:translate-x-0 lg:-translate-x-24 pointer-events-none md:pointer-events-auto lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              <LatamCodeNeonLogo />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
