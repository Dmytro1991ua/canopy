export type NavMenuState = {
  isOpen: boolean
}

export type UseNavReturn = {
  menu: NavMenuState
  scrolled: boolean
  activeHref: string
  closeMenu: () => void
  toggleMenu: () => void
}
