import { CRISIS_STATS } from '@/shared/constants'

export default function WhyItMattersCard() {
  return (
    <div className="reveal-scale">
      <div
        className="relative overflow-hidden rounded-2xl bg-green-forest p-8"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(242,176,56,.18) 0%, transparent 60%), #2d5a1b',
        }}
      >
        <div className="relative grid grid-cols-2 gap-4">
          {CRISIS_STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-white/10 bg-white/7 p-5 transition-colors duration-200 hover:bg-white/12"
            >
              <div
                className="mb-1.5 font-display leading-none font-bold text-gold"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
              >
                {stat.value}
              </div>
              <div className="text-[13px] leading-snug text-white/65">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
