import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-900']};
  display: flex;
  justify-content: center;
  padding: 13px 0;
  height: 2.75rem;
  align-items: center;

  img {
    height: 1.2rem;
  }

  a {
    height: 1.2rem;
  }
`
