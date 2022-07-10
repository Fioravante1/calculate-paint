import '../styles/reset.scss'
import '../styles/global.scss'
import ProviderFormCalculator from '../context/Provider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderFormCalculator>
      <Component {...pageProps} />
    </ProviderFormCalculator>
  )
}

export default MyApp
