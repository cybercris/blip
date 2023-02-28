import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  margin: 2rem 3.75rem;
  background-color: ${(props) => props.theme['gray-200']};
`
