import React from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'

const CartPage = () => {

let pathname =  window.location.href
let patharray = pathname.split("/")
let finalpath = patharray[patharray.length - 1]

  return (
    <section className='pt-[124px] pb-[140px]'>
      <div className='max-w-container mx-auto'>
          <div>
            <h3 className='text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]'>cart</h3>
            <BreadCrumb lastpath={finalpath}/>
          </div>
          <div className='mt-[136px]'>
              
          </div>
      </div>
    </section>
  )
}

export default CartPage