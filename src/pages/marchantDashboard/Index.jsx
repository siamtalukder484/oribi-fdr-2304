import React from 'react'
import { Outlet } from 'react-router-dom'

const MarchantDashboard = () => {
  return (
    <>
        <div className='py-[30px] bg-red-200'>
            <h1 className='text-center'>This is marchant dashboard</h1>
        </div>
        <Outlet/>
        <div className='py-[30px] bg-red-200'>
            <h1 className='text-center'>This is marchant Footer</h1>
        </div>
    </>
  )
}

export default MarchantDashboard