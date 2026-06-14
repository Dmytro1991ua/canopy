'use client'

import { useNav } from './Nav.hooks'
import NavDesktopLinks from './NavDesktopLinks'
import NavHamburger from './NavHamburger'
import NavLogo from './NavLogo'
import NavMobileDrawer from './NavMobileDrawer'

export default function Nav() {
  const { menu, scrolled, closeMenu, toggleMenu } = useNav()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-green-deep shadow-[var(--shadow-nav)]' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between py-5">
        <NavLogo onClick={closeMenu} />
        <NavDesktopLinks />
        <NavHamburger isOpen={menu.isOpen} onToggle={toggleMenu} />
      </nav>

      {menu.isOpen && <NavMobileDrawer onClose={closeMenu} />}
    </header>
  )
}
