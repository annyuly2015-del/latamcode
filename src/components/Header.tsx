import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronRight, Laptop } from 'lucide-react';
// Descomentar cuando subas el archivo real:
// import latamcodeLogo from "../assets/logos/latamcode-logo.png";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/70 border-b border-white/10 backdrop-blur-md py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Logo container at the left with flex-shrink-0 so it NEVER shrinks or compresses */}
            <div id="header-logo-container" className="flex items-center flex-shrink-0" style={{ width: 'auto', height: 'auto' }}>
              <a
                id="header-logo-link"
                href="#"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="group flex items-center"
                style={{ width: 'auto', height: 'auto' }}
              >
                {/* 
                  Reemplazar este bloque por:
                  <img src={latamcodeLogo} alt="LATAMCODE" className="w-[220px] h-auto object-contain flex-shrink-0" draggable={false} />
                */}
                <div className="flex items-center gap-3 select-none w-[220px]">
                  {/* Isotipo: Icono de Nodos Estilizado con </> sin caja ni bordes, con glow dual corporativo sutil */}
                  <div className="flex items-center justify-center w-[38px] h-[38px] shrink-0 transition-transform group-hover:scale-105 duration-300 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.25)] drop-shadow-[0_0_12px_rgba(59,130,246,0.15)]">
                    <svg 
                      className="w-full h-full" 
                      viewBox="0 0 200 200" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Left bracket */}
                      <path 
                        d="M75,25 L25,75 L25,125 L75,175" 
                        stroke="#ffffff" 
                        strokeWidth="15" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      {/* Left small internal ticks */}
                      <line 
                        x1="58" y1="52" x2="48" y2="62" 
                        stroke="#22d3ee" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                      />
                      <line 
                        x1="48" y1="138" x2="58" y2="148" 
                        stroke="#22d3ee" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                      />
                      
                      {/* Right bracket */}
                      <path 
                        d="M125,25 L175,75 L175,125 L125,175" 
                        stroke="#22d3ee" 
                        strokeWidth="15" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      {/* Right small internal ticks */}
                      <line 
                        x1="142" y1="52" x2="152" y2="62" 
                        stroke="#ffffff" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                      />
                      <line 
                        x1="152" y1="138" x2="142" y2="148" 
                        stroke="#ffffff" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                      />

                      {/* Center characters: < / > */}
                      <path 
                        d="M86,85 L72,100 L86,115" 
                        stroke="#ffffff" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M114,85 L128,100 L114,115" 
                        stroke="#22d3ee" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M106,80 L94,118" 
                        stroke="#ffffff" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                      />

                      {/* Outer terminal circular nodes */}
                      <circle cx="75" cy="25" r="16" fill="#ffffff" stroke="#22d3ee" strokeWidth="8" />
                      <circle cx="75" cy="175" r="16" fill="#ffffff" stroke="#22d3ee" strokeWidth="8" />
                      <circle cx="125" cy="25" r="16" fill="#22d3ee" stroke="#ffffff" strokeWidth="8" />
                      <circle cx="125" cy="175" r="16" fill="#22d3ee" stroke="#ffffff" strokeWidth="8" />
                    </svg>
                  </div>
                  
                  {/* Texto LATAMCODE y SOFTWARE FACTORY integrado y elegante */}
                  <div className="flex flex-col justify-center text-left">
                    <span className="text-base font-black tracking-wider text-white leading-none">
                      LATAM<span className="text-cyan-400">CODE</span>
                    </span>
                    <span className="text-[8px] font-extrabold tracking-[0.24em] text-slate-400 uppercase leading-none mt-1.5 whitespace-nowrap">
                      SOFTWARE FACTORY
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Centered & Flexible with uniform links */}
            <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
              {[
                { name: 'Servicios', id: 'servicios' },
                { name: 'Tecnologías', id: 'tecnologias' },
                { name: 'Soluciones Desarrolladas', id: 'soluciones-desarrolladas' },
                { name: 'Nosotros', id: 'diferenciales' },
                { name: 'Proceso', id: 'proceso' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:underline decoration-cyan-400 underline-offset-4 decoration-2 transition-all shrink-0"
                >
                  {item.name}
                </a>
              ))}
              {/* Hablemos navigation item sharing the exact same styling, alignment, and hover behavior */}
              <button
                onClick={onOpenContact}
                className="text-sm font-medium text-slate-300 hover:text-white hover:underline decoration-cyan-400 underline-offset-4 decoration-2 transition-all shrink-0 cursor-pointer bg-transparent border-none p-0 focus:outline-none"
              >
                Hablemos
              </button>
            </nav>

            {/* Desktop Actions / Mobile Menu Button - Right Container */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none"
                  aria-label="Abrir menú"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950 px-4 pt-4 pb-6 space-y-4">
            <div className="flex flex-col gap-4">
              {[
                { name: 'Servicios', id: 'servicios' },
                { name: 'Tecnologías', id: 'tecnologias' },
                { name: 'Soluciones Desarrolladas', id: 'soluciones-desarrolladas' },
                { name: 'Nosotros', id: 'diferenciales' },
                { name: 'Proceso', id: 'proceso' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-base font-semibold text-slate-300 hover:text-white py-1 transition-all"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Hablemos unified item */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-left text-base font-semibold text-slate-300 hover:text-white py-1 transition-all bg-transparent border-none p-0 focus:outline-none cursor-pointer"
              >
                Hablemos
              </button>
              <div className="border-t border-white/10 pt-4 mt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full text-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  Conversar con un Ingeniero
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
