import styles from './styles/Form.module.scss'
import { quantityWindonDoor, walls } from '../../helpers/initialStates'
import InputWallHeight from './InputWallHeight'
import InputWallWidth from './InputWallWidth'
import InputDoor from './InputDoor'
import InputWindow from './InputWindow'
import { useContext } from 'react'
import ContextFormCalculate from '../../context/Context'
import ButtonSubmit from './Button'
import { calculateTotalCain } from '../../helpers/calculatePaint'

function FormCalculator() {
  const { setInputs, setTotalLiters, paintArea, disabled, messageWarning } =
    useContext(ContextFormCalculate)
  function handleOnClick(event) {
    event.preventDefault()
    const totalCain = calculateTotalCain(paintArea)
    setTotalLiters(totalCain)
  }

  return (
    <>
      <form className={styles.form__calculate}>
        {walls.map((value, index) => (
          <div className={styles.container__inputs} key={index}>
            <h1>Parede {value}: </h1>
            <div className={styles.container__inputs__walls}>
              <InputWallHeight
                index={index}
                onChange={({ target }) =>
                  setInputs({
                    index,
                    name: target.name,
                    key: target.name,
                    value: target.value
                  })
                }
              />
              <InputWallWidth
                index={index}
                onChange={({ target }) =>
                  setInputs({
                    index,
                    name: target.name,
                    key: target.name,
                    value: target.value
                  })
                }
              />
            </div>

            <div className={styles.container__input__door}>
              <InputDoor
                onChange={({ target }) =>
                  setInputs({
                    index,
                    name: target.name,
                    key: target.name,
                    value: target.value
                  })
                }
                index={index}
                numberWindowDoor={quantityWindonDoor}
              />
            </div>

            <div className={styles.container__input__door}>
              <InputWindow
                onChange={({ target }) =>
                  setInputs({
                    index,
                    name: target.name,
                    key: target.name,
                    value: target.value
                  })
                }
                index={index}
                numberWindowDoor={quantityWindonDoor}
              />
            </div>
          </div>
        ))}
      </form>
      <h3 className={styles.message__warning}>{messageWarning}</h3>
      <div className={styles.container__btn}>
        <ButtonSubmit
          type="submit"
          onClick={handleOnClick}
          disabled={disabled}
          titleBtn="Calcular"
        />
      </div>
    </>
  )
}
export default FormCalculator
