import React from 'react'
import Aside from './Aside'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
        <div className='flex'>
            <Aside />
            <div className='flex-1 '>
                <Outlet className="ml-64 p-4"/>
            </div>
        </div>
  )
}

export default Layouts