import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Image from './utilities/Image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

    const [cartInfo, setCartInfo] = useState([
        {
            id: 0,
            title: "i phone 15 pro",
            price: "150000"
        },
        {
            id: 1,
            title: "Titan Watch",
            price: "2250"
        },
        {
            id: 2,
            title: "Logitec Headphone",
            price: "3300"
        },
        {
            id: 3,
            title: "HP Monitor",
            price: "13500"
        },
    ])

  
    let handleItemRemove = (item) => {
        let updatecart = cartInfo.filter((cartItem)=>
            cartItem.id !== item.id
        )
        setCartInfo(updatecart)
        toast('Cart Item Removed', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

  return (
    <>
        <ToastContainer />
        <div className='absolute right-0 mt-4 w-[360px] border-[1px] border-[#c3c1c1] z-30'>
            <div className='p-5 bg-[#F5F5F3] flex flex-col gap-y-4'>
                {
                    cartInfo.map((item, index)=>(
                        <div key={index} className='flex gap-x-5'>
                            <div className='h-20 w-20 bg-red-400 overflow-hidden'>
                                <Image alt="img" className="w-full h-full object-cover"/>
                            </div>
                            <div className='flex justify-between items-center w-[220px]'>
                                <div className='flex flex-col gap-y-3'>
                                    <h4 className='font-dm font-bold text-[14px] text-[#262626] leading-normal capitalize'>{item.title}</h4>
                                    <span className='font-dm font-bold text-[14px] text-[#262626] leading-normal'>${item.price}</span>
                                </div>
                                <div onClick={()=>handleItemRemove(item)} className='cursor-pointer'>
                                    <RxCross2 />
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className='bg-white px-5 pt-[14px] pb-5'>
                <h4 className='font-dm text-base leading-[23px] font-normal'>Subtotal: <span className='text-[#262626] font-bold'>$44.00</span></h4>
                <div className='mt-[13px] flex justify-between'>
                    <Link className='inline-block border-[1px] border-[#2B2B2B] py-4 px-10 text-black text-[14px] font-dm font-bold capitalize transition-all duration-300 hover:bg-black hover:text-white' to="/cart">
                        view cart
                    </Link>
                    <Link className='inline-block border-[1px] border-[#2B2B2B] py-4 px-10 text-black text-[14px] font-dm font-bold capitalize transition-all duration-300 hover:bg-black hover:text-white' to="/checkout"> 
                        checkout
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart