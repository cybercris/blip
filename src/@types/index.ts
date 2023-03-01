export interface Bot {
  name: string
  type: string
  created: string
  isFavorite: Boolean
  shortName: string
}

interface BotAnalytics {
  user: {
    total: number
    actived: number
  }
  message: {
    received: number
    sent: number
  }
}

export interface BotDetailed {
  shortName: string
  description: string
  image: string
  updated: string
  culture: string
  analytics: BotAnalytics
  name: string
  type: string
  created: string
}
