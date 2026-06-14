import {
  FOCUS_CARD_DELAYS,
  FOCUS_CARDS,
  FOCUS_EYEBROW,
  FOCUS_HEADING_LINE1,
  FOCUS_HEADING_LINE2,
  FOCUS_SUBTEXT,
} from './FocusAreas.constants'
import FocusCardItem from './FocusCardItem'

export default function FocusAreas() {
  return (
    <section id="focus" aria-labelledby="focus-heading" className="section-padding bg-cream-dark">
      <div className="section-container">
        <div className="reveal mb-14 text-center">
          <span className="eyebrow">{FOCUS_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="focus-heading" className="section-heading mt-4">
            {FOCUS_HEADING_LINE1}
            <br />
            {FOCUS_HEADING_LINE2}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-[520px]">{FOCUS_SUBTEXT}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_CARDS.map((card, i) => (
            <FocusCardItem key={card.id} card={card} delay={FOCUS_CARD_DELAYS[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}
