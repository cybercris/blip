import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['gray-200']};
    color: ${(props) => props.theme['gray-900']};
  }

  body,input,textarea,button {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
  }
`
