import React, { useState } from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { quantityIncrement,quantityDecrement } from "../../slices/cartSlice";

const CartPage = () => {

let pathname =  window.location.href
let patharray = pathname.split("/")
let finalpath = patharray[patharray.length - 1]
console.log("yeah");
  
const dispatch = useDispatch();
  const data = useSelector((state) => state);
  let cartitemvalue = data.cartinfo && data.cartinfo.value;
let [cartInfo, setCartInfo] = useState(cartitemvalue)



useEffect(()=>{
  setCartInfo(cartitemvalue)
},[cartitemvalue])

let increment = (index) => {
  dispatch(quantityIncrement(index))
}

let decrement = (index) => {
  dispatch(quantityDecrement(index))
};


  return (
    <section className="pt-[124px] pb-[140px]">
      <div className="mx-auto max-w-container">
        <div>
          <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">
            cart
          </h3>
          <BreadCrumb lastpath={finalpath} />
        </div>
        <div className="mt-[136px] border border-[#F0F0F0]">
          <div className="pt-[34px] pb-[32px] bg-[#F5F5F3] flex ">
            <div className="px-5 w-[400px]">
              <h5 className="text-base font-bold font-dm text-[#262626] leading-[24px] capitalize">
                product
              </h5>
            </div>
            <div className="px-5 w-[400px]">
              <h5 className="text-base font-bold font-dm text-[#262626] leading-[24px] capitalize">
                price
              </h5>
            </div>
            <div className="px-5 w-[400px]">
              <h5 className="text-base font-bold font-dm text-[#262626] leading-[24px] capitalize">
                quantity
              </h5>
            </div>
            <div className="px-5 w-[400px]">
              <h5 className="text-base font-bold font-dm text-[#262626] leading-[24px] capitalize">
                total
              </h5>
            </div>
          </div>
          <div>
            {cartInfo.map((item,index)=>(
              <div key={index} className="border-b border-[#F0F0F0] py-[30px] flex items-center">
                <div className="px-5 w-[400px] flex items-center">
                  <div className="cursor-pointer">
                    <RxCross2 />
                  </div>
                  <div className="h-[100px] w-[100px] bg-red-500 ml-10">
                    <img src={item.productimage} alt="img"/>
                  </div>
                  <h5 className="ml-5 text-[#262626] text-base font-bold leading-[23px] capitalize">
                    {item.productname}
                  </h5>
                </div>
                <div className="px-5 w-[400px]">
                  <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                    ${item.productprice}
                  </h5>
                </div>
                <div className="px-5 w-[400px]">
                  <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                    <button
                      onClick={() => decrement(index)}
                      className={`font-dm text-base text-[#767676] leading-[30px] font-normal cursor-pointer`}
                    >
                      -
                    </button>
                    <span className="font-dm text-base text-[#767676] leading-[30px] font-normal">
                      {item.quantity}
                    </span>
                    <button
                     onClick={() => increment(index)}
                      className="font-dm text-base text-[#767676] leading-[30px] font-normal"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="px-5 w-[400px]">
                  <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                    ${item.productprice * item.quantity}
                  </h5>
                </div>
              </div>
            ))
            }
            
          </div>
          <div className="py-[20px] px-5 text-right">
            <button className="text-base capitalize bg-[#262626] text-white px-8 py-4">
              Update cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage