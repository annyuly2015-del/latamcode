import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface Particle {
  id: number;
  type: 'dot' | 'braces' | 'bracket' | 'binary' | 'line' | 'square';
  content?: string;
  x: number; // percentage
  y: number; // percentage
  size: number; // pixels
  opacity: number;
  duration: number;
  delay: number;
  moveDirection: 'up' | 'down' | 'left' | 'right' | 'diagonal';
}

export default function AnimatedCodeBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Capture mouse coordinates for subtle parallax connection on particles
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Soft movement modifiers for particles based on mouse
  const parallaxX = useTransform(springX, [-400, 400], [-20, 20]);
  const parallaxY = useTransform(springY, [-400, 400], [-20, 20]);

  useEffect(() => {
    // Generate subtle particles
    const items: Particle[] = [];
    const types: Particle['type'][] = ['dot', 'braces', 'bracket', 'binary', 'line', 'square'];
    const binaryValues = ['0', '1', '10', '01'];
    const bracketValues = ['< >', '</>', '[]', '=>'];
    const braceValues = ['{ }', '{...}', 'f()'];
    const directions: Particle['moveDirection'][] = ['up', 'down', 'left', 'right', 'diagonal'];

    // ~35-45 is a generous but not crowded count for clean background
    for (let i = 0; i < 40; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      let content = '';
      if (type === 'binary') {
        content = binaryValues[Math.floor(Math.random() * binaryValues.length)];
      } else if (type === 'bracket') {
        content = bracketValues[Math.floor(Math.random() * bracketValues.length)];
      } else if (type === 'braces') {
        content = braceValues[Math.floor(Math.random() * braceValues.length)];
      }

      items.push({
        id: i,
        type,
        content,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === 'dot' ? Math.random() * 4 + 2 : Math.random() * 10 + 10,
        opacity: Math.random() * (0.22 - 0.08) + 0.08,
        duration: Math.random() * 25 + 20, // ultra slow speed
        delay: Math.random() * -20, // pre-start so they appear immediately distributed
        moveDirection: directions[Math.floor(Math.random() * directions.length)],
      });
    }
    setParticles(items);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xOffset = e.clientX - innerWidth / 2;
      const yOffset = e.clientY - innerHeight / 2;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 bg-slate-950 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Deep Midnight & Slate Gradients for profound darkness */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-955 via-slate-950 to-slate-900" />
      
      {/* Huge subtle glowing ambient blurs */}
      <div className="absolute -top-1/4 -left-1/4 w-[85%] aspect-square rounded-full bg-cyan-950/15 blur-[140px] opacity-80" />
      <div className="absolute -bottom-1/3 -right-1/4 w-[90%] aspect-square rounded-full bg-slate-900/20 blur-[160px] opacity-60" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-violet-950/10 blur-[130px] opacity-70" />

      {/* Settle Tech Haze - Noise effect layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/5 via-transparent to-transparent opacity-50" />

      {/* 2. Floating Code/Data Particles */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }} 
        className="absolute inset-0 w-full h-full"
      >
        {particles.map((p) => {
          // Calculate movement delta based on directions
          let animX = [0, 0];
          let animY = [0, 0];
          if (p.moveDirection === 'up') animY = [20, -20];
          else if (p.moveDirection === 'down') animY = [-20, 20];
          else if (p.moveDirection === 'left') animX = [20, -20];
          else if (p.moveDirection === 'right') animX = [-20, 20];
          else {
            animX = [-15, 15];
            animY = [-15, 15];
          }

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
                x: animX,
                y: animY,
                rotate: p.type !== 'dot' ? [0, 8, -8, 0] : 0,
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                fontFamily: 'monospace',
                color: 'rgba(34, 211, 238, 0.45)', // very soft cyan/teal
                textShadow: '0 0 8px rgba(6, 182, 212, 0.1)',
              }}
              className="font-mono flex items-center justify-center select-none"
            >
              {p.type === 'dot' && (
                <span 
                  style={{
                    width: `${Math.max(2, p.size / 2)}px`,
                    height: `${Math.max(2, p.size / 2)}px`,
                    opacity: p.opacity
                  }} 
                  className="rounded-full bg-cyan-400/40"
                />
              )}
              {p.type === 'square' && (
                <span 
                  style={{
                    width: `${Math.max(4, p.size / 2.5)}px`,
                    height: `${Math.max(4, p.size / 2.5)}px`,
                    borderColor: 'rgba(34, 211, 238, 0.25)',
                    opacity: p.opacity
                  }} 
                  className="border rounded-sm"
                />
              )}
              {p.type === 'line' && (
                <span 
                  style={{
                    width: '12px',
                    height: '1px',
                    backgroundColor: 'rgba(34, 211, 238, 0.3)',
                    opacity: p.opacity
                  }} 
                />
              )}
              {['binary', 'braces', 'bracket'].includes(p.type) && (
                <span style={{ opacity: p.opacity }} className="font-mono tracking-tight whitespace-nowrap text-cyan-300/30">
                  {p.content}
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
