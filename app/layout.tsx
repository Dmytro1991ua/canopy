import './globals.css'

import { DM_Sans, Lora } from 'next/font/google'

import type { Metadata } from 'next'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

const OG_TITLE = 'Canopy — Green Energy for a Living Planet'
const OG_DESCRIPTION =
  'Canopy connects communities with clean energy solutions to fight climate change, protect ecosystems, and build a sustainable future.'

export const metadata: Metadata = {
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  keywords: [
    'green energy',
    'clean energy',
    'climate change',
    'reforestation',
    'solar energy',
    'sustainability',
    'carbon offset',
    'ocean health',
    'environmental advocacy',
  ],
  ...(process.env.NEXT_PUBLIC_SITE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  }),
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Canopy',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:bg-green-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
