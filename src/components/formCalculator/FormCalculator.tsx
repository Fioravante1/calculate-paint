import styles from '../styles/formCalculator.module.scss'
import { quantityWindonDoor, walls } from '../../helpers/initialStates'
import InputWallHeight from './InputWallHeight'
import InputWallWidth from './InputWallWidth'
import InputDoor from './InputDoor'
import InputWindow from './InputWindow'
import { useContext } from 'react'
import ContextFormCalculate from 'context/Context'
import ButtonSubmit from './Button'
import { calculateTotalCain } from 'helpers/calculatePaint'

function FormCalculator() {
  const { setInputs, setTotalLiters, areaPintar } =
    useContext(ContextFormCalculate)
  function handleOnClick(event) {
    event.preventDefault()
    const totalCain = calculateTotalCain(areaPintar)
    setTotalLiters(totalCain)
  }

  return (
    <>
      <form className={styles.formCalculator}>
        {walls.map((value, index) => (
          <div className={styles.container__inputs} key={index}>
            <h1 className="wall-title">Parede {value}: </h1>
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
            <div>
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
        <ButtonSubmit
          type="submit"
          onClick={handleOnClick}
          disabled={false}
          titleBtn="Calcular"
        />
      </form>
    </>
  )
}
export default FormCalculator
