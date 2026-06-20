'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/shared/constants'

import { NAV_CTA_HREF, NAV_CTA_LABEL } from './Nav.constants'

type Props = Readonly<{ activeHref: string }>

export default function NavDesktopLinks({ activeHref }: Props) {
  return (
    <>
      <ul className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="relative">
            <Link
              href={link.href}
              className={`nav-link pb-1 ${activeHref === link.href ? 'font-semibold text-gold!' : ''}`}
            >
              {link.label}
            </Link>
            {activeHref === link.href && (
              <motion.span
                layoutId="nav-indicator"
                className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gold"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Link href={NAV_CTA_HREF}>
          <Button variant="primary" className="py-2.5! text-sm">
            {NAV_CTA_LABEL}
          </Button>
        </Link>
      </div>
    </>
  )
}
