import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Header } from './components/Header'
import { Summary } from './components/Summary'

import { BotDetailed } from '../../@types'
import { fetch } from '../../utils/fetch'

import { DetailsContainer, FooterSeparator, HeaderSeparator } from './styles'

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
      <HeaderSeparator />
      <Summary bot={bot} />
      <FooterSeparator />
      <footer>
        <p>
          ©2019, BLiP Todos os direitos reservados <span>| Termos de Uso</span>
        </p>
      </footer>
    </DetailsContainer>
  )
}
