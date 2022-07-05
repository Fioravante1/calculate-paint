import InputWalls from './InputWalls'
import InputWindowDoor from './InputWindowDoor'
import styles from '../styles/formCalculator.module.scss'

type Props = {
  wallText: string
}

function FormCalculator({ wallText }: Props) {
  const quantityWindonDoor = [0, 1, 2, 3, 4, 5]
  return (
    <>
      <h1>{wallText}</h1>
      <form className={styles.formCalculator}>
        <InputWalls labelWall="Altura(m)" />
        <InputWalls labelWall="Largura(m)" />
        <InputWindowDoor
          label="Quantidade de janelas?"
          numberWindowDoor={quantityWindonDoor}
        />
        <InputWindowDoor
          label="Quantidade de portas?"
          numberWindowDoor={quantityWindonDoor}
        />
      </form>
    </>
  )
}
export default FormCalculator
