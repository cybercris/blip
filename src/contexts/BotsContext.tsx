import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Bot } from '../@types'
import { api } from '../services/api'
import { generateShortName } from '../utils/formatter'

interface BotsContextType {
  bots: Bot[]
  addBots: (bots: Bot[]) => void
}

export const BotsContext = createContext({} as BotsContextType)

interface BotsContextProviderProps {
  children: ReactNode
}

export function BotsContextProvider({ children }: BotsContextProviderProps) {
  const [bots, setBots] = useState<Bot[]>([])

  useEffect(() => {
    async function fetchBots() {
      const response = await api.get('/bots')
      const updatedBots = updateBots(response.data)
      setBots(updatedBots)
    }

    fetchBots()
  }, [])

  function addBots(newBots: Bot[]) {
    const updatedBots = updateBots([...bots, ...newBots])
    setBots(updatedBots)
  }

  function updateBots(botsToUpdate: Bot[]): Bot[] {
    return botsToUpdate.map((bot: Bot) => ({
      ...bot,
      shortName: generateShortName(bot.name),
    }))
  }

  return (
    <BotsContext.Provider value={{ bots, addBots }}>
      {children}
    </BotsContext.Provider>
  )
}

export function useBots() {
  const context = useContext(BotsContext)

  if (!context) {
    throw new Error('useBots must be used within a BotsProvider')
  }

  return context
}
