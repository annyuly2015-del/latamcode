import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Mail, Phone, Building2, ChevronRight, Cpu, Sparkles, Shield, Rocket } from 'lucide-react';
import { addLead } from '../lib/leadsStorage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function ContactModal({ isOpen, onClose, initialInterest = 'software-a-medida' }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    pais: 'Colombia',
    interes: initialInterest,
    alcance: '',
    presupuesto: '$5,000 - $15,000 USD'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeTab, setActiveTab] = useState<'form' | 'results'>('form');

  const isColombia = formData.pais === 'Colombia';
  const isPeru = formData.pais === 'Perú';
  const currency = isColombia ? 'PESOS / COP (con facturación local)' : isPeru ? 'SOLES / PEN (con facturación local)' : 'USD / Transferencia';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.empresa) {
      return;
    }
    setStatus('submitting');
    
    // Save to CRM storage
    addLead({
      nombre: formData.nombre,
      empresa: formData.empresa,
      correo: formData.correo,
      telefono: formData.telefono,
      pais: formData.pais,
      interes: formData.interes,
      alcance: formData.alcance || 'Ninguno especificado (diagnóstico inicial de flujo)',
      presupuesto: formData.presupuesto
    });

    setTimeout(() => {
      setStatus('success');
      setActiveTab('results');
    }, 1800);
  };

  // Generate dynamic diagnosis recommendation based on form selection
  const getArchitectureBlueprint = () => {
    switch (formData.interes) {
      case 'software-a-medida':
        return {
          title: 'Sistema Empresarial Escalable',
          database: 'PostgreSQL en AWS Aurora Serverless',
          backend: 'Node.js con TypeScript (Framework NestJS)',
          frontend: 'React 19 + Tailwind CSS v4',
          compliance: `Cumplimiento de Ley de Protección de Datos Personales (${isColombia ? 'Ley 1581 Colombia' : isPeru ? 'Ley 29733 Perú' : 'Estándar General'})`,
          timeframe: '12 - 16 Semanas Estimadas',
          notes: 'Arquitectura diseñada para alta transaccionalidad con balanceadores de carga integrales.'
        };
      case 'aplicaciones-web':
        return {
          title: 'Arquitectura Web Avanzada SaaS',
          database: 'PostgreSQL con réplicas de lectura localizadas',
          backend: 'Laravel + Laravel Octane para tiempos de carga <150ms',
          frontend: 'Next.js con React Server Components (Vercel Edge)',
          compliance: 'SEO Técnico optimizado, accesibilidad WCAG y microesquemas estructurados',
          timeframe: '8 - 12 Semanas Estimadas',
          notes: 'CDN distribuida con enrutamiento de red inteligente para óptima performance regional.'
        };
      case 'aplicaciones-moviles':
        return {
          title: 'Arquitectura Móvil Multiplataforma',
          database: 'SQLite local encriptado + Sincronización remota',
          backend: 'Node.js Express + WebSocket Gateway para tiempo real',
          frontend: 'Flutter con motor gráfico optimizado para iOS/Android',
          compliance: 'Registro cifrado con datos biométricos locales y almacenamiento offline seguro',
          timeframe: '10 - 14 Semanas Estimadas',
          notes: 'Distribución fluida en App Store y Google Play con tuberías automatizadas de CI/CD.'
        };
      case 'automatizacion-ia':
        return {
          title: 'Eje de Automatización e Inteligencia Artificial',
          database: 'Vector Database Pinecone / Qdrant + Firestore',
          backend: 'FastAPI (Python) + NestJS TypeScript Orchestrator',
          frontend: 'Dashboard Ejecutivo en React + Gráficos Recharts',
          compliance: 'Protección de accesos para LLM y logs de encriptación end-to-end',
          timeframe: '6 - 10 Semanas Estimadas',
          notes: 'Integración vía conectores asíncronos y procesamiento masivo programado.'
        };
      default:
        return {
          title: 'Integración y Solución Empresarial Híbrida',
          database: 'Redis Cache + PostgreSQL',
          backend: 'Node.js con pasarela de colas de mensajes robustas (BullMQ)',
          frontend: 'React Web Viewport / App de control',
          compliance: 'Protocolos de API seguros con rotación de claves TLS 1.3',
          timeframe: '8 - 12 Semanas Estimadas',
          notes: 'Sincronización robusta tolerante al fallo con ERPs tipo SAP y pasarelas de pago locales.'
        };
    }
  };

  const pb = getArchitectureBlueprint();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-slate-100 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-5 bg-slate-900/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-550 to-violet-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-slate-950 font-display text-sm font-bold text-cyan-400">
                    LC
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    {status === 'success' ? 'DIAGNÓSTICO ARQUITECTÓNICO' : 'INICIAR PROYECTO TECNOLÓGICO'}
                  </h3>
                  <p className="text-xs text-slate-400">LATAMCODE Software Factory • Colombia & Perú</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content area - scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {activeTab === 'form' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column: Context guidelines */}
                  <div className="md:col-span-5 space-y-6">
                    <div>
                      <h4 className="font-display text-base font-bold text-white mb-2">¿Cómo desarrollamos?</h4>
                      <p className="text-sm text-slate-450 leading-relaxed">
                        Analizamos la escala y lógica interna de tu negocio para establecer una base de código limpia. En 48 horas coordinaremos un taller de profundización técnica.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-950 text-cyan-450">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Facturación 100% Local</p>
                          <p className="text-xxs text-slate-400">Emisión de facturas corporativas en Colombia (COP) y Perú (PEN).</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-950 text-cyan-450">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Acuerdo de Confidencialidad (NDA)</p>
                          <p className="text-xxs text-slate-400">Protección estricta de propiedad intelectual previo a compartir planos.</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-950 text-cyan-450">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Canales Dedicados en Slack / Teams</p>
                          <p className="text-xxs text-slate-400">Comunicación transparente directa con arquitectos senior.</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-5 text-xxs text-slate-500">
                      Procesado bajo estándares de seguridad internacional. Al enviar, aceptas que LATAMCODE contacte a tu organización para el análisis técnico.
                    </div>
                  </div>

                  {/* Right Column: Form */}
                  <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="nombre">
                          Tu Nombre *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="nombre"
                            required
                            type-name="text"
                            placeholder="Ej. Carlos Mendoza"
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="empresa">
                          Empresa / Entidad *
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                            <Building2 className="h-4 w-4" />
                          </div>
                          <input
                            type="text"
                            id="empresa"
                            required
                            placeholder="Ej. Inversiones S.A."
                            value={formData.empresa}
                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-slate-900/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="correo">
                          Correo Institucional *
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                            <Mail className="h-4 w-4" />
                          </div>
                          <input
                            type="email"
                            id="correo"
                            required
                            placeholder="carlos@empresa.com"
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-slate-900/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="telefono">
                          Teléfono de Contacto *
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                            <Phone className="h-4 w-4" />
                          </div>
                          <input
                            type="tel"
                            id="telefono"
                            required
                            placeholder="+57 300..."
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            className="w-full rounded-lg border border-white/10 bg-slate-900/50 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="pais">
                          Sede Principal
                        </label>
                        <select
                          id="pais"
                          value={formData.pais}
                          onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all select-dark-bg"
                        >
                          <option value="Colombia">Colombia 🇨🇴</option>
                          <option value="Perú">Perú 🇵🇪</option>
                          <option value="Otros">Otros (Latinoamérica)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="interes">
                          Servicio Requerido
                        </label>
                        <select
                          id="interes"
                          value={formData.interes}
                          onChange={(e) => setFormData({ ...formData, interes: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-white focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all select-dark-bg"
                        >
                          <option value="software-a-medida">Desarrollo a Medida</option>
                          <option value="aplicaciones-web">Aplicaciones Web Corporativas</option>
                          <option value="aplicaciones-moviles">Aplicaciones Móviles Premium</option>
                          <option value="automatizacion-ia">Automatización e IA</option>
                          <option value="integraciones-empresariales">Integraciones Complex API</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="alcance">
                        Cuéntanos brevemente sobre las necesidades de tu sistema *
                      </label>
                      <textarea
                        id="alcance"
                        required
                        rows={3}
                        placeholder="Ej. Buscamos optimizar la gestión de nuestro inventario y conectarlo en tiempo real con SAP y una app móvil para operarios."
                        value={formData.alcance}
                        onChange={(e) => setFormData({ ...formData, alcance: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Presupuesto Estimado del Proyecto (USD)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['$5k - $15k USD', '$15k - $40k USD', '+$40k USD'].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setFormData({ ...formData, presupuesto: p })}
                            className={`rounded-lg border py-2 text-xxs font-medium transition-all ${
                              formData.presupuesto === p
                                ? 'border-cyan-500 bg-cyan-950/30 text-cyan-450 shadow-md shadow-cyan-500/5'
                                : 'border-white/10 bg-slate-900/30 text-slate-400 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full group relative mt-4 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Procesando Requisitos Técnicos...
                        </>
                      ) : (
                        <>
                          Generar Diagnóstico Inicial Free
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Success screen with Technical Diagnostic blueprint proposal! */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 max-w-2xl mx-auto py-4"
                >
                  <div className="text-center space-y-2 mb-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/80 text-emerald-450 border border-emerald-500/30 mb-2">
                      <Check className="h-6 w-6" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-white">¡Requisitos Recibidos Exitosamente!</h4>
                    <p className="text-sm text-slate-400">
                      Hola <span className="text-white font-medium">{formData.nombre}</span>, hemos formulado una sugerencia arquitectónica preliminar para <span className="text-white font-medium">{formData.empresa}</span>.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-slate-900/40 p-5 md:p-6 space-y-4 shadow-xl">
                    <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                      <Cpu className="h-5 w-5 text-cyan-455" />
                      <span className="text-sm font-bold tracking-wide text-white font-display">PROPUESTA DE BLUEPRINT PREMEDITADA</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <span className="text-slate-450">Esquema del Sistema:</span>
                        <p className="text-white font-medium font-display">{pb.title}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-450">Tecnología Soportada (React/Vite):</span>
                        <p className="text-white font-mono">{pb.frontend}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-450">Base de Datos Centralizada:</span>
                        <p className="text-[#a78bfa] font-mono">{pb.database}</p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-slate-450">Motor de Procesamiento Backend:</span>
                        <p className="text-[#a78bfa] font-mono">{pb.backend}</p>
                      </div>

                      <div className="space-y-1 sm:col-span-2 border-t border-white/5 pt-2">
                        <span className="text-slate-450">Estándar Legal y Cumplimiento:</span>
                        <p className="text-white font-medium flex items-center gap-1.5 mt-0.5">
                          <Shield className="h-3.5 w-3.5 text-cyan-400 inline" />
                          {pb.compliance}
                        </p>
                      </div>

                      <div className="space-y-1 sm:col-span-2 border-t border-white/5 pt-2">
                        <span className="text-slate-450">Estimación de Desarrollo LATAMCODE Sprints:</span>
                        <p className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
                          <Rocket className="h-3.5 w-3.5 text-violet-400 inline" />
                          {pb.timeframe} • Facturación local en {currency}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-cyan-950/20 border border-cyan-800/20 p-3 mt-4 text-xxs text-slate-350 leading-relaxed">
                      <Sparkles className="h-4 w-4 text-cyan-400 inline mr-1.5 shrink-0 align-middle" />
                      <strong>Análisis Predictivo:</strong> {pb.notes} Nuestro Director de Tecnología revisará esto de forma prioritaria y coordinará contigo vía <strong className="text-white">{formData.correo}</strong> en menos de 24 horas.
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center pt-2">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setActiveTab('form');
                      }}
                      className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                    >
                      Editar Formularios
                    </button>
                    <button
                      onClick={onClose}
                      className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-slate-950 hover:bg-slate-200 transition-all"
                    >
                      Cerrar y Volver
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
