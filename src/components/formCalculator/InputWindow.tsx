import { PropsInputsWindowDoor } from './types/types'
import styles from './styles/Form.module.scss'

function InputWindow({
  numberWindowDoor,
  onChange,
  index
}: PropsInputsWindowDoor) {
  return (
    <>
      <div className={styles.container__label}>
        <label htmlFor="InputWindowDoor">Quantidade de janelas?</label>
      </div>
      <div className={styles.container__input_window__door}>
        <select onChange={onChange} name={`Window${index}`}>
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

export default InputWindow
