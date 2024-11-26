import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImageComponent from './components/ImageComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageComponent/>
  </StrictMode>,
)
