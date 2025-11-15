import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CompThrow from './ComputerThrowComponent.jsx'
import PlayThrow from './PlayerThrowComponent.jsx'
import DisplayResult from './DisplayResultComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    { }
      <div>
        <h1>Rock Paper Scissors</h1>
        <CompThrow />
        <PlayThrow />
        <DisplayResult />
    { }
      </div>
  </StrictMode>,
)