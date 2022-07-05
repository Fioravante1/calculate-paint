import { createContext } from 'react'
import { initialContext, TypeInitialState } from './InitialContext'

const ContextFormCalculate = createContext<TypeInitialState>(initialContext)

export default ContextFormCalculate
