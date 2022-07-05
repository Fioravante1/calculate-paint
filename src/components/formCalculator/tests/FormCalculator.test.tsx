import { render, screen } from '@testing-library/react'
import FormCalculator from '../FormCalculator'

describe('Description describe', () => {
  test('Should', () => {
    render(<FormCalculator wallText="Parede 1:" />)

    expect(
      screen.getByRole('heading', { name: /Parede 1:/i })
    ).toBeInTheDocument()
  })
})
