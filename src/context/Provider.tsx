import { ReactNode } from 'react'
import ContextFormCalculate from './Context'

type PropsContext = {
  children: ReactNode
}

function ProviderFormCalculator({ children }: PropsContext) {
  const valueContext = {}

  return (
    <ContextFormCalculate.Provider value={valueContext}>
      {children}
    </ContextFormCalculate.Provider>
  )
}

export default ProviderFormCalculator
