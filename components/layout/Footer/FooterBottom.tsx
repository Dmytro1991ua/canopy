import { FOOTER_COPYRIGHT, LEGAL_LINKS } from './Footer.constants'

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
      <p className="text-center text-xs text-cream/30">{FOOTER_COPYRIGHT}</p>

      <nav aria-label="Legal links" className="flex gap-6">
        {LEGAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs text-cream/30 transition-colors duration-200 hover:text-cream/70"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
