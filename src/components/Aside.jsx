import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
  return (
    <div>
      <aside className='w-64 min-h-screen bg-[#050510] text-white p-6 flex flex-col  gap-10'>
        <h2>
          FitPulse
        </h2>

        <div className='flex flex-col gap-6'>
          <NavLink to="/">
            Dashboard
          </NavLink>

          <NavLink to="/workouts">
            Workouts
          </NavLink>

          <NavLink to="/nutrition">
            Nutrition
          </NavLink>

          <NavLink to="/progress">
            Progress
          </NavLink>

          <NavLink to="/calendar">
            Calendar
          </NavLink>

          <NavLink to="/music">
            Music
          </NavLink>

          <NavLink to="/settings">
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