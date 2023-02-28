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
        <img src={BotAvatarImg} alt="Bot Avatar" />
        <WrapperContainer>
          <h2>{bot?.name}</h2>
          <p>Id: {bot?.shortName}</p>
        </WrapperContainer>
      </InfoContainer>
      {/* <p>Created at {dateFormatter(bot?.created)}</p> */}
    </HeaderContainer>
  )
}
