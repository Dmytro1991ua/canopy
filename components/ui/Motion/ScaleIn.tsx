'use client'

import { motion } from 'framer-motion'

import { SCALE_IN_VARIANTS } from './Motion.constants'

import type { MotionBaseProps } from './Motion.types'

export default function ScaleIn({ children, className, delay = 0 }: MotionBaseProps) {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={SCALE_IN_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
