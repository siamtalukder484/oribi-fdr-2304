import React from 'react'
import { Link } from 'react-router-dom'

const UserCart = () => {
  return (
    <div className='w-[205px] absolute right-0 mt-4 border-[1px] border-[#c3c1c1] z-30'>
        <Link to="dashboard" className='bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200 hover:bg-black hover:text-white hover:font-bold'>
          my account
        </Link>
        <Link to="#" className='bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200 hover:bg-black hover:text-white hover:font-bold'>
          log out
        </Link>
    </div>
  )
}

export default UserCart