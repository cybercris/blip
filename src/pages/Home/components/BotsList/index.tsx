import React from 'react'
import { Bot } from '../../../../@types'
import { BotCard } from '../BotCard'
import { BotLine } from '../BotLine'

interface BotListProps {
  bots: Bot[]
  isBlockView: boolean
}

export function BotsList({ bots, isBlockView }: BotListProps) {
  const BotComponent = isBlockView ? BotCard : BotLine

  return (
    <>
      {bots.map((bot, index) => (
        <BotComponent key={index} bot={bot} />
      ))}
    </>
  )
}
