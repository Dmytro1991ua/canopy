import { SlideIn } from '@/components/ui/Motion'

import WhyItMattersCard from './WhyItMattersCard'
import WhyItMattersText from './WhyItMattersText'

export default function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-heading" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SlideIn direction="left">
            <WhyItMattersText />
          </SlideIn>
          <SlideIn direction="right" delay={0.15}>
            <WhyItMattersCard />
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
