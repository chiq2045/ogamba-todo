import { createRoot } from 'react-dom/client'
import { App } from './app'
import 'cirrus-ui'
import './index.css'
import makeServer from './utils/server'
import { StrictMode } from 'react'

makeServer()

const container = document.getElementById('app')
const root = createRoot(container as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
