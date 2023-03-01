import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '.'

describe('Button component', () => {
  it('should render correctly correctly', () => {
    render(<Footer />)

    expect(
      screen.getByText('©2019, BLiP Todos os direitos reservados'),
    ).toBeInTheDocument()
  })
})
