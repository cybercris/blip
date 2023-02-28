import { IconButton } from '../../../../components/IconButton'
import { useFavorites } from '../../../../contexts/FavoritesContext'
import { Bot } from '../../../../@types'

import StarImg from '../../../../assets/star.svg'
import StarFilledImg from '../../../../assets/star-filled.svg'

import { StarImage } from './styles'

interface StarFavoriteProps {
  bot: Bot
  float?: boolean
}

export function StarFavorite({ bot, float }: StarFavoriteProps) {
  const { toggleFavorite } = useFavorites()

  return (
    <IconButton onClick={() => toggleFavorite(bot)}>
      <StarImage
        src={!bot?.isFavorite ? StarImg : StarFilledImg}
        alt="Favorite Button"
        float={float}
      />
    </IconButton>
  )
}
