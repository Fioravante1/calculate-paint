import { render, screen } from '@testing-library/react'
import Instruction from '../Instruction'

describe('Instruction component tests', () => {
  const renderComponent = () => render(<Instruction />)
  test('checks if title exists', () => {
    renderComponent()
    const title = screen.getAllByRole('heading', { level: 1 })
    expect(title[0]).toHaveTextContent(/CALCULADORA DE TINTA/i)
  })

  test('checks if subtitle exists', () => {
    renderComponent()
    const subTitle = screen.getAllByRole('heading', { level: 2 })
    expect(subTitle[0]).toHaveTextContent(
      /Preencha os campos e clique no botão calcular/i
    )
  })

  test('checks if title instruction exists', () => {
    renderComponent()
    const subTitle = screen.getAllByRole('heading', { level: 1 })
    expect(subTitle[1]).toHaveTextContent(/Instrução de uso:/i)
  })

  test('checks if list instruction exists', () => {
    renderComponent()
    const list = screen.getAllByRole('list', { name: /list-instruction/i })
    expect(list.length).toBe(1)
  })
})
