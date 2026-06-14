import { useCallback, useEffect, useState } from 'react'

import { SCROLL_THRESHOLD } from './Nav.constants'

import type { NavMenuState, UseNavReturn } from './Nav.types'

export function useNav(): UseNavReturn {
  const [menu, setMenu] = useState<NavMenuState>({ isOpen: false })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenu({ isOpen: false }), [])
  const toggleMenu = useCallback(() => setMenu((prev) => ({ isOpen: !prev.isOpen })), [])

  return { menu, scrolled, closeMenu, toggleMenu }
}
