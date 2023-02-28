import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from '.'

jest.mock('../../contexts/BotsContext', () => {
  return {
    useBots() {
      return {
        bots: [
          {
            name: 'Billy Hargrove',
            type: 'router',
            created: '2020-01-01T14:35:44.510Z',
          },
          {
            name: 'Dustin Henderson',
            type: 'builder',
            created: '2020-03-21T14:35:44.510Z',
          },
        ],
      }
    },
  }
})

jest.mock('../../contexts/FavoritesContext', () => {
  return {
    useFavorites() {
      return {
        favoritesBots: [
          {
            name: 'Billy Hargrove',
            type: 'router',
            created: '2020-01-01T14:35:44.510Z',
          },
        ],
        nonFavoritesBots: [
          {
            name: 'Dustin Henderson',
            type: 'builder',
            created: '2020-03-21T14:35:44.510Z',
          },
        ],
        searchQuery: '',
        setSearchQuery: () => {},
      }
    },
  }
})

describe('Home page', () => {
  it('should render correctly', () => {
    render(<Home />)
  })
})
