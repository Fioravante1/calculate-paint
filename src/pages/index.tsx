import Table from 'components/table/Table'
import styles from '../styles/Home.module.scss'
import FormCalculator from '../components/formCalculator/FormCalculator'
import Intruction from 'components/instruction/Intruction'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__form__table}>
        <div className={styles.container__form}>
          <FormCalculator />
          <Table />
        </div>
        <div className={styles.container__instruction}>
          <Intruction />
        </div>
      </div>
    </div>
  )
}
