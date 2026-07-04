import type { Variants } from 'framer-motion';

// Standard premium spring transitions
export const springTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 16,
  mass: 1,
};

export const springTransitionSlow = {
  type: 'spring' as const,
  stiffness: 50,
  damping: 12,
  mass: 1,
};

// Transform & opacity only animations (GPU accelerated per CLAUDE.md)
export const fadeInVariants = (duration = 0.5, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export const fadeUpVariants = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
      delay,
    },
  },
});

export const fadeDownVariants = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springTransition,
      delay,
    },
  },
});

export const scaleInVariants = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...springTransition,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideInLeftVariants = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springTransition,
      delay,
    },
  },
});

export const slideInRightVariants = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...springTransition,
      delay,
    },
  },
});
