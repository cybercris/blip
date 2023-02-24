import { HeaderContainer } from './Header.styles'
import BlipLogo from '../assets/blip-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={BlipLogo} alt="Logo Blip" />
    </HeaderContainer>
  )
}
