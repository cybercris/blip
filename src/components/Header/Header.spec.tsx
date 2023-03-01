import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'
import { BrowserRouter } from 'react-router-dom'

describe('Header component', () => {
  it('should render', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  })
})
