import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button component', () => {
  it('should render correctly correctly correctly correctly correctly correctly correctly', () => {
    render(<Button>Testing</Button>)
  })
  it('should call the onClick function when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled()
  })
})
