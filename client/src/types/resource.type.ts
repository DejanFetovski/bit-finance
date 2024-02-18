import { Coins } from './coin.type'

export enum Hooks {
  Looping = 'Looping',
  Margin = 'Margin Long/Short',
  Pair = 'Pair Long/Short',
}

export type ResourceType = {
  coins: Coins[]
  type: Hooks
  apy?: string
  leverage?: string
}
