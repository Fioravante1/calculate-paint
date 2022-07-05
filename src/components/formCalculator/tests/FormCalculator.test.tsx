import { render, screen } from '@testing-library/react'
import FormCalculator from '../FormCalculator'

describe('Description describe', () => {
  test('Should', () => {
    render(<FormCalculator />)

    expect(
      screen.getByRole('heading', { name: /Calculadora de Tinta/i })
    ).toBeInTheDocument()
  })
})
