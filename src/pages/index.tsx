import Table from 'components/table/Table'
import styles from '../../styles/Home.module.scss'
import FormCalculator from '../components/formCalculator/FormCalculator'

export default function Home() {
  return (
    <div className={styles.container}>
      <FormCalculator />
      <Table />
    </div>
  )
}
