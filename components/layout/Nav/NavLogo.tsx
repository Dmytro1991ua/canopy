import Link from 'next/link'

import Logo from '@/components/ui/Logo'

type Props = Readonly<{
  onClick?: () => void
}>

export default function NavLogo({ onClick }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2" onClick={onClick}>
      <Logo size={28} />
      <span className="font-display text-xl font-bold text-cream">Canopy</span>
    </Link>
  )
}
