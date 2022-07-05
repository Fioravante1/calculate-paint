type Props = {
  label: string
  numberWindowDoor: number[]
}

function InputWindowDoor({ label, numberWindowDoor }: Props) {
  return (
    <label htmlFor="InputWindowDoor">
      {label}
      <select name="" id="InputWindowDoor">
        {numberWindowDoor.map((valueWindowDoor) => (
          <option key={valueWindowDoor} value={valueWindowDoor}>
            {valueWindowDoor}
          </option>
        ))}
      </select>
    </label>
  )
}

export default InputWindowDoor
