import { PropsInputsWindowDoor } from './types/types'
import styles from './styles/Form.module.scss'

function InputDoor({
  numberWindowDoor,
  index,
  onChange
}: PropsInputsWindowDoor) {
  return (
    <>
      <div className={styles.container__label}>
        <label htmlFor="InputWindowDoor">Quantidade de portas?</label>
      </div>

      <div className={styles.container__input_window__door}>
        <select name={`Door${index}`} onChange={onChange}>
          {numberWindowDoor.map((valueWindowDoor, index) => (
            <option key={index} value={valueWindowDoor}>
              {valueWindowDoor}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default InputDoor
