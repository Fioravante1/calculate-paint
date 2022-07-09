import { PropsInputsWindowDoor } from './types/types'

function InputDoor({
  numberWindowDoor,
  index,
  onChange
}: PropsInputsWindowDoor) {
  return (
    <label htmlFor="InputWindowDoor">
      Quantidade de portas?
      <select name={`Door${index}`} onChange={onChange}>
        {numberWindowDoor.map((valueWindowDoor, index) => (
          <option key={index} value={valueWindowDoor}>
            {valueWindowDoor}
          </option>
        ))}
      </select>
    </label>
  )
}

export default InputDoor
