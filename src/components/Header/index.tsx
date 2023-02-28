import { HeaderContainer } from './styles'
import BlipLogo from '../../assets/blip-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={BlipLogo} alt="Logo Blip" />
      </NavLink>
    </HeaderContainer>
  )
}
