import type { FloatingLeaf, HeroCta, HeroStat } from './Hero.types'

export const HERO_EYEBROW = 'The time is now'

export const HERO_SUB =
  'Over 15 billion trees fall every year. A million species face extinction. The oceans are warming, the ice is retreating — and every choice you make either slows that process or speeds it up. Join the movement choosing differently.'

export const HERO_CTA_PRIMARY: HeroCta = { label: 'Take the Pledge', href: '#pledge' }
export const HERO_CTA_SECONDARY: HeroCta = { label: 'See the Crisis', href: '#why' }

export const HERO_STATS: HeroStat[] = [
  { numericValue: 18, decimals: 0, suffix: 'M+', label: 'Pledge signers worldwide' },
  { numericValue: 2.4, decimals: 1, suffix: 'M', label: 'Trees planted together' },
  { numericValue: 147, decimals: 0, suffix: '', label: 'Countries represented' },
]

export const FLOATING_LEAVES: FloatingLeaf[] = [
  {
    size: 'clamp(80px, 10vw, 160px)',
    top: '18%',
    right: '10%',
    opacity: 0.22,
    duration: '14s',
    delay: '0s',
    color: '#9ec26a',
  },
  {
    size: 'clamp(50px, 6vw, 100px)',
    top: '55%',
    right: '24%',
    opacity: 0.16,
    duration: '10s',
    delay: '3s',
    color: '#9ec26a',
    reverse: true,
  },
  {
    size: 'clamp(40px, 4vw, 72px)',
    top: '28%',
    right: '42%',
    opacity: 0.13,
    duration: '18s',
    delay: '6s',
    color: '#e8941a',
  },
]
