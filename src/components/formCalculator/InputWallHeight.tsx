import { PropsInputsWalls } from './types/types'

function InputWallHeight({ onChange, index }: PropsInputsWalls) {
  return (
    <label htmlFor="">
      Altura(m)
      <input
        name={`Altura${index}`}
        onChange={onChange}
        type="number"
        required
      />
    </label>
  )
}

export default InputWallHeight
