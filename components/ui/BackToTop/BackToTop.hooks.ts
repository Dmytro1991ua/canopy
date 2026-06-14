'use client'

import { useCallback, useEffect, useState } from 'react'

import type { UseBackToTopReturn } from './BackToTop.types'

const SHOW_THRESHOLD = 400

export function useBackToTop(): UseBackToTopReturn {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { visible, scrollToTop }
}
