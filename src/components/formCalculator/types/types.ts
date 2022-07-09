import { ChangeEventHandler, MouseEventHandler } from 'react'

export type PropsBtn = {
  titleBtn: string
  disabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  type: 'submit' | 'reset' | 'button' | undefined
  index?: number
}

export type PropsInputsWindowDoor = {
  numberWindowDoor: number[]
  onChange: ChangeEventHandler<HTMLSelectElement>
  index: number
}

export type PropsInputsWalls = {
  onChange: ChangeEventHandler<HTMLInputElement>
  index: number
}
