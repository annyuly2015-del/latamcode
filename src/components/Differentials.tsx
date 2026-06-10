import { DIFFERENTIALS_DATA } from '../data';
import { motion } from 'motion/react';
import { Code, Zap, Users, Layers2, ShieldCheck, Cpu, Star } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Code: Code,
  Zap: Zap,
  Users: Users,
  Layers2: Layers2,
  ShieldCheck: ShieldCheck
};

export default function Differentials() {
  return (
    <section id="diferenciales" className="relative py-24 bg-slate-950/20 border-t border-white/5 bg-mesh-grid">
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/20 bg-violet-950/20">
            <span className="font-mono text-[10px] font-semibold tracking-wider text-violet-400 uppercase">
              Propuesta de Valor Corporativa
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            ¿Por qué elegir LATAMCODE?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            No somos intermediarios ni revendedores de plantillas precarias. Somos una fábrica de software con estándares locales e internacionales de alta rigurosidad técnica.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Differential Card 1: 100% Custom code (Large Span) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-2xl border border-white/10 bg-slate-900/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/15 hover:bg-slate-900/25 transition-all relative overflow-hidden group"
          >
            {/* Background cyan light trail */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform" />
            
            <div className="space-y-4 max-w-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-white/10 text-cyan-400">
                <Code className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">{DIFFERENTIALS_DATA[0].title}</h3>
              <p className="text-xs sm:text-sm text-slate-405 leading-relaxed font-light">
                {DIFFERENTIALS_DATA[0].description}
              </p>
            </div>

            {/* Metric flag */}
            <div className="mt-8 border-t border-white/5 pt-4 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs text-slate-500 uppercase">Garantía Técnica:</span>
                <p className="text-white text-xs font-semibold">Cero plantillas de baja performance</p>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-black text-cyan-400 leading-none">{DIFFERENTIALS_DATA[0].metric}</span>
                <p className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">{DIFFERENTIALS_DATA[0].metricLabel}</p>
              </div>
            </div>
          </motion.div>

          {/* Differential Card 2: Modern Tech (Small Span) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/15 hover:bg-slate-900/25 transition-all relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-white/10 text-violet-400">
                <Zap className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide">{DIFFERENTIALS_DATA[1].title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {DIFFERENTIALS_DATA[1].description}
              </p>
            </div>

            <div className="mt-6 border-t border-white/5 pt-4 flex items-end justify-between">
              <div className="text-right ml-auto">
                <span className="font-display text-3xl font-black text-violet-400 leading-none">{DIFFERENTIALS_DATA[1].metric}</span>
                <p className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">{DIFFERENTIALS_DATA[1].metricLabel}</p>
              </div>
            </div>
          </motion.div>

          {/* Differential Card 3: Specialized team (Small Span) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/15 hover:bg-slate-900/25 transition-all relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-white/10 text-[#3ddc84]">
                <Users className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide">{DIFFERENTIALS_DATA[2].title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {DIFFERENTIALS_DATA[2].description}
              </p>
            </div>

            <div className="mt-6 border-t border-white/5 pt-4 flex items-end justify-between">
              <div className="text-right ml-auto">
                <span className="font-display text-3xl font-black text-emerald-400 leading-none">{DIFFERENTIALS_DATA[2].metric}</span>
                <p className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">{DIFFERENTIALS_DATA[2].metricLabel}</p>
              </div>
            </div>
          </motion.div>

          {/* Differential Card 4: Scalable Architecture (Large Span - 2 cols on row) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 rounded-2xl border border-white/10 bg-slate-900/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/15 hover:bg-slate-900/25 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-violet-500/5 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-transform" />
            
            <div className="space-y-4 max-w-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-white/10 text-cyan-400">
                <Layers2 className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">{DIFFERENTIALS_DATA[3].title}</h3>
              <p className="text-xs sm:text-sm text-slate-405 leading-relaxed font-light">
                {DIFFERENTIALS_DATA[3].description}
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs text-slate-500 uppercase">Compromiso Cloud:</span>
                <p className="text-white text-xs font-semibold">Infraestructuras que autoescalan sin fricción</p>
              </div>
              <div className="text-right">
                <span className="font-display text-3xl font-black text-cyan-400 leading-none">{DIFFERENTIALS_DATA[3].metric}</span>
                <p className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1">{DIFFERENTIALS_DATA[3].metricLabel}</p>
              </div>
            </div>
          </motion.div>

          {/* Differential Card 5: SLA Continuous support (Full Column Span for striking layout) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 rounded-2xl border border-white/10 bg-slate-900/10 p-6 sm:p-8 hover:border-white/15 hover:bg-slate-900/25 transition-all relative overflow-hidden group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            {/* Absolute horizontal gradient strip */}
            <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-350 to-violet-500 opacity-60 pointer-events-none" />

            <div className="space-y-4 sm:max-w-xl md:max-w-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 border border-white/10 text-violet-400">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">{DIFFERENTIALS_DATA[4].title}</h3>
              <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-light">
                {DIFFERENTIALS_DATA[4].description}
              </p>
            </div>

            <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
              <span className="font-mono text-[10px] text-slate-450 uppercase sm:mb-1 block">CONTRATO SLA GARANTIZADO:</span>
              <div>
                <span className="font-display text-4xl font-extrabold text-[#c084fc] leading-none">{DIFFERENTIALS_DATA[4].metric}</span>
                <p className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-1 inline sm:block sm:ml-0 ml-1.5">{DIFFERENTIALS_DATA[4].metricLabel}</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
