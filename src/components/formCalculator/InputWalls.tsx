import { ChangeEventHandler } from 'react'

type Props = {
  labelWall: string
  heightWidth: string
  valueInput: number
  handleOnChange: ChangeEventHandler<HTMLInputElement>
}

function InputWalls({
  labelWall,
  heightWidth,
  valueInput,
  handleOnChange
}: Props) {
  return (
    <label htmlFor="">
      {labelWall}
      <input
        value={valueInput}
        name={heightWidth}
        onChange={handleOnChange}
        type="number"
      />
    </label>
  )
}

export default InputWalls
