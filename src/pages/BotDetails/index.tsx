import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'

import { BotDetailed } from '../../@types'
import { fetch } from '../../utils/fetch'

import { DetailsContainer } from './styles'

export function BotDetails() {
  const { shortName } = useParams()
  const [bot, setBot] = useState({} as BotDetailed)

  useEffect(() => {
    async function fetchBotDetails() {
      const botDetails = await fetch(`${shortName}/details`)
      setBot(botDetails)
    }

    fetchBotDetails()
  }, [shortName])

  return (
    <DetailsContainer>
      <Header bot={bot} />
      <hr />
      <Summary bot={bot} />
      <Footer />
    </DetailsContainer>
  )
}
