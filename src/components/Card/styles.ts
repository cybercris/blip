import styled from 'styled-components'

interface CardContainerProps {
  grow?: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
  border-radius: 7px;

  ${(props) =>
    props.grow &&
    `
      flex: 1;
    `}
`
