import { IconButton } from '../../../../components/IconButton'
import { StarImage } from './styles'
import StarImg from '../../../../assets/star.svg'
import { useFavorites } from '../../../../contexts/FavoritesContext'
import { Bot } from '../../../../@types'

interface StarFavoriteProps {
  bot: Bot
  float?: boolean
}

export function StarFavorite({ bot, float }: StarFavoriteProps) {
  const { toggleFavorite } = useFavorites()

  return (
    <IconButton onClick={() => toggleFavorite(bot)}>
      <StarImage src={StarImg} alt="Favorite Button" float={float} />
    </IconButton>
  )
}
