import { MARQUEE_ITEMS } from '@/shared/constants'

import { MARQUEE_ARIA_LABEL } from './MarqueeBar.constants'

// Duplicated for seamless CSS marquee loop (animation moves track by -50%)
const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

export default function MarqueeBar() {
  return (
    <div
      role="marquee"
      aria-label={MARQUEE_ARIA_LABEL}
      className="marquee-bar relative z-[4] overflow-hidden bg-amber py-[13px]"
    >
      <div className="marquee-track items-center gap-4 whitespace-nowrap" aria-hidden="true">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.1em] text-green-deep uppercase">
              {item.text}
            </span>
            {i < items.length - 1 && (
              <span
                aria-hidden="true"
                className="inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-green-deep/30"
              />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
