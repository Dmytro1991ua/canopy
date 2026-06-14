import { useCallback, useEffect, useState } from 'react'

import { NAV_LINKS } from '@/shared/constants'

import { SCROLL_THRESHOLD } from './Nav.constants'

import type { NavMenuState, UseNavReturn } from './Nav.types'

export function useNav(): UseNavReturn {
  const [menu, setMenu] = useState<NavMenuState>({ isOpen: false })
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = useCallback(() => setMenu({ isOpen: false }), [])
  const toggleMenu = useCallback(() => setMenu((prev) => ({ isOpen: !prev.isOpen })), [])

  return { menu, scrolled, activeHref, closeMenu, toggleMenu }
}
