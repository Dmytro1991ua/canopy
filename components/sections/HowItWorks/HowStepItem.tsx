import type { HowStepProps } from './HowItWorks.types'

export default function HowStepItem({ number, title, description, isLast }: HowStepProps) {
  return (
    <div className="reveal relative flex flex-col items-center text-center">
      {/* Dashed connector — hidden on last card, hidden on mobile */}
      {!isLast && (
        <div
          className="absolute top-8 left-[calc(50%+2.5rem)] hidden w-[calc(100%-5rem)] border-t-2 border-dashed border-gold/30 lg:block"
          aria-hidden="true"
        />
      )}

      {/* Step number badge */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40 bg-green-forest">
        <span className="font-display text-xl font-bold text-gold">{number}</span>
      </div>

      <h3 className="mb-3 text-lg font-semibold text-cream">{title}</h3>
      <p className="body-lg max-w-[260px] text-green-mist/80">{description}</p>
    </div>
  )
}
