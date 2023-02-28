import React, { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>
}
