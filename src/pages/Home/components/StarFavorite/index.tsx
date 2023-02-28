import { IconButton } from '../../../../components/IconButton'
import { useFavorites } from '../../../../contexts/FavoritesContext'
import { Bot } from '../../../../@types'

import StarImg from '../../../../assets/star.svg'
import StarFilledImg from '../../../../assets/star-filled.svg'

import { StarImage } from './styles'
import React from 'react'

interface StarFavoriteProps {
  bot: Bot
  float?: boolean
}

export function StarFavorite({ bot, float }: StarFavoriteProps) {
  const { toggleFavorite } = useFavorites()

  const handleStarClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault()
    toggleFavorite(bot)
  }

  return (
    <IconButton>
      <StarImage
        src={!bot?.isFavorite ? StarImg : StarFilledImg}
        alt="Favorite Button"
        float={float}
        onClick={(event) => handleStarClick(event)}
      />
    </IconButton>
  )
}
