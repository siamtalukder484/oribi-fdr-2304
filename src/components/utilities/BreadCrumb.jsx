import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


const BreadCrumb = ({lastpath}) => {
  return (
    <>
        <span className='flex items-center gap-2'>
            <Link className='capitalize text-[12px] text-[#6D6D60] font-dm font-normal leading-normal' to="/">Home</Link>
             <MdOutlineKeyboardArrowRight />
             <Link className='capitalize text-[12px] text-[#6D6D60] font-dm font-normal leading-normal' to="#">
                {lastpath}
             </Link>
        </span>
    </>
  )
}

export default BreadCrumb