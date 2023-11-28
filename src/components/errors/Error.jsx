import React from 'react'
import Peragraph from '../utilities/Peragraph'
import Input from '../utilities/Input'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='pt-20 pb-[140px]'>
      <div className="max-w-container mx-auto">
        <span className='text-[200px] font-dm font-bold text-[#262626]'>404</span>
        <Peragraph style="w-[644px] text-base font-normal font-dm text-[#767676] leading-[30px]" text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"/>
        <form className='w-[643px] mt-[50px]'>
          <div className='relative'>
            <Input style="p-5 w-full border-[1px] border-[#F0F0F0]" type="text" placeholder="Type to Search"/>
            <IoSearchOutline className='text-2xl absolute right-5 top-[50%] translate-y-[-50%]'/>
          </div>
        </form>
        <Link to="/" className='mt-[60px] bg-[#262626] text-white py-4 px-14 inline-block capitalize text-sm font-dm font-bold'>
          back to home
        </Link>
      </div>
    </section>
  )
}

export default Error