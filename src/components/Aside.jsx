import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <div className=''>
      <aside className='w-64 min-h-screen bg-[#050510] text-white p-6 flex flex-col  gap-10 fixed left-0 top-0'>
        <h2>
          FitPulse
        </h2>

        <div className='flex flex-col gap-6'>
          <NavLink to="/" className={({isActive}) => ` px-5 py-3 rounded-lg text-center
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Dashboard
          </NavLink>

          <NavLink to="/workouts" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`}>
            Workouts
          </NavLink>

          <NavLink to="/nutrition" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Nutrition
          </NavLink>

          <NavLink to="/progress" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Progress
          </NavLink>

          <NavLink to="/calendar" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Calendar
          </NavLink>

          <NavLink to="/music" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Music
          </NavLink>

          <NavLink to="/settings" className={({isActive}) => ` px-5 py-3 rounded-lg text-center 
          ${isActive ? "bg-purple-600" : "hover:bg-gray-500"
          }`} >
            Settings
          </NavLink>
        </div>

        <div>
          <div>
            <img src="" alt="" />
            <div>
              <h2>James King'ori</h2>
              <p>Level 18</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <h2>
                70%
              </h2>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Aside