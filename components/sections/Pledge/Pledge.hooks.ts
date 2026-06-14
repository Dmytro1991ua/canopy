'use client'

import { useCallback, useState } from 'react'

import type { UsePledgeReturn } from './Pledge.types'

export function usePledge(): UsePledgeReturn {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = useCallback((id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)

      if (next.has(id)) next.delete(id)
      else next.add(id)

      return next
    })
  }, [])

  return { selected, toggle, canSubmit: selected.size > 0 }
}
