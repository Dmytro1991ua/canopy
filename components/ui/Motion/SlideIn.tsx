'use client'

import { motion, useReducedMotion } from 'framer-motion'

import { SLIDE_IN_VARIANTS } from './Motion.constants'

import type { SlideInProps } from './Motion.types'

export default function SlideIn({
  children,
  className,
  delay = 0,
  direction = 'left',
}: SlideInProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      custom={delay}
      variants={SLIDE_IN_VARIANTS[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
