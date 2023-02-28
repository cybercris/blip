import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  hr {
    height: 2px;
    border-color: ${(props) => props.theme['gray-400']};
    margin-top: 32px;
    margin-bottom: 24px;
  }
`
