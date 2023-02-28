import { BotDetailed } from '../../../../@types'
import { dateFormatter } from '../../../../utils/formatter'

import { HeaderContainer, InfoContainer, WrapperContainer } from './styles'
import BotAvatarImg from '../../../../assets/bot-photo.svg'

interface HeaderProps {
  bot: BotDetailed
}

export function Header({ bot }: HeaderProps) {
  return (
    <HeaderContainer>
      <InfoContainer>
        {!bot?.image ? (
          <img src={BotAvatarImg} alt="Bot Avatar" />
        ) : (
          <img src={bot.image} alt="Bot Avatar" />
        )}
        <WrapperContainer>
          <h2>{bot?.name}</h2>
          <p>Id: {bot?.shortName}</p>
        </WrapperContainer>
      </InfoContainer>
      {bot?.created && <p>Created at {dateFormatter(bot?.created)}</p>}
    </HeaderContainer>
  )
}
