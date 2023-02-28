import React from 'react'
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
  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    if (event.button !== 0) {
      event.preventDefault()
    }
  }
  return (
    <BotCardContainer key={index}>
      <Link
        to={`${bot?.shortName}/details`}
        onMouseDown={(event) => handleLinkClick(event)}
      >
        <Card>
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
