import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { theme } from './Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
