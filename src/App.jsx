import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Hero from './components/Hero'
import Aside from './components/Aside'
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';


function App() {
  

  return (
    <>
      <Hero />
      <Aside />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />
        
      </Routes>
    </>
  )
}

export default App
