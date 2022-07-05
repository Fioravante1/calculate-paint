type Props = {
  labelWall: string
}

function InputWalls({ labelWall }: Props) {
  return (
    <label htmlFor="">
      {labelWall}
      <input type="number" />
    </label>
  )
}

export default InputWalls
