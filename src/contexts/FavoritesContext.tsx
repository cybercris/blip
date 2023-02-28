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

  function isFavorite(bot: Bot) {
    return favorites.includes(bot)
  }

  function isNonFavorite(bot: Bot) {
    return nonFavorites.includes(bot)
  }

  function addFavorite(bot: Bot) {
    setFavorites([...favorites, bot])
  }

  function addNonFavorite(bot: Bot) {
    setNonFavorites([...nonFavorites, bot])
  }

  function removeFavorite(bot: Bot) {
    setFavorites(favorites.filter((favorite) => favorite.name !== bot.name))
  }

  function removeNonFavorite(bot: Bot) {
    setNonFavorites(
      nonFavorites.filter((nonFavorite) => nonFavorite.name !== bot.name),
    )
  }

  function toggleFavorite(bot: Bot) {
    if (isFavorite(bot)) {
      removeFavorite(bot)
      addNonFavorite(bot)
    } else if (isNonFavorite(bot)) {
      removeNonFavorite(bot)
      addFavorite(bot)
    } else {
      addFavorite(bot)
    }
  }

  const favoritesBots = bots.filter((bot) =>
    favorites.find((favorite) => favorite.name === bot.name),
  )
  const nonFavoritesBots = bots.filter(
    (bot) => !favorites.find((favorite) => favorite.name === bot.name),
  )

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
