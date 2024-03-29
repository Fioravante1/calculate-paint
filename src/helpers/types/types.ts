export type StateWindowDoor = {
  door: object
  window: object
}

export type StateHeightWidth = {
  altura: object
  largura: object
}

export type StateTotalLiters = {
  totalArea: number
  canPaint05: object
  canPaint25: object
  canPaint36: object
  canPaint180: object
}

type WindowDoor = {
  window: object
  door: object
}

export type PropsCalculateAreaTotal = {
  areaWalls: object
  inputDoorWindow: WindowDoor
}
