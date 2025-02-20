import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowswerRouter } from 'react'

createRoot(document.getElementById('root')).render(
  <BrowswerRouter>
    <App />
  </BrowswerRouter>,
)
