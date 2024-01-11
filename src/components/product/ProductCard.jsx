import React, { useEffect, useState } from 'react'
import Image from '../utilities/Image'
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const ProductCard = ({productprice,productname,productimage,isnew,discount,color,id}) => {


    let [newProduct, setNewProduct] = useState(false)

    useEffect(()=>{
        if(isnew == "true"){
            setNewProduct(true)
            console.log("ami true");
        }else{
            setNewProduct(false)
            console.log("ami false");
        }
    },[isnew])

  return (
    <div>
        <div className='group h-[370px] bg-red-300 relative overflow-hidden shadow-lg'>
            <Link to={`/product/${id}`}>
                <Image className="w-full h-full object-cover" source={productimage} alt="img"/>
            </Link>
            {newProduct 
            ?
            <span className='px-8 py-2 bg-[#262626] text-white font-dm text-xs font-bold absolute left-4 top-4'>New</span>
            :
            ""
            }
            {discount == "false"
                ?
                ""
                :
                <span className='px-8 py-2 bg-[#262626] text-white font-dm text-xs font-bold absolute left-4 top-4'>{discount}%</span>
            }
            <div className='w-full p-[30px] bg-white absolute left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300 '>
                <ul className='flex flex-col gap-y-5'>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>add to wish list</span>
                        <FaHeart />
                    </li>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>compare</span>
                        <LuRefreshCcw  />
                    </li>
                    <li className='group inline-flex items-center justify-end gap-x-4 cursor-pointer'>
                        <span className='font-dm text-[#767676] group-hover:text-[#262626] text-base font-normal leading-normal capitalize'>add to cart</span>
                        <FaCartShopping />
                    </li>
                </ul>
            </div>
        </div>
        <div className='mt-6 flex justify-between'>
            <h5 className='font-dm text-[#262626] text-xl font-bold capitalize'>{productname}</h5>
            <span className='font-dm text-[#767676] text-base font-normal leading-[30px]'>{productprice}</span>
        </div>
        {color == "false"
        ?
        ""
        :
        <div>
            <span className='text-[#767676] text-base font-dm font-normal leading-[30px] capitalize'>{color}</span>
        </div>
        }
    </div>
  )
}

export default ProductCard