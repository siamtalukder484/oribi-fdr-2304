import React, { useState } from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';


const CartPage = () => {

let pathname =  window.location.href
let patharray = pathname.split("/")
let finalpath = patharray[patharray.length - 1]

let [quantity, setQuantity] = useState(5)
let [cursor, setCoursor] = useState(true)

let increment = () => {
  quantity++;
  setQuantity(quantity);
}
let decrement = () => {
  if(quantity > 1){
    quantity--;
    setQuantity(quantity);
  }
}

useEffect(() => {
  if (quantity == 1) {
    setCoursor(false);
  }else{
    setCoursor(true)
  }
}, [quantity]);



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
            <div className="border-b border-[#F0F0F0] py-[30px] flex items-center">
              <div className="px-5 w-[400px] flex items-center">
                <div className="cursor-pointer">
                  <RxCross2 />
                </div>
                <div className="h-[100px] w-[100px] bg-red-500 ml-10"></div>
                <h5 className="ml-5 text-[#262626] text-base font-bold leading-[23px] capitalize">
                  product name
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                  <button
                    onClick={decrement}
                    className={`font-dm text-base text-[#767676] leading-[30px] font-normal ${
                      cursor ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  >
                    -
                  </button>
                  <span className="font-dm text-base text-[#767676] leading-[30px] font-normal">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="font-dm text-base text-[#767676] leading-[30px] font-normal"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
            </div>
            <div className="border-b border-[#F0F0F0] py-[30px] flex items-center">
              <div className="px-5 w-[400px] flex items-center">
                <div className="cursor-pointer">
                  <RxCross2 />
                </div>
                <div className="h-[100px] w-[100px] bg-red-500 ml-10"></div>
                <h5 className="ml-5 text-[#262626] text-base font-bold leading-[23px] capitalize">
                  product name
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                  <button
                    onClick={decrement}
                    className={`font-dm text-base text-[#767676] leading-[30px] font-normal ${
                      cursor ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  >
                    -
                  </button>
                  <span className="font-dm text-base text-[#767676] leading-[30px] font-normal">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="font-dm text-base text-[#767676] leading-[30px] font-normal"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
            </div>
            <div className="border-b border-[#F0F0F0] py-[30px] flex items-center">
              <div className="px-5 w-[400px] flex items-center">
                <div className="cursor-pointer">
                  <RxCross2 />
                </div>
                <div className="h-[100px] w-[100px] bg-red-500 ml-10"></div>
                <h5 className="ml-5 text-[#262626] text-base font-bold leading-[23px] capitalize">
                  product name
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                  <button
                    onClick={decrement}
                    className={`font-dm text-base text-[#767676] leading-[30px] font-normal ${
                      cursor ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  >
                    -
                  </button>
                  <span className="font-dm text-base text-[#767676] leading-[30px] font-normal">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="font-dm text-base text-[#767676] leading-[30px] font-normal"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
            </div>
            <div className="border-b border-[#F0F0F0] py-[30px] flex items-center">
              <div className="px-5 w-[400px] flex items-center">
                <div className="cursor-pointer">
                  <RxCross2 />
                </div>
                <div className="h-[100px] w-[100px] bg-red-500 ml-10"></div>
                <h5 className="ml-5 text-[#262626] text-base font-bold leading-[23px] capitalize">
                  product name
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
              <div className="px-5 w-[400px]">
                <div className="border border-[#F0F0F0] h-[36px] w-[140px] px-5 flex justify-between items-center">
                  <button
                    onClick={decrement}
                    className={`font-dm text-base text-[#767676] leading-[30px] font-normal ${
                      cursor ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  >
                    -
                  </button>
                  <span className="font-dm text-base text-[#767676] leading-[30px] font-normal">
                    {quantity}
                  </span>
                  <button
                    onClick={increment}
                    className="font-dm text-base text-[#767676] leading-[30px] font-normal"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="px-5 w-[400px]">
                <h5 className="text-[#262626] text-xl font-dm leading-normal font-bold">
                  $44.00
                </h5>
              </div>
            </div>
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