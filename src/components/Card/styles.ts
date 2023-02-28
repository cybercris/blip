import styled from 'styled-components'

interface CardContainerProps {
  grow?: boolean
  mr?: number
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;
  margin-right: ${(props) => props.mr ?? 0}px;

  ${(props) =>
    props.grow &&
    `
      flex: 1;
    `}
`
