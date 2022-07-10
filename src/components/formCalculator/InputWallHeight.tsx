import { PropsInputsWalls } from './types/types'

function InputWallHeight({ onChange, index }: PropsInputsWalls) {
  return (
    <label htmlFor="Altura">
      Altura(m)
      <input
        id="Altura"
        placeholder="0"
        name={`Altura${index}`}
        onChange={onChange}
        type="number"
        required
      />
    </label>
  )
}

export default InputWallHeight
