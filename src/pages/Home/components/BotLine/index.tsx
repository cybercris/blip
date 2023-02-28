import { Card } from '../../../../components/Card'

import { dateFormatter } from '../../../../utils/formatter'
import { Bot } from '../../../../@types'

import { BotContainer, BotImg, InfoContainer, LineContainer } from './styles'
import { StarFavorite } from '../StarFavorite'

interface BotLineProps {
  bot: Bot
  index: number
}

export function BotLine({ bot, index }: BotLineProps) {
  return (
    <LineContainer key={index}>
      <StarFavorite bot={bot} />
      <Card grow>
        <BotContainer>
          <InfoContainer>
            <BotImg />
            <h5>{bot?.name}</h5>
          </InfoContainer>
          <p>{dateFormatter(bot?.created)}</p>
        </BotContainer>
      </Card>
    </LineContainer>
  )
}
