import WhyItMattersCard from './WhyItMattersCard'
import WhyItMattersText from './WhyItMattersText'

export default function WhyItMatters() {
  return (
    <section id="why" aria-labelledby="why-heading" className="section-padding bg-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <WhyItMattersText />
          <WhyItMattersCard />
        </div>
      </div>
    </section>
  )
}
