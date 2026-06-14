export type UsePledgeReturn = {
  selected: Set<string>
  toggle: (id: string) => void
  canSubmit: boolean
}
