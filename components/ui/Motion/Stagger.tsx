'use client'

import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import { STAGGER_CONTAINER_VARIANTS, STAGGER_ITEM_VARIANTS } from './Motion.constants'
import type { MotionBaseProps } from './Motion.types'

type StaggerChildProps = Readonly<{
  children: ReactNode
  className?: string
}>

export function StaggerItem({ children, className }: StaggerChildProps) {
  return (
    <motion.div className={className} variants={STAGGER_ITEM_VARIANTS}>
      {children}
    </motion.div>
  )
}

export default function Stagger({ children, className }: Omit<MotionBaseProps, 'delay'>) {
  return (
    <motion.div
      className={className}
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  )
}
