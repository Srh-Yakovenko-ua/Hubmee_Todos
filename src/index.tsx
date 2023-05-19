import React from 'react'

import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app/App'
import { persistor, store } from './app/store/store'
import { theme } from './styles/theme'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
