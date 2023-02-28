import { Bot } from '../../../../@types'
import { BotCard } from '../BotCard'
import { BotLine } from '../BotLine'
import { BlocksContainer, ListContainer } from './styles'

interface BotListProps {
  bots: Bot[]
  isBlockView: boolean
}

export function BotsList({ bots, isBlockView }: BotListProps) {
  function renderBot(bot: Bot, index: number) {
    const BotComponent = isBlockView ? BotCard : BotLine
    return <BotComponent bot={bot} index={index} />
  }

  const BotContainer = isBlockView ? BlocksContainer : ListContainer

  return <BotContainer>{bots.map(renderBot)}</BotContainer>
}
