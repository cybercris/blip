import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  grow?: boolean
  mr?: number
  children: ReactNode
}

export function Card({ grow, mr, children }: CardProps) {
  return (
    <CardContainer grow={grow} mr={mr}>
      {children}
    </CardContainer>
  )
}
