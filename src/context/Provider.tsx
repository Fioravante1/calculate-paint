import {
  doorWindowState,
  wallHeightWidthState,
  totalLitersState
} from 'helpers/initialStates'
import {
  areaTotal,
  calculateArea,
  calculateAreaWindow,
  calculateAreaDoor
} from 'helpers/calculatePaint'
import { ReactNode, useEffect, useState } from 'react'
import ContextFormCalculate from './Context'
import {
  StateHeightWidth,
  StateTotalLiters,
  StateWindowDoor
} from 'helpers/types/types'
import { SetInputsProp } from './types/types'

type PropsContext = {
  children: ReactNode
}

function ProviderFormCalculator({ children }: PropsContext) {
  const [inputWallHeight, setInputWallHeight] =
    useState<StateHeightWidth>(wallHeightWidthState)
  const [inputDoorWindow, setInputDoorWindow] =
    useState<StateWindowDoor>(doorWindowState)
  const [totalLiters, setTotalLiters] =
    useState<StateTotalLiters>(totalLitersState)
  const [inputWallWidth, setInputWallWidth] = useState<number>(0)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [totalWidth, setTotalWidth] = useState<number>(0)
  const [totalDoor, setTotalDoor] = useState<number>(0)
  const [totalWindow, setTotalWindow] = useState<number>(0)
  const [areaWalls, setAreaWalls] = useState<object>({})
  const [areaPintar, setAreaPintar] = useState<number>(0)

  function setInputWallsSize(values: SetInputsProp) {
    if (`Altura${values.index}` === values.name) {
      setInputWallHeight({
        ...inputWallHeight,
        altura: {
          ...inputWallHeight.altura,
          [values.name]: Number(values.value) || 0
        }
      })
    } else {
      setInputWallHeight({
        ...inputWallHeight,
        largura: {
          ...inputWallHeight.largura,
          [values.name]: Number(values.value) || 0
        }
      })
    }
  }

  function setInputSelect(values: SetInputsProp) {
    if (`Door${values.index}` === values.name) {
      setInputDoorWindow({
        ...inputDoorWindow,
        door: {
          ...inputDoorWindow.door,
          [values.name]: 0.8 * 1.9 * Number(values.value)
        }
      })
    } else {
      setInputDoorWindow({
        ...inputDoorWindow,
        window: {
          ...inputDoorWindow.window,
          [values.name]: Math.round(2.0 * 1.2 * Number(values.value) * 10) / 10
        }
      })
    }
  }

  function setInputs(values: SetInputsProp) {
    const verifyWall =
      values.key === `Altura${values.index}` ||
      values.key === `Largura${values.index}`
    const verifyDoorWindow =
      values.key === `Door${values.index}` ||
      values.key === `Window${values.index}`

    if (verifyDoorWindow) {
      setInputSelect(values)
    }

    if (verifyWall) {
      setInputWallsSize(values)
    }
  }

  useEffect(() => {
    const areaWalls = calculateArea(inputWallHeight)
    const calculateAreaTotal = areaTotal({ areaWalls, totalDoor, totalWindow })
    const sumDoor = calculateAreaDoor(inputDoorWindow)
    const sumWindow = calculateAreaWindow(inputDoorWindow)
    setTotalWindow(sumWindow)
    setTotalDoor(sumDoor)
    setAreaPintar(calculateAreaTotal)
  }, [inputWallHeight, inputDoorWindow, totalWindow, totalDoor])

  const valueContext = {
    inputWallHeight,
    setInputWallHeight,
    inputWallWidth,
    setInputWallWidth,
    inputDoorWindow,
    setInputSelect,
    setInputWallsSize,
    setInputs,
    totalHeight,
    totalWidth,
    totalDoor,
    totalWindow,
    areaWalls,
    areaPintar,
    totalLiters,
    setTotalLiters,
    setTotalHeight,
    setTotalWidth,
    setAreaWalls
  }

  return (
    <ContextFormCalculate.Provider value={valueContext}>
      {children}
    </ContextFormCalculate.Provider>
  )
}

export default ProviderFormCalculator
