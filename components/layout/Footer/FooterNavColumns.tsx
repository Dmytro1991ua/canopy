import Link from 'next/link'

import { FOOTER_COLUMNS } from '@/shared/constants'

export default function FooterNavColumns() {
  return (
    <>
      {FOOTER_COLUMNS.map((col) => (
        <div key={col.heading}>
          <h4 className="mb-4 text-[11px] font-bold tracking-[0.12em] text-cream/50 uppercase">
            {col.heading}
          </h4>
          <ul className="flex flex-col gap-3" role="list">
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/55 transition-colors duration-200 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
