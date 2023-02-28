import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BotsContextProvider } from './contexts/BotsContext'
import { FavoritesContextProvider } from './contexts/FavoritesContext'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BotsContextProvider>
          <FavoritesContextProvider>
            <Router />
            <GlobalStyle />
          </FavoritesContextProvider>
        </BotsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
