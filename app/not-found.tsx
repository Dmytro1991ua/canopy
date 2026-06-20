import Link from 'next/link'

import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-deep px-4 text-center">
      <p
        className="mb-2 font-display text-[clamp(80px,15vw,160px)] leading-none font-bold text-green-forest"
        aria-hidden="true"
      >
        404
      </p>
      <h1 className="section-heading mb-4 text-cream">Page not found</h1>
      <p className="body-lg mb-10 max-w-md text-green-mist/70">
        This page has gone the way of old-growth forests — it doesn&apos;t exist here. Let&apos;s
        get you back to solid ground.
      </p>
      <Link href="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  )
}
