import React from 'react'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
        <div className='flex'>
            <Aside />
            <div className='flex-1 '>
                <Outlet />
            </div>
        </div>
  )
}

export default Layouts