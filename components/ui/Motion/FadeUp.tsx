'use client'

import { motion } from 'framer-motion'

import { FADE_UP_VARIANTS } from './Motion.constants'

import type { MotionBaseProps } from './Motion.types'

export default function FadeUp({ children, className, delay = 0 }: MotionBaseProps) {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={FADE_UP_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
