import React, { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  opacity?: Number
}

export function IconButton({ children, opacity, ...rest }: IconButtonProps) {
  return (
    <ButtonContainer opacity={opacity} {...rest}>
      {children}
    </ButtonContainer>
  )
}
