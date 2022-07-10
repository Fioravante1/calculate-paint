import { walls } from './initialStates'
import { StateHeightWidth, StateWindowDoor } from './types/types'

function calculationData(
  inputWall: StateHeightWidth,
  inputDoor: StateWindowDoor,
  index: number
) {
  return {
    heigth: inputWall.altura[`Altura${index}`] || 0,
    width: inputWall.largura[`Largura${index}`] || 0,
    door: inputDoor.door[`Door${index}`] || 0,
    window: inputDoor.window[`Window${index}`] || 0
  }
}

export function validationAreaWall(
  inputWall: StateHeightWidth,
  inputDoorWindow: StateWindowDoor
) {
  let totalAreaWall = 0
  let totalAreaWindowDoor = 0
  for (let index = 0; index < walls.length; index++) {
    const data = calculationData(inputWall, inputDoorWindow, index)
    const { heigth, door, width, window } = data
    totalAreaWall += heigth + width
    totalAreaWindowDoor += door + window
    if (heigth * width > 50) {
      return {
        warning: 'Área total da parede excede 50m2!',
        validationDisable: true
      }
    }
    if (heigth * width < 1) {
      return {
        warning: '',
        validationDisable: true
      }
    }
    if (door >= 1.52 && heigth < 2.2) {
      return {
        warning: 'Altura da parede deve ser maior que 2.20m!',
        validationDisable: true
      }
    }
    if (totalAreaWindowDoor > totalAreaWall / 2) {
      return {
        warning:
          'Área total de janela e porta não pode exceder a 50% da área total da parede!',
        validationDisable: true
      }
    }
  }
  return {
    warning: '',
    validationDisable: false
  }
}

export function validationDisableBtn(inputWall: boolean) {
  if (inputWall) {
    return true
  } else {
    return false
  }
}
