import React from 'react'

import ReactDOM from 'react-dom/client'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './api/queryClient'
import App from './App'

import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
