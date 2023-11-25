import React from 'react'
import { RxCross2 } from "react-icons/rx";


const Cart = () => {
  return (
    <div className='absolute right-0 mt-4 w-[360px] border-[1px] border-[#c3c1c1]'>
        <div className='p-5 bg-[#F5F5F3] flex flex-col gap-y-4'>
            <div className='flex gap-x-5'>
                <div className='h-20 w-20 bg-red-400'>

                </div>
                <div className='flex justify-between items-center w-[220px]'>
                    <div className='flex flex-col gap-y-3'>
                        <h4 className='font-dm font-bold text-[14px] text-[#262626] leading-normal capitalize'>Black smart watch</h4>
                        <span className='font-dm font-bold text-[14px] text-[#262626] leading-normal'>$44.00</span>
                    </div>
                    <div className='cursor-pointer'>
                        <RxCross2 />
                    </div>
                </div>
            </div>
            <div className='flex gap-x-5'>
                <div className='h-20 w-20 bg-red-400'>

                </div>
                <div className='flex justify-between items-center w-[220px]'>
                    <div className='flex flex-col gap-y-3'>
                        <h4 className='font-dm font-bold text-[14px] text-[#262626] leading-normal capitalize'>Black smart watch</h4>
                        <span className='font-dm font-bold text-[14px] text-[#262626] leading-normal'>$44.00</span>
                    </div>
                    <div className='cursor-pointer'>
                        <RxCross2 />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white px-5 pt-[14px] pb-5'>
            <h4 className='font-dm text-base leading-[23px] font-normal'>Subtotal: <span className='text-[#262626] font-bold'>$44.00</span></h4>
            <div className='mt-[13px] flex justify-between'>
                <a className='inline-block border-[1px] border-[#2B2B2B] py-4 px-10 text-black text-[14px] font-dm font-bold capitalize transition-all duration-300 hover:bg-black hover:text-white' href='#'>view cart</a>
                <a className='inline-block border-[1px] border-[#2B2B2B] py-4 px-10 text-black text-[14px] font-dm font-bold capitalize transition-all duration-300 hover:bg-black hover:text-white' href='#'>checkout</a>
            </div>
        </div>
    </div>
  )
}

export default Cart