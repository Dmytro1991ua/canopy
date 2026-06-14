import Link from 'next/link'

import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/shared/constants'

import { NAV_CTA_HREF, NAV_CTA_LABEL } from './Nav.constants'

type Props = Readonly<{
  activeHref: string
  onClose: () => void
}>

export default function NavMobileDrawer({ activeHref, onClose }: Props) {
  return (
    <div className="border-t border-cream/10 bg-green-deep px-4 pt-4 pb-8 md:hidden">
      <ul className="flex flex-col gap-5">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link block text-lg ${activeHref === link.href ? 'font-semibold text-gold!' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href={NAV_CTA_HREF} onClick={onClose}>
          <Button variant="primary" className="w-full">
            {NAV_CTA_LABEL}
          </Button>
        </Link>
      </div>
    </div>
  )
}
