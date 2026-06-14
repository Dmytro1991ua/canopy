import { IMPACT_STATS } from '@/shared/constants'

import {
  IMPACT_EYEBROW,
  IMPACT_HEADING,
  IMPACT_STAT_DELAYS,
  IMPACT_SUBTEXT,
} from './ImpactNumbers.constants'
import ImpactStatCard from './ImpactStatCard'

export default function ImpactNumbers() {
  return (
    <section id="impact" aria-labelledby="impact-heading" className="section-padding bg-cream">
      <div className="section-container">
        <div className="reveal mb-14 text-center">
          <span className="eyebrow">{IMPACT_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="impact-heading" className="section-heading mt-4">
            {IMPACT_HEADING}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-[520px]">{IMPACT_SUBTEXT}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {IMPACT_STATS.map((stat, i) => (
            <ImpactStatCard key={stat.label} stat={stat} delay={IMPACT_STAT_DELAYS[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
