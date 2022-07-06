import { render } from '@testing-library/react'
import FormCalculator from '../FormCalculator'

describe('checks that the elements of the form are correct', () => {
  const renderComponent = () => render(<FormCalculator />)
  test('checks if the title of the forms exists', () => {
    const { getByText } = renderComponent()
    const wall1 = getByText('Parede 1')
    const wall2 = getByText('Parede 2')
    const wall3 = getByText('Parede 3')
    const wall4 = getByText('Parede 4')
    expect(wall1).toBeInTheDocument()
    expect(wall2).toBeInTheDocument()
    expect(wall3).toBeInTheDocument()
    expect(wall4).toBeInTheDocument()
  })
})
