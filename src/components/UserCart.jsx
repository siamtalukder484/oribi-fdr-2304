import React from 'react'

const UserCart = () => {
  return (
    <div className='w-[205px] absolute right-0 mt-4 border-[1px] border-[#c3c1c1]'>
        <a className='bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200 hover:bg-black hover:text-white hover:font-bold' href='#'>my account</a>
        <a className='bg-white block px-[60px] py-4 text-center text-[#262626] text-[14px] font-normal font-dm capitalize transition-all duration-200 hover:bg-black hover:text-white hover:font-bold' href='#'>log out</a>
    </div>
  )
}

export default UserCart