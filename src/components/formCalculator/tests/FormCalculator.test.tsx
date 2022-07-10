import { fireEvent, render, screen } from '@testing-library/react'
import FormCalculator from '../FormCalculator'

const events = jest.fn()

describe('Form component tests', () => {
  beforeEach(() => {
    events.mockClear()
  })
  const renderComponent = () => render(<FormCalculator />)
  test('checks if the wall indicator exists', () => {
    const { getByText } = renderComponent()
    const wall1 = getByText('Parede 1:')
    const wall2 = getByText('Parede 2:')
    const wall3 = getByText('Parede 3:')
    const wall4 = getByText('Parede 4:')
    expect(wall1).toBeInTheDocument()
    expect(wall2).toBeInTheDocument()
    expect(wall3).toBeInTheDocument()
    expect(wall4).toBeInTheDocument()
  })

  test('checks if the label Altura(m) exist', () => {
    const { getAllByText } = renderComponent()
    const label = getAllByText('Altura(m)')
    expect(label[0]).toBeInTheDocument()
    expect(label[0]).toBeInTheDocument()
  })

  test('checks if the label Largura(m) exist', () => {
    const { getAllByText } = renderComponent()
    const label = getAllByText('Largura(m)')
    expect(label[0]).toBeInTheDocument()
    expect(label.length).toBe(4)
  })

  test('checks if the button exist', () => {
    renderComponent()
    const button = screen.getByRole('button', { name: /Calcular/i })
    expect(button).toBeInTheDocument()
  })

  test('checks if the input Altura exist', () => {
    renderComponent()
    const inputHeight = screen.getAllByLabelText('Altura(m)', {
      selector: 'input'
    })
    expect(inputHeight[0]).toBeInTheDocument()
    expect(inputHeight.length).toBe(4)
  })

  test('checks if the input Largura exist', () => {
    renderComponent()
    const inputWidth = screen.getAllByLabelText('Largura(m)', {
      selector: 'input'
    })
    expect(inputWidth[0]).toBeInTheDocument()
    expect(inputWidth.length).toBe(4)
  })

  test('test change event', () => {
    renderComponent()
    const inputWidth = screen.getAllByLabelText('Largura(m)', {
      selector: 'input'
    })

    inputWidth.forEach((value) => {
      fireEvent.change(value)
    })

    expect(inputWidth[0]).toBeInTheDocument()
    expect(events).not.toBeCalledTimes(1)
  })
})
