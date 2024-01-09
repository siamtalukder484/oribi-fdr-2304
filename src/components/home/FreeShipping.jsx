import React from 'react'
import { PiNumberTwoBold } from "react-icons/pi";
import { IoMdRefresh } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";

const FreeShipping = () => {
  return (
    <div className='border-b border-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between items-center py-[30px]'>
                <div className='flex items-center gap-x-4'>
                    <PiNumberTwoBold className='text-2xl'/>
                    <p className='text-base font-dm font-normal leading-normal text-[#6D6D6D]'>Two years warranty</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <MdLocalShipping className='text-2xl'/>
                    <p className='text-base font-dm font-normal leading-normal text-[#6D6D6D]'>Free shipping</p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <IoMdRefresh className='text-2xl'/>
                    <p className='text-base font-dm font-normal leading-normal text-[#6D6D6D]'>Return policy in 30 days</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FreeShipping