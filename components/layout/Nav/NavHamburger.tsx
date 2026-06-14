type Props = Readonly<{
  isOpen: boolean
  onToggle: () => void
}>

export default function NavHamburger({ isOpen, onToggle }: Props) {
  return (
    <button
      className="flex flex-col gap-1.5 p-2 md:hidden"
      onClick={onToggle}
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
    >
      <span className={`nav-hamburger-line ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
      <span className={`nav-hamburger-line ${isOpen ? 'scale-x-0 opacity-0' : ''}`} />
      <span className={`nav-hamburger-line ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
    </button>
  )
}
