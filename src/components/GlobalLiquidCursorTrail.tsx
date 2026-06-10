import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  blur: number;
  opacity: number;
  isDrag: boolean;
}

export default function GlobalLiquidCursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);
  const nextId = useRef(0);

  // Set dragging event listeners to upgrade aesthetic density under drag/press events
  useEffect(() => {
    const handleDown = () => setIsDragging(true);
    const handleUp = () => setIsDragging(false);

    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);

    // Backup safety listeners
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchstart', handleDown);
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);

      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  // Capture cursor positions over absolute viewport coordinate grid
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      
      // Dynamic throttling: 16ms under dragging, 28ms under default cursor move
      const throttleTime = isDragging ? 16 : 28;
      if (now - lastTime.current < throttleTime) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      const dx = clientX - lastPosition.current.x;
      const dy = clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only generate particles if mouse is moving or first particle
      if (distance > 2 || particles.length === 0) {
        lastTime.current = now;
        lastPosition.current = { x: clientX, y: clientY };

        const currentId = nextId.current++;

        // Visual specifications per user guidelines
        const size = isDragging ? 190 : 120;
        const opacity = isDragging ? 0.65 : 0.45;
        const blur = isDragging ? 32 : 24;

        const newParticle: Particle = {
          id: currentId,
          x: clientX,
          y: clientY,
          size,
          blur,
          opacity,
          isDrag: isDragging
        };

        setParticles((prev) => {
          const updated = [...prev, newParticle];
          // Cap at 20 active particles to optimize hardware acceleration
          if (updated.length > 20) {
            return updated.slice(updated.length - 20);
          }
          return updated;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [isDragging, particles.length]);

  return (
    <div
      id="global-liquid-cursor-trail-stage"
      className="fixed inset-0 w-full h-full pointer-events-none select-none z-[45] overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 0,
              scale: 0.35,
              x: p.x,
              y: p.y
            }}
            animate={{
              opacity: [0, p.opacity, p.opacity * 0.4, 0],
              scale: [0.35, 1, 1.1, 0.9]
            }}
            exit={{
              opacity: 0,
              scale: 0.4,
              transition: { duration: 0.15 }
            }}
            transition={{
              duration: 0.9, // exactly 900ms longevity
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${p.size}px`,
              height: `${p.size}px`,
              marginLeft: `-${p.size / 2}px`,
              marginTop: `-${p.size / 2}px`,
              filter: `blur(${p.blur}px)`,
              background: 'radial-gradient(circle, rgba(255, 45, 170, 0.65) 0%, rgba(157, 78, 221, 0.52) 30%, rgba(0, 212, 255, 0.45) 55%, rgba(37, 99, 235, 0.28) 75%, transparent 100%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
