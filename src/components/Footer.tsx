import React from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Github, Shield, Terminal, Users } from 'lucide-react';

interface FooterProps {
}

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8 overflow-hidden bg-mesh-grid">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo and Pitch */}
          <div className="md:col-span-4 space-y-5">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center gap-2.5"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-slate-950">
                  <Code className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-extrabold tracking-widest text-white leading-none">
                  LATAM<span className="text-cyan-400">CODE</span>
                </span>
                <span className="font-mono text-[8px] tracking-widest text-slate-500 uppercase mt-0.5">
                  SOFTWARE FACTORY
                </span>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Desarrollamos soluciones robustas de software corporativo a medida. Brindamos servicios ágiles, duraderos y enfocados 100% en el crecimiento de compañías líderes en Colombia y Perú.
            </p>

            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 border border-white/5 text-slate-450 hover:text-white hover:border-white/15 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 p-2 border border-white/0.5 text-slate-455 hover:text-white hover:border-white/15 transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Menú Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase">Navegación</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              {[
                { name: 'Servicios de Fábrica', id: 'servicios' },
                { name: 'Tecnologías Soportadas', id: 'tecnologias' },
                { name: 'Soluciones Desarrolladas', id: 'soluciones-desarrolladas' },
                { name: 'Diferenciales', id: 'diferenciales' },
                { name: 'Proceso de Ingeniería', id: 'proceso' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Localized Contacts Colombia & Peru */}
          <div className="md:col-span-5 space-y-5">
            <h4 className="font-display text-xs font-bold text-white tracking-widest uppercase">Oficinas y Contactos Regionales</h4>
            
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xxs">COLOMBIA (Sede Bogotá):</p>
                  <p className="text-xxs leading-normal font-light">Calle 93B #11-30, Chicó Norte, Bogotá D.C.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-violet-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xxs">PERÚ (Sede Lima):</p>
                  <p className="text-xxs leading-normal font-light">Av. Felipe Pardo y Aliaga 640, San Isidro, Lima 15073</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xxs tracking-tight">contacto@latamcode.co</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-violet-400" />
                  <span className="font-mono text-xxs tracking-tight">+57 (312) 441-2090</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate specifications and fine print */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-cyan-500/60" />
            <span>LATAMCODE Software Factory SAS © {currentYear}. Todos los derechos reservados.</span>
          </div>

          {/* Compliance stamps */}
          <div className="flex items-center gap-4">
            <span className="font-mono flex items-center gap-1">
              <Terminal className="h-3 w-3 text-violet-400/80" />
              OWASP SECURITY STAMPED
            </span>
            <span className="border-l border-white/10 pl-4">ISO 27001 COMPLIANT BLUEPRINT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
