import type { PledgeChip } from '@/shared/types'

type Props = Readonly<{
  chip: PledgeChip
  isSelected: boolean
  onToggle: (id: string) => void
}>

export default function PledgeChipItem({ chip, isSelected, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={() => onToggle(chip.id)}
      aria-pressed={isSelected}
      className={`chip w-full justify-center transition-all duration-200 ${isSelected ? 'chip-active' : ''}`}
    >
      {chip.label}
    </button>
  )
}
