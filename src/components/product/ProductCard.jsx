import React from 'react'
import Image from '../utilities/Image'
import { FaHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div>
        <div className='group h-[370px] bg-red-300 relative overflow-hidden shadow-lg'>
            <Image source="" alt="img"/>
            <div className='w-full p-[30px] bg-white absolute left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 '>
                <ul className='flex flex-col gap-y-5'>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>add to wish list</span>
                        <FaHeart />
                    </li>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>add to wish list</span>
                        <FaHeart />
                    </li>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>add to wish list</span>
                        <FaHeart />
                    </li>
                </ul>
            </div>
        </div>
        <div className='mt-6 flex justify-between'>
            <h5 className='font-dm text-[#262626] text-xl font-bold capitalize'>smart watch</h5>
            <span className='font-dm text-[#767676] text-base font-normal leading-[30px]'>44.00</span>
        </div>
    </div>
  )
}

export default ProductCard