import {
  StateHeightWidth,
  StateTotalLiters,
  StateWindowDoor
} from './types/types'

export const wallHeightWidthState: StateHeightWidth = {
  altura: {},
  largura: {}
}

export const doorWindowState: StateWindowDoor = {
  door: {},
  window: {}
}

export const totalLitersState: StateTotalLiters = {
  totalArea: 0,
  canPaint05: { canPaint05: 0, count: 0 },
  canPaint25: { canPaint25: 0, count: 0 },
  canPaint36: { canPaint36: 0, count: 0 },
  canPaint180: { canPaint180: 0, count: 0 }
}

export const quantityWindonDoor: number[] = [0, 1, 2, 3, 4, 5, 6]

export const walls: number[] = [1, 2, 3, 4]

export const cans: number[] = [18, 3.6, 2.5, 0.5]
