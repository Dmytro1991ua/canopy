import type { RefObject } from 'react'

export type UseCountUpReturn = {
  count: number
  elRef: RefObject<HTMLDivElement | null>
}
