import { useState } from 'react'

import { Header } from './components/Header'
import { BotsSection } from './components/BotsSection'

import { useBots } from '../../contexts/BotsContext'
import { useFavorites } from '../../contexts/FavoritesContext'

import { api } from '../../services/api'

import { HomeContainer } from './styles'

export function Home() {
  const { addBots } = useBots()
  const { favoritesBots, nonFavoritesBots, searchQuery, setSearchQuery } =
    useFavorites()
  const [isBlocksEnabled, setIsBlocksEnabled] = useState(true)
  const [orderBy, setOrderBy] = useState('name')

  const filteredFavoritesBots = favoritesBots.filter((bot) =>
    bot.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredNonFavoritesBots = nonFavoritesBots.filter((bot) =>
    bot.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  async function fetchFilteredBots() {
    const response = await api.get('/bots', {
      params: { 'Filters[orderBy]': orderBy },
    })
    addBots(response.data)
  }

  function handleOrderBy(orderBy: 'name' | 'creation') {
    setOrderBy(orderBy)
    fetchFilteredBots()
  }

  function toggleBlocksView() {
    setIsBlocksEnabled(true)
  }

  function toggleListView() {
    setIsBlocksEnabled(false)
  }

  return (
    <HomeContainer>
      <Header
        searchQuery={searchQuery}
        handleSearchQueryChange={setSearchQuery}
        handleOrderByChange={handleOrderBy}
        handleToggleBlocksView={toggleBlocksView}
        handleToggleListView={toggleListView}
        isBlocksView={isBlocksEnabled}
      />
      <h2>Favorites</h2>
      <BotsSection
        favoritesBots={filteredFavoritesBots}
        nonFavoritesBots={filteredNonFavoritesBots}
        isBlocksView={isBlocksEnabled}
      />
    </HomeContainer>
  )
}
