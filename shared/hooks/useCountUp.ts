'use client'

import { useEffect, useRef, useState } from 'react'

import type { UseCountUpReturn } from './useCountUp.types'

export function useCountUp(
  target: number,
  decimals: number = 0,
  duration: number = 1800
): UseCountUpReturn {
  const [count, setCount] = useState(0)
  const elRef = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const startTime = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(parseFloat((eased * target).toFixed(decimals)))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals, duration])

  return { count, elRef }
}
