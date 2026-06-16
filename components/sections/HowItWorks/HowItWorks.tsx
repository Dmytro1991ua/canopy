import { HOW_STEPS } from '@/shared/constants'
import { FadeUp, Stagger, StaggerItem } from '@/components/ui/Motion'

import { HOW_EYEBROW, HOW_HEADING, HOW_SUBTEXT } from './HowItWorks.constants'
import HowStepItem from './HowStepItem'

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-heading" className="section-padding bg-green-deep">
      <div className="section-container">
        <FadeUp className="mb-14 text-center">
          <span className="eyebrow text-gold">{HOW_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="how-heading" className="section-heading mt-4 text-cream">
            {HOW_HEADING}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-130 text-green-mist/80">{HOW_SUBTEXT}</p>
        </FadeUp>

        <Stagger className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
          {HOW_STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <HowStepItem
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={i === HOW_STEPS.length - 1}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
