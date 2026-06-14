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

export const metadata: Metadata = {
  title: 'Canopy — Green Energy for a Living Planet',
  description:
    'Canopy connects communities with clean energy solutions to fight climate change, protect ecosystems, and build a sustainable future.',
  openGraph: {
    title: 'Canopy — Green Energy for a Living Planet',
    description:
      'Canopy connects communities with clean energy solutions to fight climate change, protect ecosystems, and build a sustainable future.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  )
}
