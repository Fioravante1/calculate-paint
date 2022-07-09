import { cans, walls } from './initialStates'
import {
  PropsCalculateAreaTotal,
  StateHeightWidth,
  StateWindowDoor
} from './types/types'

export function calculateArea(inputWallSize: StateHeightWidth): object {
  const areaWalls = {}
  for (let i = 0; i < walls.length; i++) {
    areaWalls[`TotalWall${i + 1}`] =
      inputWallSize.altura[`Altura${i}`] *
        inputWallSize.largura[`Largura${i}`] || 0
  }
  return areaWalls
}

export function areaTotal(propsAreaTotal: PropsCalculateAreaTotal) {
  const totalWindowDoor = propsAreaTotal.totalDoor + propsAreaTotal.totalWindow
  let totalArea = 0
  for (let i = 0; i < walls.length; i++) {
    totalArea += propsAreaTotal.areaWalls[`TotalWall${i + 1}`] || 0
  }
  return totalArea - totalWindowDoor
}

export function calculateTotalCain(areaPintar: number) {
  const areaCoverage = cans.map((litersPaint) => {
    return Math.round(litersPaint * 5 * 10) / 10
  })

  let paintLiters = Math.round(areaPintar * 10) / 10
  let can180 = 0
  let can36 = 0
  let can25 = 0
  let can05 = 0
  for (let i = 1; i <= paintLiters; i++) {
    if (paintLiters > areaCoverage[0]) {
      paintLiters = paintLiters - areaCoverage[0]
      can180 += 1
    } else if (paintLiters > areaCoverage[1]) {
      paintLiters = paintLiters - areaCoverage[1]
      can36 += 1
    } else if (paintLiters > areaCoverage[2]) {
      paintLiters = paintLiters - areaCoverage[2]
      can25 += 1
    } else {
      paintLiters = paintLiters - areaCoverage[3]
      can05 += 1
    }
  }

  if (paintLiters > 1 && paintLiters < 6.25) {
    can05 += 1
  }

  return {
    totalArea: areaPintar,
    canPaint05: { canPaint05: areaCoverage[3], count: can05 },
    canPaint25: { canPaint25: areaCoverage[2], count: can25 },
    canPaint36: { canPaint36: areaCoverage[1], count: can36 },
    canPaint180: { canPaint180: areaCoverage[0], count: can180 }
  }
}

export function calculateAreaWindow(inputDoorWindow: StateWindowDoor): number {
  let sumWindow = Number(inputDoorWindow.window['Window0']) || 0
  for (let i = 0; i < walls.length; i++) {
    sumWindow += Number(inputDoorWindow.window[`Window${i + 1}`]) || 0
  }
  return sumWindow
}

export function calculateAreaDoor(inputDoorWindow: StateWindowDoor): number {
  let sumDoor = Number(inputDoorWindow.door['Door0']) || 0
  for (let i = 0; i < walls.length; i++) {
    sumDoor += Number(inputDoorWindow.door[`Door${i + 1}`]) || 0
  }
  return sumDoor
}
