import { render, screen } from '@testing-library/react'
import Table from '../Table'
import ContextFormCalculate from '../../../context/Context'
import { totalLitersState } from '../../../helpers/initialStates'

describe('Table component tests', () => {
  test('test table', () => {
    const wrapper = ({ children }) => (
      <ContextFormCalculate.Provider value={totalLitersState}>
        {children}
      </ContextFormCalculate.Provider>
    )

    render(<Table />, { wrapper })

    expect(
      screen.queryByText(
        `Área total de parede: ${totalLitersState.totalArea}m2`
      )
    ).toBeInTheDocument()
  })
})
