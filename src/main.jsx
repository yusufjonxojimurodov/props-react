import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style/index.css"
import Jasur from '../src/components/Jasur'
import Aziz from '../src/components/Aziz'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Jasur />
   <Aziz />
  </StrictMode>,
)
