'use client'

import { useBackToTop } from './BackToTop.hooks'

export default function BackToTop() {
  const { visible, scrollToTop } = useBackToTop()

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-green-deep shadow-lg ring-1 ring-green-forest/60 transition-all duration-300 hover:scale-110 hover:bg-green-forest hover:shadow-xl ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="text-cream"
        style={{ animation: visible ? 'bounceUp 1.4s ease-in-out infinite' : 'none' }}
      >
        <path
          d="M10 15V5M5 10l5-5 5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
