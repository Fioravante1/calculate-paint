import { ChangeEventHandler } from 'react'

type Props = {
  label: string
  numberWindowDoor: number[]
  onChange: ChangeEventHandler<HTMLSelectElement>
  nameSelect: string
  valueSelect: number
}

function InputWindowDoor({
  label,
  numberWindowDoor,
  nameSelect,
  valueSelect,
  onChange
}: Props) {
  return (
    <label htmlFor="InputWindowDoor">
      {label}
      <select
        onChange={onChange}
        value={valueSelect}
        name={nameSelect}
        id="InputWindowDoor"
      >
        {numberWindowDoor.map((valueWindowDoor, index) => (
          <option key={index} value={valueWindowDoor}>
            {valueWindowDoor}
          </option>
        ))}
      </select>
    </label>
  )
}

export default InputWindowDoor
