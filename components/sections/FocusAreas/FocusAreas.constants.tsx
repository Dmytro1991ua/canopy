import type { FocusCard, FocusCardIconVariant } from './FocusAreas.types'

export const FOCUS_EYEBROW = 'Where we focus'
export const FOCUS_HEADING_LINE1 = 'Four Pillars of'
export const FOCUS_HEADING_LINE2 = 'Planetary Recovery'
export const FOCUS_SUBTEXT =
  'Every initiative Canopy supports falls under one of four critical impact areas — each one interconnected, each one urgent.'

export const ICON_VARIANT_CLASS: Record<FocusCardIconVariant, string> = {
  green: 'bg-[#E8F4DB] text-green-forest',
  amber: 'bg-amber/10 text-amber',
  blue: 'bg-[#D8EEF5] text-[#1A6B8A]',
  terra: 'bg-[#FAEBE2] text-terra',
}

export const FOCUS_CARDS: FocusCard[] = [
  {
    id: 'reforestation',
    iconVariant: 'green',
    iconNode: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M12 2C12 2 19 8 17 16C15.5 21 12 23 12 23C12 23 8.5 21 7 16C5 8 12 2 12 2Z" />
        <path d="M12 23V12" />
        <path d="M12 14C9.5 12 7 12.5 5.5 14" />
        <path d="M12 17.5C14.5 15.5 17 16 18.5 17.5" />
      </svg>
    ),
    title: 'Reforestation',
    description:
      'We partner with local communities to plant native species, restore degraded land, and protect existing old-growth forests that cannot be replaced.',
    learnMoreHref: '#impact',
  },
  {
    id: 'clean-energy',
    iconVariant: 'amber',
    iconNode: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
      </svg>
    ),
    title: 'Clean Energy',
    description:
      'Accelerating the transition from fossil fuels by supporting solar and wind access in underserved communities — where it matters most and costs least.',
    learnMoreHref: '#how',
  },
  {
    id: 'ocean-health',
    iconVariant: 'blue',
    iconNode: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M2 8C4 8 4 6 6 6C8 6 8 8 10 8C12 8 12 6 14 6C16 6 16 8 18 8C20 8 20 6 22 6" />
        <path d="M2 14C4 14 4 12 6 12C8 12 8 14 10 14C12 14 12 12 14 12C16 12 16 14 18 14C20 14 20 12 22 12" />
        <path d="M2 20C4 20 4 18 6 18C8 18 8 20 10 20C12 20 12 18 14 18C16 18 16 20 18 20" />
      </svg>
    ),
    title: 'Ocean Health',
    description:
      "From coastal clean-ups to policy advocacy, we're fighting for the seas that regulate our climate, feed billions, and produce half the oxygen we breathe.",
    learnMoreHref: '#why',
  },
  {
    id: 'policy',
    iconVariant: 'terra',
    iconNode: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Policy & Advocacy',
    description:
      "Environmental laws don't write themselves. We mobilise citizens to pressure governments and corporations for binding commitments and real accountability.",
    learnMoreHref: '#pledge',
  },
]
