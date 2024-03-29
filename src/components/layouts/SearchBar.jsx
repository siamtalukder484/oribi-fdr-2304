import React, { useState,useRef, useEffect } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import Cart from '../Cart';
import UserCart from '../UserCart';
import CategoryCard from '../CategoryCard';
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
let [showCart, setShowCart] = useState(false)
let [showUserCart, setShowUserCart] = useState(false)
let [showCategory, setShowCategory] = useState(false)
let cartref = useRef()
let userCartRef = useRef()
let categoryref = useRef()
const data = useSelector((state) => state);



useEffect(()=>{
  document.body.addEventListener("click",(e)=>{
    if(cartref.current.contains(e.target)){
      setShowCart(true)
    }else{
      setShowCart(false)
    }

    if(userCartRef.current.contains(e.target)){
      setShowUserCart(true)
    }else{
      setShowUserCart(false)
    }

    if(categoryref.current.contains(e.target)){
      setShowCategory(true)
    }else{
      setShowCategory(false)
    }


  })
},[])



  return (
    <div className='bg-[#F5F5F3] py-[25px]'>
      <div className='max-w-container mx-auto'>
          <div className='flex justify-between items-center'>
            <div ref={categoryref} className='relative'>
                <div onClick={()=>setShowCategory(!showCategory)} className='flex items-center gap-x-[10px] cursor-pointer'>
                  <FaBars />
                  <span className='font-dm text-[14px] capitalize font-normal'>shop by category</span>
                </div>
                {showCategory &&
                  <CategoryCard/>
                }
            </div>
            <div className='w-[600px] relative'>
              <search>
                <input className='py-4 px-5 pr-12  w-full' placeholder='Search Product'/>
              </search>
              <IoSearchOutline className='text-2xl absolute right-4 top-[50%] translate-y-[-50%]'/>
            </div>
            <div className='flex items-center justify-end gap-x-10'>
              <div ref={userCartRef} className=' relative'>
                <div onClick={()=>setShowUserCart(!showUserCart)} className='flex items-center gap-x-[10px] cursor-pointer'>
                  <FaUser className='text-xl text-[#262626]'/>
                  <FaCaretDown />
                </div>
                {showUserCart &&
                  <UserCart/>
                }
              </div>
              <div ref={cartref} className='relative'>
                <IoMdCart onClick={()=>setShowCart(!showCart)} className='text-2xl text-[#262626] cursor-pointer'/>
                <div className='absolute top-3 left-3 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-xl'>
                    {data.cartinfo && data.cartinfo.value.length}
                  </span>
                </div>
                {showCart &&
                  <Cart />
                }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SearchBar