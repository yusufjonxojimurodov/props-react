import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/assets/style/index.css"
import Jasur from '../src/components/Jasur'
import Aziz from '../src/components/Aziz'
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <div className='max-w-[100%] w-[85%] mx-auto'>
    <Jasur />
   <Aziz />
 </div>
  </StrictMode>,
)
