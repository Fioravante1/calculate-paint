import styles from '../../styles/Home.module.scss'
import FormCalculator from '../components/formCalculator/FormCalculator'

export default function Home() {
  return (
    <div className={styles.container}>
      <FormCalculator wallText="Parede 1:" />
      <FormCalculator wallText="Parede 2:" />
      <FormCalculator wallText="Parede 3:" />
      <FormCalculator wallText="Parede 4:" />
    </div>
  )
}
