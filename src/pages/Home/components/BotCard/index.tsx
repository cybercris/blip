import { Link } from 'react-router-dom'

import { Card } from '../../../../components/Card'
import { StarFavorite } from '../StarFavorite'

import { Bot } from '../../../../@types'

import { BotCardContainer, BotContainer, BotImg, InfoContainer } from './styles'

interface BotCardProps {
  bot: Bot
  index: number
}

export function BotCard({ bot, index }: BotCardProps) {
  return (
    <BotCardContainer>
      <Link to={`${bot?.shortName}/details`}>
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
      </Link>
    </BotCardContainer>
  )
}
