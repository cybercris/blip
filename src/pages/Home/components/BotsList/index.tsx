import React from 'react'
import { Bot } from '../../../../@types'
import { BotCard } from '../BotCard'
import { BotLine } from '../BotLine'
import { BlocksContainer, ListContainer } from './styles'

interface BotListProps {
  bots: Bot[]
  isBlockView: boolean
}

export function BotsList({ bots, isBlockView }: BotListProps) {
  const BotComponent = isBlockView ? BotCard : BotLine
  const BotContainer = isBlockView ? BlocksContainer : ListContainer

  return (
    <BotContainer>
      {bots.map((bot, index) => (
        <BotComponent key={index} bot={bot} />
      ))}
    </BotContainer>
  )
}
