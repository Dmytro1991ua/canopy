import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-green-deep"
    >
      <HeroBackground />
      <HeroContent />

      {/* Organic wave into next section */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-[-2px] z-[3] leading-[0]">
        <svg
          viewBox="0 0 1440 88"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
        >
          <path
            d="M0 44 C200 88 400 8 600 44 C800 80 1000 10 1200 44 C1320 66 1400 38 1440 44 L1440 88 L0 88 Z"
            fill="#FAF6EC"
          />
        </svg>
      </div>
    </section>
  )
}
