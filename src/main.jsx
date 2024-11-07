import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './ContexApiComponent/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>,
)
