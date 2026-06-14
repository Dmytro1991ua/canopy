import type { ButtonHTMLAttributes } from 'react'

export type Variant = 'primary' | 'outline' | 'ghost'

export type ButtonProps = Readonly<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant
  }
>
