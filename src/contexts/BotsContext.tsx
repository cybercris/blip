import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Bot } from '../@types'
import { api } from '../services/api'

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
    const fetchBots = async () => {
      const response = await api.get('/bots')
      setBots(response.data)
    }
    fetchBots()
  }, [])

  function addBots(bots: Bot[]) {
    setBots(bots)
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
