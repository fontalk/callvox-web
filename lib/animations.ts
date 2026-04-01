import type { Variants, Transition } from 'framer-motion'

// Standard fade up animation for most content
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

// Smaller fade up for list items and cards
export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

// Fade in without movement
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Scale up animation for modals/dialogs
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

// Stagger container for lists/grids
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// Slower stagger for larger elements
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

// Standard transition
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
}

// Quick transition for interactive elements
export const quickTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
}

// Spring transition for bouncy effects
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

// Common useInView options
export const inViewOptions = {
  once: true,
  margin: '-100px' as const,
}
