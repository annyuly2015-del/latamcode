import { Check, Mail, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenContact: (interestId?: string) => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section id="contacto" className="relative py-28 overflow-hidden bg-slate-950/40 bg-mesh-dots">
      {/* Absolute glow grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-550/10 blur-[125px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Border Glow Framer-like block */}
        <div className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl overflow-hidden group">
          
          {/* Subtle light lines across diagonal corners */}
          <div className="absolute -inset-y-24 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent rotate-12 pointer-events-none" />
          <div className="absolute -inset-y-24 right-1/3 w-[1px] bg-gradient-to-b from-transparent via-violet-500/10 to-transparent rotate-12 pointer-events-none" />

          {/* Interactive badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-950/30">
            <Sparkles className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
            <span className="font-mono text-[9px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Asesoría Técnica Gratuita
            </span>
          </div>

          {/* Titles */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Construyamos la solución que tu empresa necesita.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Transformamos ideas y requerimientos complejos en plataformas digitales robustas, blindadas ante la ciberdelincuencia, elásticas y totalmente preparadas para escalar.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenContact()}
              className="group cursor-pointer relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/35 transition-all text-center flex items-center justify-center gap-2 w-full"
            >
              Agendar Reunión Técnica
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Operational guarantees underneath */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xxs sm:text-xs text-slate-400">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Acuerdo NDA en 4 hrs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <span>Factura Local COP / PEN</span>
            </div>
            <div className="flex items-center justify-center gap-2 col-span-2 sm:col-span-1">
              <div className="h-2 w-2 rounded-full bg-violet-400" />
              <span>100% Código Propio</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
