import { Bot } from '../../../../@types'
import { BotsList } from '../BotsList'
import { BotsSectionContainer } from './styles'

interface BotsSectionProps {
  favoritesBots: Bot[]
  nonFavoritesBots: Bot[]
  isBlocksView: boolean
}

export function BotsSection({
  favoritesBots,
  nonFavoritesBots,
  isBlocksView,
}: BotsSectionProps) {
  return (
    <BotsSectionContainer>
      <BotsList bots={favoritesBots} isBlockView={isBlocksView} />
      <hr />
      <BotsList bots={nonFavoritesBots} isBlockView={isBlocksView} />
    </BotsSectionContainer>
  )
}
