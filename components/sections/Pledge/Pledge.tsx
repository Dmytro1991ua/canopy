'use client'

import { useState } from 'react'

import Button from '@/components/ui/Button'
import { FadeUp, ScaleIn, Stagger, StaggerItem } from '@/components/ui/Motion'
import { PLEDGE_CHIPS } from '@/shared/constants'

import {
  PLEDGE_CTA_LABEL,
  PLEDGE_EYEBROW,
  PLEDGE_HEADING,
  PLEDGE_SUBTEXT,
  PLEDGE_SUCCESS_MESSAGE,
} from './Pledge.constants'
import { usePledge } from './Pledge.hooks'
import PledgeChipItem from './PledgeChipItem'

export default function Pledge() {
  const { selected, toggle, canSubmit, reset } = usePledge()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <section id="pledge" aria-labelledby="pledge-heading" className="section-padding bg-cream-dark">
      <div className="section-container">
        <FadeUp className="mb-12 text-center">
          <span className="eyebrow">{PLEDGE_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="pledge-heading" className="section-heading mt-4">
            {PLEDGE_HEADING}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-130">{PLEDGE_SUBTEXT}</p>
        </FadeUp>

        {submitted ? (
          <ScaleIn>
            <div className="mx-auto max-w-lg rounded-2xl border border-green-leaf/30 bg-green-mist px-8 py-10 text-center">
              <div className="mb-4 text-4xl" aria-hidden="true">
                🌿
              </div>
              <p className="mb-6 text-base font-semibold text-green-deep">
                {PLEDGE_SUCCESS_MESSAGE}
              </p>
              <button
                type="button"
                onClick={() => {
                  reset()
                  setSubmitted(false)
                }}
                className="text-sm text-green-forest/60 underline underline-offset-2 transition-colors hover:text-green-forest"
              >
                Change my pledge
              </button>
            </div>
          </ScaleIn>
        ) : (
          <FadeUp delay={0.1} className="mx-auto max-w-2xl">
            <Stagger className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PLEDGE_CHIPS.map((chip) => (
                <StaggerItem key={chip.id}>
                  <PledgeChipItem
                    chip={chip}
                    isSelected={selected.has(chip.id)}
                    onToggle={toggle}
                  />
                </StaggerItem>
              ))}
            </Stagger>

            <div className="text-center">
              <Button
                variant="primary"
                disabled={!canSubmit}
                onClick={handleSubmit}
                className="btn-wiggle min-w-50 disabled:animate-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                {PLEDGE_CTA_LABEL}
              </Button>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  )
}
