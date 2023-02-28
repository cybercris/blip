import { ReactNode } from 'react'
import { CardContainer } from './styles'

interface CardProps {
  grow?: boolean
  children: ReactNode
}

export function Card({ grow, children }: CardProps) {
  return <CardContainer grow={grow}>{children}</CardContainer>
}
