import { PropsInputsWalls } from './types/types'

function InputWallWidth({ onChange, index }: PropsInputsWalls) {
  return (
    <label htmlFor="Largura">
      Largura(m)
      <input
        id="Largura"
        placeholder="0"
        name={`Largura${index}`}
        onChange={onChange}
        type="number"
        required
      />
    </label>
  )
}

export default InputWallWidth
