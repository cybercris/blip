import React from 'react'
import { render } from '@testing-library/react'
import { Card } from '.'

describe('Card component', () => {
  it('should render correctly', () => {
    render(<Card>Testing</Card>)
  })
})
