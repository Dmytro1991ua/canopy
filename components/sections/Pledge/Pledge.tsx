'use client'

import { useState } from 'react'

import Button from '@/components/ui/Button'
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
  const { selected, toggle, canSubmit } = usePledge()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <section id="pledge" aria-labelledby="pledge-heading" className="section-padding bg-cream-dark">
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <span className="eyebrow">{PLEDGE_EYEBROW}</span>
          <div className="divider-leaf" />
          <h2 id="pledge-heading" className="section-heading mt-4">
            {PLEDGE_HEADING}
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-[520px]">{PLEDGE_SUBTEXT}</p>
        </div>

        {submitted ? (
          <div className="reveal mx-auto max-w-lg rounded-2xl border border-green-leaf/30 bg-green-mist px-8 py-10 text-center">
            <div className="mb-4 text-4xl" aria-hidden="true">
              🌿
            </div>
            <p className="text-base font-semibold text-green-deep">{PLEDGE_SUCCESS_MESSAGE}</p>
          </div>
        ) : (
          <div className="reveal mx-auto max-w-2xl">
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PLEDGE_CHIPS.map((chip) => (
                <PledgeChipItem
                  key={chip.id}
                  chip={chip}
                  isSelected={selected.has(chip.id)}
                  onToggle={toggle}
                />
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="primary"
                disabled={!canSubmit}
                onClick={handleSubmit}
                className="min-w-[200px] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {PLEDGE_CTA_LABEL}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
