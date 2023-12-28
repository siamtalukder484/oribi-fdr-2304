import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <Link to="http://localhost:5173/xyz">
        <h1 className='text-[30px]'>Go to Marchant Dashboard</h1>
      </Link>
    </>
  )
}

export default Dashboard