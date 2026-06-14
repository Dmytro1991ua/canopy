export type NavLink = {
  label: string
  href: string
}

export type MarqueeItem = {
  text: string
}

export type CrisisStat = {
  numericValue: number
  decimals: number
  suffix: string
  label: string
  source: string
}

export type HowStep = {
  number: string
  title: string
  description: string
}

export type ImpactStat = {
  numericValue: number
  decimals: number
  suffix: string
  label: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  location: string
  avatar: string
}

export type PledgeChip = {
  id: string
  label: string
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterColumn = {
  heading: string
  links: FooterLink[]
}
