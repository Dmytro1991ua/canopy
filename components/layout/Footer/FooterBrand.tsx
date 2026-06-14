import Link from 'next/link'

import Logo from '@/components/ui/Logo'

import { FOOTER_TAGLINE, SOCIAL_LINKS } from './Footer.constants'
import FooterSocialIcon from './FooterSocialIcon'

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      <Link href="/" className="inline-flex items-center gap-2" aria-label="Canopy home">
        <Logo size={26} />
        <span className="font-display text-xl font-bold text-cream">Canopy</span>
      </Link>

      <p className="max-w-xs text-sm leading-relaxed text-cream/45">{FOOTER_TAGLINE}</p>

      <nav aria-label="Social media links" className="flex gap-3">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.platform}
            href={social.href}
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber hover:bg-amber hover:text-green-deep"
          >
            <FooterSocialIcon platform={social.platform} />
          </a>
        ))}
      </nav>
    </div>
  )
}
