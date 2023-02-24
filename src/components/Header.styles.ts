import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-900']};
  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
  align-items: center;

  img {
    height: 2rem;
    margin-right: 6px;
  }
`
