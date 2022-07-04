import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Main />
      </Head>
    </div>
  )
}
