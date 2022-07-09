import {
  doorWindowState,
  wallHeightWidthState,
  totalLitersState
} from 'helpers/initialStates'
import { areaTotal, calculateArea } from 'helpers/calculatePaint'
import { ReactNode, useEffect, useState } from 'react'
import ContextFormCalculate from './Context'
import {
  StateHeightWidth,
  StateTotalLiters,
  StateWindowDoor
} from 'helpers/types/types'
import { SetInputsProp } from './types/types'
import { validationAreaWall, validationDisableBtn } from 'helpers/validations'

type PropsContext = {
  children: ReactNode
}

function ProviderFormCalculator({ children }: PropsContext) {
  const [inputWall, setInputWall] =
    useState<StateHeightWidth>(wallHeightWidthState)
  const [inputDoorWindow, setInputDoorWindow] =
    useState<StateWindowDoor>(doorWindowState)
  const [totalLiters, setTotalLiters] =
    useState<StateTotalLiters>(totalLitersState)
  const [inputWallWidth, setInputWallWidth] = useState<number>(0)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [totalWidth, setTotalWidth] = useState<number>(0)
  const [areaWalls, setAreaWalls] = useState<object>({})
  const [paintArea, setPaintArea] = useState<number>(0)
  const [messageWarning, setMessageWarning] = useState<string>('')
  const [disabled, setDisebled] = useState(false)

  function setInputWallsSize(values: SetInputsProp) {
    if (`Altura${values.index}` === values.name) {
      setInputWall({
        ...inputWall,
        altura: {
          ...inputWall.altura,
          [values.name]: Number(values.value) || 0
        }
      })
    } else {
      setInputWall({
        ...inputWall,
        largura: {
          ...inputWall.largura,
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
    const validation = validationAreaWall(inputWall, inputDoorWindow)
    const validationDisable = validationDisableBtn(validation.validationDisable)
    setMessageWarning(validation.warning)
    setDisebled(validationDisable)
  }, [inputWall, inputDoorWindow])

  useEffect(() => {
    const areaWalls = calculateArea(inputWall)
    const calculateAreaTotal = areaTotal({ areaWalls, inputDoorWindow })
    setPaintArea(calculateAreaTotal)
  }, [inputWall, inputDoorWindow])

  const valueContext = {
    inputWall,
    setInputWall,
    inputWallWidth,
    setInputWallWidth,
    inputDoorWindow,
    setInputSelect,
    setInputWallsSize,
    setInputs,
    totalHeight,
    totalWidth,
    areaWalls,
    paintArea,
    totalLiters,
    setTotalLiters,
    setTotalHeight,
    setTotalWidth,
    setAreaWalls,
    messageWarning,
    disabled
  }

  return (
    <ContextFormCalculate.Provider value={valueContext}>
      {children}
    </ContextFormCalculate.Provider>
  )
}

export default ProviderFormCalculator
