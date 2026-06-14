import Link from 'next/link'

import Button from '@/components/ui/Button'

import { HERO_CTA_PRIMARY, HERO_CTA_SECONDARY, HERO_EYEBROW, HERO_SUB } from './Hero.constants'
import HeroStats from './HeroStats'

export default function HeroContent() {
  return (
    <div
      className="relative z-[2] mx-auto flex w-full max-w-7xl flex-col items-start gap-5 px-4 sm:px-6 lg:px-8"
      style={{ padding: 'clamp(100px, 14vh, 160px) 0 4rem' }}
    >
      <span className="eyebrow hero-fade" style={{ animationDelay: '0.1s' }}>
        {HERO_EYEBROW}
      </span>
      <h1
        className="hero-fade max-w-[800px] font-display text-[clamp(2.6rem,6vw,5rem)] leading-tight font-bold text-white"
        style={{ animationDelay: '0.2s' }}
      >
        The Earth
        <br />
        <em className="text-gold not-italic">Can&apos;t Wait.</em>
      </h1>
      <p
        className="hero-fade max-w-[560px] leading-[1.75] text-white/72"
        style={{
          fontSize: 'clamp(16px, 1.4vw, 19px)',
          animationDelay: '0.38s',
        }}
      >
        {HERO_SUB}
      </p>
      <div className="hero-fade flex flex-wrap gap-3" style={{ animationDelay: '0.52s' }}>
        <Link href={HERO_CTA_PRIMARY.href}>
          <Button variant="primary">{HERO_CTA_PRIMARY.label}</Button>
        </Link>
        <Link href={HERO_CTA_SECONDARY.href}>
          <Button variant="ghost">
            {HERO_CTA_SECONDARY.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
      </div>
      <HeroStats />
    </div>
  )
}
