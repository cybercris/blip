import styled from 'styled-components'

export const HomeContainer = styled.div`
  h1 {
    float: left;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-900']};
    margin-top: 8px;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-800']};
  }
`
