import { FLOATING_LEAVES } from './Hero.constants'

const LEAF_PATH = 'M40 5C40 5 75 30 70 68C66 92 40 105 40 105C40 105 14 92 10 68C5 30 40 5 40 5Z'

export default function HeroBackground() {
  return (
    <>
      {/* Warm sun glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-15%] right-[-8%] h-[75vmax] w-[75vmax]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(242,176,56,.22) 0%, rgba(232,148,26,.1) 40%, transparent 70%)',
        }}
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,.018) 0, rgba(255,255,255,.018) 1px, transparent 1px, transparent 64px)',
        }}
      />

      {/* Big background leaf art */}
      <svg
        viewBox="0 0 500 640"
        fill="currentColor"
        aria-hidden="true"
        focusable={false}
        className="pointer-events-none absolute top-[5%] right-[-4%] text-green-leaf"
        style={{ width: 'clamp(320px, 40vw, 680px)', opacity: 0.12 }}
      >
        <path d="M250 10C250 10 440 120 420 310C405 450 310 540 250 630C190 540 95 450 80 310C60 120 250 10 250 10Z" />
        <path d="M250 630 L250 10" stroke="currentColor" strokeWidth="3" fill="none" opacity=".5" />
        <path
          d="M250 200 C200 160 140 150 90 170"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity=".4"
        />
        <path
          d="M250 300 C310 260 370 250 420 265"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity=".4"
        />
        <path
          d="M250 400 C190 370 140 360 100 375"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity=".3"
        />
      </svg>

      {/* Floating leaf decorations — CSS leafDrift animation */}
      {FLOATING_LEAVES.map((leaf) => (
        <svg
          key={leaf.id}
          viewBox="0 0 80 110"
          fill="currentColor"
          aria-hidden="true"
          className="pointer-events-none absolute z-1"
          style={{
            width: leaf.size,
            top: leaf.top,
            right: leaf.right,
            opacity: leaf.opacity,
            color: leaf.color,
            animation: `leafDrift ${leaf.duration} ease-in-out ${leaf.delay} infinite${leaf.reverse ? ' reverse' : ''}`,
          }}
        >
          <path d={LEAF_PATH} />
        </svg>
      ))}
    </>
  )
}
