import { createContext, ReactNode, useContext, useState } from 'react'
import { Bot } from '../@types'
import useLocalStorage from '../hooks/useLocalStorage'
import { useBots } from './BotsContext'

interface FavoritesContextType {
  favoritesBots: Bot[]
  nonFavoritesBots: Bot[]
  toggleFavorite: (bot: Bot) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const FavoritesContext = createContext({} as FavoritesContextType)

interface FavoritesContextProviderProps {
  children: ReactNode
}

export function FavoritesContextProvider({
  children,
}: FavoritesContextProviderProps) {
  const { bots } = useBots()
  const [favorites, setFavorites] = useLocalStorage<Bot[]>('favorites', [])
  const [nonFavorites, setNonFavorites] = useLocalStorage<Bot[]>(
    'nonFavorites',
    [],
  )
  const [searchQuery, setSearchQuery] = useState('')

  function addFavorite(bot: Bot) {
    setFavorites([...favorites, bot])
    setNonFavorites(
      nonFavorites.filter((favorite) => favorite.name !== bot.name),
    )
  }

  function removeFavorite(bot: Bot) {
    setNonFavorites([...nonFavorites, bot])
    setFavorites(favorites.filter((favorite) => favorite.name !== bot.name))
  }

  function toggleFavorite(bot: Bot) {
    if (favorites.includes(bot)) {
      removeFavorite(bot)
      bot.isFavorite = false
    } else if (nonFavorites.includes(bot)) {
      addFavorite(bot)
      bot.isFavorite = true
    } else {
      addFavorite(bot)
      bot.isFavorite = true
    }
  }

  const favoritesBots = bots.filter((bot) =>
    favorites.find((favorite) => favorite.name === bot.name),
  )
  const nonFavoritesBots = bots.filter(
    (bot) => !favorites.find((favorite) => favorite.name === bot.name),
  )
  favoritesBots.forEach((bot) => {
    bot.isFavorite = true
  })
  nonFavoritesBots.forEach((bot) => {
    bot.isFavorite = false
  })

  return (
    <FavoritesContext.Provider
      value={{
        favoritesBots,
        nonFavoritesBots,
        toggleFavorite,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }

  return context
}