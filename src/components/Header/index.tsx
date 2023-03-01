import React from 'react'
import { NavLink } from 'react-router-dom'

import BlipLogo from '../../assets/blip-logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={BlipLogo} alt="Logo Blip" />
      </NavLink>
    </HeaderContainer>
  )
}
