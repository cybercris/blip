import { Card } from '../../../../components/Card'

import { Bot } from '../../../../@types'

import { BotContainer, BotImg, InfoContainer } from './styles'
import { StarFavorite } from '../StarFavorite'

interface BotCardProps {
  bot: Bot
  index: number
}

export function BotCard({ bot, index }: BotCardProps) {
  return (
    <Card key={index}>
      <BotContainer>
        <StarFavorite bot={bot} float />
        <InfoContainer>
          <BotImg />
          <h5>{bot?.name}</h5>
          <p>{bot?.type}</p>
        </InfoContainer>
      </BotContainer>
    </Card>
  )
}
