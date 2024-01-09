import React from 'react'
import SectionTitle from '../utilities/SectionTitle'
import ProductCard from '../product/ProductCard'

const NewArrible = () => {
  return (
    <section className='pt-[128px]'>
        <div className='max-w-container mx-auto'>
            <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals"/>
            <div className='grid grid-cols-4 gap-10 mt-12'>
                <ProductCard/>
            </div>
        </div>
    </section>
  )
}

export default NewArrible