import { HERO_STATS } from './Hero.constants'

export default function HeroStats() {
  return (
    <div
      aria-label="Key statistics"
      className="hero-fade mt-2 flex w-full max-w-[700px] flex-wrap gap-8 border-t border-white/12 pt-6"
      style={{ animationDelay: '0.68s' }}
    >
      {HERO_STATS.map((stat) => (
        <div key={stat.value}>
          <span className="block font-display text-[clamp(28px,3vw,38px)] leading-none font-bold text-white">
            {stat.value}
          </span>
          <span className="mt-1 block text-xs text-white/55">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
