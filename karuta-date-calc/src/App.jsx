import { useState } from 'react'
import './App.css'

import DatingCalc from './components/DatingCalc';

function App() { 

  return (
    <div id="body">
      <div id="message">
        <p1>Welcome lovers!</p1>
        <p2>Do you need help with your date? Are you trying to impress your crush and show them a good time? Can't take anymore rejections?</p2>
        <p2>Then look no further because you're in the right place! This is your cupid speaking!</p2>
        <p2>Using the world's most advanced and powerful AI, this super calculator will guide you through every step of your date to ensure a successful outcome.</p2>
        <p2 id="price">FOR A LOW LOW PRICE OF ONLY 100k gems or 5 easy installments of 20k gems, your crush is guarantee to fall head over heels for you!!! </p2>
      </div>

      <DatingCalc />
    </div>
  )
}

export default App