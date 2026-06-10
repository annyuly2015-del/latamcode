import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

export default function LatamCodeNeonLogo() {
  // Motion values for elegant 3D Parallax Mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to provide natural fluid physics (Vercel/Linear style inertia)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Transforms for subtle, ultra-professional 3D Tilt
  const rotateX = useTransform(springY, [-400, 400], [10, -10]); // Rotates slightly in X based on Y mouse offset
  const rotateY = useTransform(springX, [-400, 400], [-10, 10]); // Rotates slightly in Y based on X mouse offset
  const translateX = useTransform(springX, [-400, 400], [-8, 8]); // Horizontal float drifting
  const translateY = useTransform(springY, [-400, 400], [-8, 8]); // Vertical float drifting

  // Dynamic floor reflection displacement
  const reflexTranslateX = useTransform(springX, [-400, 400], [-12, 12]);
  const reflexSkewX = useTransform(springX, [-400, 400], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Coordinates relative to center of the viewport
      const xOffset = e.clientX - innerWidth / 2;
      const yOffset = e.clientY - innerHeight / 2;

      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[450px] aspect-square select-none py-4">
      
      {/* 1. Halo Radial Detrás del Logo con CSS (Sin contenedores rectangulares) */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0.04) 45%, transparent 68%)',
          filter: 'blur(30px)',
        }}
      />

      {/* 2. Capa de Bruma/Haze Ambient Detrás del Isotipo */}
      <motion.div
        style={{
          x: useTransform(translateX, (v) => v * 0.5),
          y: useTransform(translateY, (v) => v * 0.5),
        }}
        className="absolute w-[240px] h-[240px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none"
      />

      {/* 3. Isotipo Interactivo Flotando Libremente */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
        className="relative z-10 w-[78%] h-[78%] flex items-center justify-center pointer-events-none group"
      >
        {/* Glow & Neon Styles applied directly to SVG */}
        <svg 
          className="w-full h-full overflow-visible" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.50)) drop-shadow(0 0 26px rgba(6,182,212,0.30))'
          }}
        >
          {/* Subtle slow breathing anim trigger on lights path */}
          <g className="animate-pulse" style={{ animationDuration: '4.5s' }}>
            
            {/* IZQUIERDA: Estructura de Brackets con Nodos Circulares */}
            {/* Línea exterior del bracket izquierdo */}
            <path 
              d="M75,25 L25,75 L25,125 L75,175" 
              stroke="#ffffff" 
              strokeWidth="2.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeOpacity="0.95"
            />
            
            {/* Ticks interiores paralelos del bracket izquierdo */}
            <line 
              x1="58" y1="52" x2="48" y2="62" 
              stroke="#22d3ee" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            <line 
              x1="48" y1="138" x2="58" y2="148" 
              stroke="#22d3ee" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* Símbolo menor que "<" interior */}
            <path 
              d="M86,85 L72,100 L86,115" 
              stroke="#ffffff" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeOpacity="0.9"
            />

            {/* DERECHA: Estructura de Brackets con Nodos Circulares (Simetría) */}
            {/* Línea exterior del bracket derecho */}
            <path 
              d="M125,25 L175,75 L175,125 L125,175" 
              stroke="#22d3ee" 
              strokeWidth="2.8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeOpacity="0.9"
            />
            
            {/* Ticks interiores paralelos del bracket derecho */}
            <line 
              x1="142" y1="52" x2="152" y2="62" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            <line 
              x1="152" y1="138" x2="142" y2="148" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeOpacity="0.8"
            />

            {/* Símbolo mayor que ">" interior */}
            <path 
              d="M114,85 L128,100 L114,115" 
              stroke="#22d3ee" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeOpacity="0.9"
            />

            {/* CENTRO: Diagonal de Código "/" */}
            <path 
              d="M106,80 L94,120" 
              stroke="#ffffff" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              strokeOpacity="0.95"
            />

            {/* NODOS CIRCULARES EXTERIORES */}
            {/* Nodo Superior Izquierdo */}
            <circle cx="75" cy="25" r="4.5" fill="#ffffff" stroke="#22d3ee" strokeWidth="1.5" />
            
            {/* Nodo Inferior Izquierdo */}
            <circle cx="75" cy="175" r="4.5" fill="#ffffff" stroke="#22d3ee" strokeWidth="1.5" />

            {/* Nodo Superior Derecho */}
            <circle cx="125" cy="25" r="4.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />

            {/* Nodo Inferior Derecho */}
            <circle cx="125" cy="175" r="4.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />

          </g>

          {/* Spark luminoso viajando sutilmente alrededor de la parte exterior guiado */}
          <motion.circle
            cx="75"
            cy="25"
            r="2"
            fill="#ffffff"
            animate={{
              cx: [75, 25, 25, 75, 125, 175, 175, 125, 75],
              cy: [25, 75, 125, 175, 175, 125, 75, 25, 25]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </motion.div>

      {/* 4. Reflejo Sutil Elíptico de Luz en el Suelo */}
      <motion.div
        style={{
          x: reflexTranslateX,
          skewX: reflexSkewX,
        }}
        className="w-[180px] h-[6px] bg-cyan-400/15 blur-[6px] rounded-full mx-auto mt-2 shadow-[0_0_12px_rgba(34,211,238,0.25)] animate-pulse pointer-events-none"
        animate={{
          scaleX: [0.93, 1.07, 0.93],
          opacity: [0.7, 0.95, 0.7]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 5. Partículas sutiles flotantes libres cercanas que orbitan en 3D */}
      <motion.div 
        style={{
          x: useTransform(springX, [-400, 400], [-25, 25]),
          y: useTransform(springY, [-400, 400], [-25, 25]),
        }} 
        className="absolute inset-x-0 inset-y-0 pointer-events-none select-none z-20"
      >
        {/* Pequeña partícula blanca arriba izq */}
        <div className="absolute top-12 left-10 w-1.5 h-1.5 rounded-full bg-white/40 blur-[0.5px]" />
        {/* Pequeña partícula cyan abajo der */}
        <div className="absolute bottom-16 right-12 w-1 h-1 rounded-full bg-cyan-400/35" />
        {/* Bracket sutil flotante */}
        <div className="absolute top-1/3 right-4 text-[10px] font-mono text-cyan-400/20 font-bold select-none">{`< />`}</div>
        {/* Llave sutil flotante */}
        <div className="absolute bottom-1/3 left-2 text-[10px] font-mono text-white/15 font-bold select-none">{"{ }"}</div>
      </motion.div>

    </div>
  );
}
