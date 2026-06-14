import { VARIANT_CLASS } from './Button.constants'

import type { ButtonProps } from './Button.types'

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${VARIANT_CLASS[variant]} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
