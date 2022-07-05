import { ReactNode, useState } from 'react'
import ContextFormCalculate from './Context'
import { initialContext } from './InitialContext'

type PropsContext = {
  children: ReactNode
}

function ProviderFormCalculator({ children }: PropsContext) {
  const [name, setName] = useState(initialContext.name)

  const valueContext = {
    name,
    setName
  }

  return (
    <ContextFormCalculate.Provider value={valueContext}>
      {children}
    </ContextFormCalculate.Provider>
  )
}

export default ProviderFormCalculator
