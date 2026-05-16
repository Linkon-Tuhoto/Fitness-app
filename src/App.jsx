import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Hero from './components/Hero'
import Aside from './components/Aside'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import Layouts from './components/Layouts';


function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layouts />} >
        <Route path="/" index element={<Hero />} />
        <Route path="/workouts" element={<Workouts />} />
        </Route>
        
      </Routes>
    
    </>
  )
}

export default App
