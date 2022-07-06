import InputWalls from './InputWalls'
import InputWindowDoor from './InputWindowDoor'
import styles from '../styles/formCalculator.module.scss'
import { FormEvent, useState } from 'react'
import { heightWall, quantityWindonDoor } from '../../helpers/initialStates'

function FormCalculator() {
  const [walls, setWalls] = useState(heightWall)

  function handleOnChange(index: number, { target }: FormEvent) {
    const { name, value } = target as HTMLInputElement
    const newArrWalls = [...walls]
    newArrWalls[index][name] = value
    setWalls(newArrWalls)
  }
  return (
    <>
      {walls.map((formValue, index) => (
        <div key={index}>
          <h1>{formValue.numberWall}</h1>
          <form className={styles.formCalculator}>
            <InputWalls
              handleOnChange={(event) => handleOnChange(index, event)}
              valueInput={formValue[`paredeHeight${index + 1}`]}
              heightWidth={formValue.numberWallHeight}
              labelWall="Altura(m)"
            />
            <InputWalls
              handleOnChange={(event) => handleOnChange(index, event)}
              valueInput={formValue[`paredeWidth${index + 1}`]}
              heightWidth={formValue.numberWallWidth}
              labelWall="Largura(m)"
            />
            <InputWindowDoor
              valueSelect={formValue[`selectDoor${index + 1}`]}
              nameSelect={formValue.selectWindow}
              onChange={(event) => handleOnChange(index, event)}
              label="Quantidade de janelas?"
              numberWindowDoor={quantityWindonDoor}
            />
            <InputWindowDoor
              valueSelect={formValue[`selectWindow${index + 1}`]}
              nameSelect={formValue.selectDoor}
              onChange={(event) => handleOnChange(index, event)}
              label="Quantidade de portas?"
              numberWindowDoor={quantityWindonDoor}
            />
          </form>
        </div>
      ))}
    </>
  )
}
export default FormCalculator
