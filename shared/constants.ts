import type {
  CrisisStat,
  FocusArea,
  FooterColumn,
  HowStep,
  ImpactStat,
  MarqueeItem,
  NavLink,
  PledgeChip,
  Testimonial,
} from './types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Why It Matters', href: '#why' },
  { label: 'What We Do', href: '#focus' },
  { label: 'Our Impact', href: '#impact' },
  { label: 'Get Involved', href: '#pledge' },
]

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { text: '15 billion trees lost every year' },
  { text: '1.5°C — the warming line we must hold' },
  { text: 'Over 1 million species face extinction' },
  { text: 'Ocean temperatures hit record highs in 2025' },
  { text: '$44 trillion in global GDP at risk from nature loss' },
  { text: '2030 — our last real window for meaningful action' },
  { text: 'Renewable energy now cheaper than fossil fuels' },
  { text: 'Every degree of change we prevent saves lives' },
]

export const CRISIS_STATS: CrisisStat[] = [
  { value: '1.5°C', label: 'warming threshold we must not cross', source: 'IPCC 2023' },
  { value: '8M', label: 'premature deaths yearly from air pollution', source: 'WHO 2022' },
  { value: '1M+', label: 'species threatened with extinction', source: 'IPBES 2019' },
]

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'solar',
    icon: '☀️',
    title: 'Solar & Wind',
    description:
      'Deploying renewable infrastructure in underserved communities to replace fossil fuels with clean, affordable power.',
    stat: '90%',
    statLabel: 'cost drop since 2010',
  },
  {
    id: 'forests',
    icon: '🌳',
    title: 'Forest Restoration',
    description:
      'Partnering with indigenous stewards to restore degraded land and protect old-growth carbon sinks.',
    stat: '2B',
    statLabel: 'trees planted by 2030',
  },
  {
    id: 'oceans',
    icon: '🌊',
    title: 'Ocean Ecosystems',
    description:
      'Rebuilding marine biodiversity through kelp forest restoration and plastic reduction initiatives.',
    stat: '30%',
    statLabel: 'of oceans protected by 2030',
  },
  {
    id: 'transport',
    icon: '⚡',
    title: 'Clean Transport',
    description:
      'Accelerating the shift to electric mobility with charging infrastructure and policy advocacy.',
    stat: '50%',
    statLabel: 'of new cars electric by 2030',
  },
]

export const HOW_STEPS: HowStep[] = [
  {
    number: '01',
    title: 'Choose Your Cause',
    description:
      'Pick the environmental issues that matter most to you — from reforestation to clean energy grid projects.',
  },
  {
    number: '02',
    title: 'Join a Local Chapter',
    description:
      'Connect with your nearest Canopy community to take real action alongside your neighbours.',
  },
  {
    number: '03',
    title: 'Measure Your Impact',
    description:
      'Track trees planted, CO₂ offset, and energy shifted through your personal impact dashboard.',
  },
]

export const IMPACT_STATS: ImpactStat[] = [
  { value: '4.2', suffix: 'M', label: 'Members worldwide' },
  { value: '18', suffix: 'M', label: 'Tonnes CO₂ offset' },
  { value: '62', suffix: 'M', label: 'Trees planted' },
  { value: '140', suffix: '+', label: 'Countries active' },
]

export const TESTIMONIAL: Testimonial = {
  quote:
    'Canopy gave our village access to solar panels we could never afford alone. Our children study at night now. The planet is healing — and so are we.',
  name: 'Amara Diallo',
  role: 'Community Solar Lead',
  location: 'Dakar, Senegal',
  avatar: 'AD',
}

export const PLEDGE_CHIPS: PledgeChip[] = [
  { id: 'plant', label: '🌱 Plant 10 trees this month' },
  { id: 'solar', label: '☀️ Switch to green energy' },
  { id: 'transport', label: '🚲 Go car-free one day a week' },
  { id: 'diet', label: '🥦 Eat plant-based twice a week' },
  { id: 'plastic', label: '♻️ Refuse single-use plastics' },
  { id: 'advocate', label: '📢 Contact my representative' },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Mission',
    links: [
      { label: 'Why It Matters', href: '#why' },
      { label: 'Reforestation', href: '#focus' },
      { label: 'Clean Energy', href: '#focus' },
      { label: 'Ocean Health', href: '#focus' },
      { label: 'Policy Work', href: '#focus' },
    ],
  },
  {
    heading: 'Take Action',
    links: [
      { label: 'Sign the Pledge', href: '#pledge' },
      { label: 'Plant a Tree', href: '#' },
      { label: 'Calculate Your Impact', href: '#' },
      { label: 'Join a Local Chapter', href: '#' },
      { label: 'Donate', href: '#' },
    ],
  },
  {
    heading: 'Organisation',
    links: [
      { label: 'About Canopy', href: '#' },
      { label: 'Our Partners', href: '#' },
      { label: 'Annual Reports', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]
