import Link from 'next/link'

type Props = Readonly<{
  onClick?: () => void
}>

export default function NavLogo({ onClick }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2" onClick={onClick}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="text-gold"
      >
        <path
          d="M14 2C8 2 4 7 4 13c0 4 2.5 7.5 6 9.5V24h8v-1.5C21.5 20.5 24 17 24 13c0-6-4-11-10-11z"
          fill="currentColor"
          opacity="0.85"
        />
        <path d="M14 24v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xl font-bold text-cream">Canopy</span>
    </Link>
  )
}
