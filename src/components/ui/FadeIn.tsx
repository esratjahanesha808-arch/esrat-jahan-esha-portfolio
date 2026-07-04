import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  viewportOnce?: boolean;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 20,
  className = '',
  viewportOnce = true,
  threshold = 0.1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, disable transitions & offset transforms
  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x, y };
  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: shouldReduceMotion
      ? { duration: 0.1 }
      : {
          type: 'spring' as const,
          stiffness: 100,
          damping: 16,
          mass: 1,
          delay,
          duration,
        },
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: viewportOnce, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
