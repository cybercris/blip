import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-800']};
  }
`
