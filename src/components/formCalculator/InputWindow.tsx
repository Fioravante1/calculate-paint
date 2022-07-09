import { PropsInputsWindowDoor } from './types/types'

function InputWindow({
  numberWindowDoor,
  onChange,
  index
}: PropsInputsWindowDoor) {
  return (
    <label htmlFor="InputWindowDoor">
      Quantidade de janelas?
      <select onChange={onChange} name={`Window${index}`}>
        {numberWindowDoor.map((valueWindowDoor, index) => (
          <option key={index} value={valueWindowDoor}>
            {valueWindowDoor}
          </option>
        ))}
      </select>
    </label>
  )
}

export default InputWindow
