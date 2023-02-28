import styled from 'styled-components'

export const BotsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  hr {
    height: 2px;
    border-color: ${(props) => props.theme['gray-400']};
    margin: 2.5rem 0;
  }
`
