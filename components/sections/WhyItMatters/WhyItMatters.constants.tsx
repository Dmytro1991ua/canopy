import type { WhyPoint } from './WhyItMatters.types'

export const WHY_EYEBROW = 'A planet in crisis'
export const WHY_HEADING_LINE1 = "We Can't Afford"
export const WHY_HEADING_LINE2 = 'to Look Away.'

export const WHY_PARA_1 =
  "The warning signs have been building for decades — rising seas, vanishing glaciers, forests consumed by fire. Scientists aren't predicting a future crisis. They're documenting a present one."

export const WHY_PARA_2 =
  "But here's what the data also shows: the trajectory can still be changed. Not by governments alone, or corporations alone — but by millions of individuals deciding that the status quo is no longer acceptable."

export const WHY_POINTS: WhyPoint[] = [
  {
    iconNode: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="7" />
        <path d="M9 2a7 7 0 0 1 0 14" />
        <path d="M2 9h14" />
      </svg>
    ),
    title: 'Global temperatures rising faster than projected',
    description:
      '2024 was the hottest year ever recorded — the tenth consecutive record-breaking year.',
  },
  {
    iconNode: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M4 14C4 14 2 10 4 6C6 2 9 1 9 1C9 1 12 2 14 6C16 10 14 14 14 14" />
        <path d="M9 1v13" />
      </svg>
    ),
    title: 'Deforestation wipes out 27 soccer fields per minute',
    description:
      "Forests are our planet's lungs — and we're losing them to agriculture and industry.",
  },
  {
    iconNode: (
      <svg
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M2 10C4 10 4 8 6 8C8 8 8 10 10 10C12 10 12 8 14 8C16 8 16 10 18 10" />
        <path d="M2 14C4 14 4 12 6 12C8 12 8 14 10 14C12 14 12 12 14 12C16 12 16 14 18 14" />
      </svg>
    ),
    title: 'Oceans absorb 90% of excess heat — at enormous cost',
    description:
      'Coral bleaching, sea-level rise, and acidification now threaten a billion coastal livelihoods.',
  },
]
