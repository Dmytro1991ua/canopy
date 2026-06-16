'use client'

import { useCountUp } from '@/shared/hooks/useCountUp'

import type { ImpactStat } from '@/shared/types'

type Props = Readonly<{
  stat: ImpactStat
}>

export default function ImpactStatCard({ stat }: Props) {
  const { count, elRef } = useCountUp(stat.numericValue, stat.decimals, 1800)

  return (
    <div ref={elRef} className="flex flex-col items-center gap-2 text-center">
      <p className="stat-number text-green-deep">
        {count}
        <span className="text-gold">{stat.suffix}</span>
      </p>
      <p className="stat-label text-green-forest/70">{stat.label}</p>
    </div>
  )
}
