import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style/index.css"
import Jasur from '../src/components/Jasur'
import Aziz from '../src/components/Aziz'
import Api from '../src/components/Api'
createRoot(document.getElementById('root')).render(
  <>
 <div className='max-w-[100%] w-[85%] mx-auto'>
    <Jasur />
   <Aziz />
 </div>
  </>,
)
