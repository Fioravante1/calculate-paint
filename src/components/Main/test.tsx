import { render, screen } from '@testing-library/react'
import Main from './index'

describe('Description describe', () => {
  test('Should', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Calculadora de Tinta/i })
    ).toBeInTheDocument()
  })
})
