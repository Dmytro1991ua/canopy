import type { LegalLink, SocialLink } from './Footer.types'

export const FOOTER_TAGLINE =
  "We believe a liveable planet isn't an idealist dream — it's an achievable outcome if enough of us decide to act. Join us."

export const FOOTER_COPYRIGHT =
  '© 2026 Canopy Foundation. All rights reserved. A registered environmental non-profit.'

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'twitter', label: 'Twitter / X', href: '#' },
  { platform: 'instagram', label: 'Instagram', href: '#' },
  { platform: 'linkedin', label: 'LinkedIn', href: '#' },
  { platform: 'youtube', label: 'YouTube', href: '#' },
]

export const LEGAL_LINKS: LegalLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Settings', href: '#' },
]
