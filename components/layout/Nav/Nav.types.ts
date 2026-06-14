export type NavMenuState = {
  isOpen: boolean
}

export type UseNavReturn = {
  menu: NavMenuState
  scrolled: boolean
  closeMenu: () => void
  toggleMenu: () => void
}
