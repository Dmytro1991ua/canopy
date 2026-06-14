import type { LogoProps } from './Logo.types'

export default function Logo({ size = 28, className = 'text-gold' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14 2C8 2 4 7 4 13c0 4 2.5 7.5 6 9.5V24h8v-1.5C21.5 20.5 24 17 24 13c0-6-4-11-10-11z"
        fill="currentColor"
        opacity="0.85"
      />
      <path d="M14 24v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
