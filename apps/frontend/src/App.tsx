import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import Animal from "./assets/Animal.svg?react"
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()
  return (
    <>
      <Animal className="animal-svg" />
      <div className='home-my-pets'>
        <h1>My pets</h1>
        <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
      </div>

      <button className='btn btn-skip' onClick={() => navigate("/pets")}>Skip</button>
    </>
  )
}

export default App
