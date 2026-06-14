import Link from 'next/link'

import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/shared/constants'

import { NAV_CTA_HREF, NAV_CTA_LABEL } from './Nav.constants'

export default function NavDesktopLinks() {
  return (
    <>
      <ul className="hidden items-center gap-8 md:flex" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Link href={NAV_CTA_HREF}>
          <Button variant="primary" className="!py-2.5 text-sm">
            {NAV_CTA_LABEL}
          </Button>
        </Link>
      </div>
    </>
  )
}
