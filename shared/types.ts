export type NavLink = {
  label: string
  href: string
}

export type MarqueeItem = {
  text: string
  icon: string
}

export type CrisisStat = {
  value: string
  label: string
  source: string
}

export type FocusArea = {
  id: string
  icon: string
  title: string
  description: string
  stat: string
  statLabel: string
}

export type HowStep = {
  number: string
  title: string
  description: string
}

export type ImpactStat = {
  value: string
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
