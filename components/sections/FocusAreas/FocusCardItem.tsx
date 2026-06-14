import { ICON_VARIANT_CLASS } from './FocusAreas.constants'

import type { FocusCard } from './FocusAreas.types'

type Props = Readonly<{
  card: FocusCard
  delay?: string
}>

const ARROW_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function FocusCardItem({ card, delay }: Props) {
  return (
    <article
      className="card reveal group flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-2"
      style={delay ? { animationDelay: delay } : undefined}
    >
      <div
        className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl ${ICON_VARIANT_CLASS[card.iconVariant]}`}
        aria-hidden="true"
      >
        {card.iconNode}
      </div>

      <h3 className="text-lg font-semibold text-green-deep">{card.title}</h3>

      <p className="flex-1 text-sm leading-[1.65] text-green-forest/70">{card.description}</p>

      <a
        href={card.learnMoreHref}
        className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-green-forest transition-[gap] duration-200 group-hover:gap-2.5"
        aria-label={`Learn more about ${card.title}`}
      >
        Learn more
        {ARROW_ICON}
      </a>
    </article>
  )
}
