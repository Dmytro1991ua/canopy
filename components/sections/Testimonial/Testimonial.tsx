import { TESTIMONIAL } from '@/shared/constants'
import { FadeUp, ScaleIn } from '@/components/ui/Motion'

import { TESTIMONIAL_EYEBROW, TESTIMONIAL_HEADING } from './Testimonial.constants'

export default function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="section-padding overflow-hidden bg-green-deep"
    >
      <div className="section-container">
        <FadeUp className="mb-12 text-center">
          <span className="eyebrow text-gold">{TESTIMONIAL_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="testimonial-heading" className="section-heading mt-4 text-cream">
            {TESTIMONIAL_HEADING}
          </h2>
        </FadeUp>

        <ScaleIn delay={0.15}>
          <figure className="mx-auto max-w-3xl text-center">
            <div aria-hidden="true" className="mb-6 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="text-gold/40"
                aria-hidden="true"
              >
                <path
                  d="M14 22c0-5.52 4.48-10 10-10V8C13.85 8 6 15.85 6 26v14h14V22zm24 0c0-5.52 4.48-10 10-10V8c-10.15 0-18 7.85-18 18v14h14V22z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <blockquote>
              <p className="font-display text-[clamp(18px,2.5vw,26px)] leading-[1.55] font-medium text-cream/90 italic">
                {TESTIMONIAL.quote}
              </p>
            </blockquote>

            <figcaption className="mt-8 flex flex-col items-center gap-1">
              <div
                className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-forest text-lg font-bold text-gold ring-2 ring-gold/30"
                aria-hidden="true"
              >
                {TESTIMONIAL.avatar}
              </div>
              <span className="text-base font-semibold text-cream">{TESTIMONIAL.name}</span>
              <span className="text-sm text-green-mist/70">{TESTIMONIAL.role}</span>
              <span className="text-sm text-green-mist/50">{TESTIMONIAL.location}</span>
            </figcaption>
          </figure>
        </ScaleIn>
      </div>
    </section>
  )
}
