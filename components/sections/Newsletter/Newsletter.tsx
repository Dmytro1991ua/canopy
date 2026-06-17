'use client'

import { type FormEvent, useState } from 'react'

import { FadeUp, ScaleIn } from '@/components/ui/Motion'

import {
  NEWSLETTER_CTA,
  NEWSLETTER_DISCLAIMER,
  NEWSLETTER_ERROR,
  NEWSLETTER_EYEBROW,
  NEWSLETTER_HEADING,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SUBTEXT,
  NEWSLETTER_SUCCESS,
} from './Newsletter.constants'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError(NEWSLETTER_ERROR)
      return
    }
    setSubmitted(true)
  }

  return (
    <section aria-labelledby="newsletter-heading" className="section-padding bg-green-deep">
      <div className="section-container">
        <FadeUp className="mb-10 text-center">
          <span className="eyebrow text-gold">{NEWSLETTER_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="newsletter-heading" className="section-heading mt-4 text-cream">
            {NEWSLETTER_HEADING}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-lg text-green-mist/80">{NEWSLETTER_SUBTEXT}</p>
        </FadeUp>

        <ScaleIn delay={0.15}>
          <div className="mx-auto max-w-md" aria-live="polite" aria-atomic="true">
            {submitted ? (
              <p className="rounded-2xl border border-green-leaf/30 bg-white/5 px-8 py-6 text-center text-base font-semibold text-green-mist">
                {NEWSLETTER_SUCCESS}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder={NEWSLETTER_PLACEHOLDER}
                    required
                    className="flex-1 rounded-full border border-green-leaf/20 bg-white/8 px-5 py-3.5 text-sm text-cream placeholder:text-green-mist/40 focus:border-green-leaf/60 focus:ring-2 focus:ring-green-leaf/20 focus:outline-none"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    {NEWSLETTER_CTA}
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-center text-sm text-amber">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-center text-xs text-green-mist/40">
                  {NEWSLETTER_DISCLAIMER}
                </p>
              </form>
            )}
          </div>
        </ScaleIn>
      </div>
    </section>
  )
}
