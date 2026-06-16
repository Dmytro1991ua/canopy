import type { ReactNode } from 'react'

export type MotionBaseProps = Readonly<{
  children: ReactNode
  className?: string
  delay?: number
}>

export type SlideInProps = MotionBaseProps &
  Readonly<{
    direction?: 'left' | 'right'
  }>
