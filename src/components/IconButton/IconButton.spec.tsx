import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { IconButton } from '.'

describe('Button component', () => {
  it('should render correctly', () => {
    render(<IconButton>Testing</IconButton>)
  })
  it('should call the onClick function when clicked', () => {
    const handleClick = jest.fn()
    render(<IconButton onClick={handleClick}>Click me</IconButton>)
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalled()
  })
})
