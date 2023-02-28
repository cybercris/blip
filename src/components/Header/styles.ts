import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-900']};
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  align-items: center;

  img {
    height: 1.5rem;
  }
`
