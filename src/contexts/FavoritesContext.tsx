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
    bots,
  )
  const [searchQuery, setSearchQuery] = useState('')

  function moveBotBetweenLists(bot: Bot, sourceList: Bot[], targetList: Bot[]) {
    const updatedSourceList = sourceList.filter(
      (sourceBot) => sourceBot.name !== bot.name,
    )
    const updatedTargetList = [...targetList, bot]
    return [updatedSourceList, updatedTargetList]
  }

  function addFavorite(bot: Bot) {
    const [updatedNonFavorites, updatedFavorites] = moveBotBetweenLists(
      bot,
      nonFavorites ?? [],
      favorites ?? [],
    )
    setNonFavorites(updatedNonFavorites)
    setFavorites(updatedFavorites)
  }

  function removeFavorite(bot: Bot) {
    const [updatedFavorites, updatedNonFavorites] = moveBotBetweenLists(
      bot,
      favorites ?? [],
      nonFavorites ?? [],
    )
    setFavorites(updatedFavorites)
    setNonFavorites(updatedNonFavorites)
  }

  function toggleFavorite(bot: Bot) {
    const isFavorite = favorites?.some((favorite) => favorite.name === bot.name)

    if (isFavorite) {
      removeFavorite(bot)
    }

    if (!isFavorite) {
      addFavorite(bot)
    }
  }

  function getFilteredBots(botList: Bot[], favoriteList: Bot[]): Bot[] {
    return botList.filter((bot) =>
      favoriteList.some((favorite) => favorite.name === bot.name),
    )
  }

  const favoritesBots = getFilteredBots(bots, favorites ?? [])
  const nonFavoritesBots = getFilteredBots(bots, nonFavorites ?? [])

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
