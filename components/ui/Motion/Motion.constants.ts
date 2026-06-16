import type { Variants } from 'framer-motion'

// Expo-out: snappy entrance used by Linear, Vercel, Stripe
const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay, duration: 0.75, ease: EXPO_OUT },
  }),
}

export const SCALE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, type: 'spring', stiffness: 260, damping: 22 },
  }),
}

export const SLIDE_IN_VARIANTS: Record<'left' | 'right', Variants> = {
  left: {
    hidden: { opacity: 0, x: -56 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.7, ease: EXPO_OUT },
    }),
  },
  right: {
    hidden: { opacity: 0, x: 56 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.7, ease: EXPO_OUT },
    }),
  },
}

export const STAGGER_CONTAINER_VARIANTS: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

// Spring pop — each stagger child entrance
export const STAGGER_ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
}
