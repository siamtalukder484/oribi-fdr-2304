import React from 'react'
import SectionTitle from '../utilities/SectionTitle'
import ProductCard from '../product/ProductCard'
import Product1 from '../../assets/product/watch.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import dummyProducts from "../dummoyData/dummyProduct"

const NewArrible = () => {


  return (
    <section className='pt-[128px]'>
        <div className='max-w-container mx-auto'>
            <SectionTitle className="font-dm text-[#262626] font-bold text-[39px]" text="New Arrivals"/>
            <div className='relative'>
              <Swiper
                spaceBetween={40}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                modules={[Pagination, Navigation]}
              > 
                {dummyProducts.map((item,index)=>(
                  <SwiperSlide key={index}>
                    <ProductCard key={index} productprice={item.productprice} productname={item.productname} productimage={item.productimage} isnew={item.isnew} discount={item.discount} color={item.color} id={item.id}/>
                </SwiperSlide>
                ))
                }
                
              </Swiper>
              <button className='arrow-right p-5 bg-slate-400 border rounded-full absolute top-1/2 -translate-y-1/2 left-0 z-[999]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 8" fill="none">
                    <path d="M4.80172 5.36889H15.5374C15.773 5.36889 15.9641 5.17785 15.9641 4.94222V2.95111C15.9641 2.71549 15.773 2.52445 15.5374 2.52445H4.80172V0.886794C4.80172 0.126545 3.88258 -0.254184 3.34498 0.28338L0.285103 3.34326C-0.0481593 3.67652 -0.0481593 4.21682 0.285103 4.55005L3.34498 7.60992C3.88254 8.14749 4.80172 7.76676 4.80172 7.00651V5.36889Z" fill="white"/>
                  </svg>
                </button>
                <button className='arrow-left p-5 bg-slate-400 border rounded-full absolute top-1/2 -translate-y-1/2 right-0 z-[999]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 8" fill="none">
                    <path d="M11.1983 2.63111L0.462595 2.63111C0.226969 2.63111 0.0359278 2.82215 0.0359278 3.05778V5.04889C0.0359278 5.28451 0.226969 5.47555 0.462595 5.47555L11.1983 5.47555V7.11321C11.1983 7.87346 12.1174 8.25418 12.655 7.71662L15.7149 4.65674C16.0482 4.32348 16.0482 3.78318 15.7149 3.44995L12.655 0.390078C12.1175 -0.147487 11.1983 0.233242 11.1983 0.993491V2.63111Z" fill="white"/>
                  </svg>
                </button>
            </div>
        </div>
    </section>
  )
}

export default NewArrible