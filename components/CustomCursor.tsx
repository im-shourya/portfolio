'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default true to avoid hydration mismatch, update in effect

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over any clickable element
      const isClickable = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('.cursor-pointer');
      setIsHovering(!!isClickable);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', updateHoverState);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', updateHoverState);
      };
    }
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Solid center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#E8A325] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.1,
        }}
      />

      {/* Expanding hollow ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-[#E8A325] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(232,163,37,0.1)' : 'rgba(232,163,37,0)',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.5,
        }}
      />
    </>
  );
}
