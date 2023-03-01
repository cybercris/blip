import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '../../../../components/Card'
import { StarFavorite } from '../StarFavorite'

import { dateFormatter } from '../../../../utils/formatter'
import { Bot } from '../../../../@types'

import { BotContainer, BotImg, InfoContainer, LineContainer } from './styles'

interface BotLineProps {
  bot: Bot
}

export function BotLine({ bot }: BotLineProps) {
  return (
    <LineContainer>
      <StarFavorite bot={bot} />
      <Card grow>
        <Link to={`${bot?.shortName}/details`}>
          <BotContainer>
            <InfoContainer>
              <BotImg />
              <h5>{bot?.name}</h5>
            </InfoContainer>
            <p>{dateFormatter(bot?.created)}</p>
          </BotContainer>
        </Link>
      </Card>
    </LineContainer>
  )
}
