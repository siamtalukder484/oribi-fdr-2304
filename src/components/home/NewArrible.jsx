import React from 'react'
import SectionTitle from '../utilities/SectionTitle'
import ProductCard from '../product/ProductCard'
import Product1 from '../../assets/product/watch.jpg'

const NewArrible = () => {

  let allproduct = [
    {
      id: 0,
      productname: "alu",
      productprice: "50",
      productimage: Product1,
      isnew: "false",
      discount: "false",
      color: "yellow",
    },
    {
      id: 1,
      productname: "t-shirt",
      productprice: "350",
      productimage: Product1,
      isnew: "false",
      discount: "15",
      color: "red",
    },
    {
      id: 2,
      productname: "watch",
      productprice: "1580",
      productimage: Product1,
      isnew: "true",
      discount: "false",
      color: "false",
    }
  ]

  return (
    <section className='pt-[128px]'>
        <div className='max-w-container mx-auto'>
            <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals"/>
            <div className='grid grid-cols-4 gap-10 mt-12'>
                {allproduct.map((item,index)=>(
                  <ProductCard productprice={item.productprice} productname={item.productname} productimage={item.productimage} isnew={item.isnew} discount={item.discount} color={item.color} id={item.id}/>
                ))

                }
                
            </div>
        </div>
    </section>
  )
}

export default NewArrible