import type { ReactNode } from 'react'

export type FocusCardIconVariant = 'green' | 'amber' | 'blue' | 'terra'

export type FocusCard = {
  id: string
  iconNode: ReactNode
  iconVariant: FocusCardIconVariant
  title: string
  description: string
  learnMoreHref: string
}
