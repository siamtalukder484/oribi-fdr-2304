import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../utilities/Image'
import FooterLogo from '../../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {

let navarr = [
  {
    text: "home"
  },
  {
    text: "shop"
  },
  {
    text: "about"
  },
  {
    text: "contact"
  },
  {
    text: "journal"
  },
]
let shoparr = [
  {
    text: "category 1"
  },
  {
    text: "category 2"
  },
  {
    text: "category 3"
  },
  {
    text: "category 4"
  },
  {
    text: "category 5"
  },
]
let helparr = [
  {
    text: "privacy policy"
  },
  {
    text: "terms & conditions"
  },
  {
    text: "special E-Shop"
  },
  {
    text: "shipping"
  },
  {
    text: "secure payment"
  },
]

  return (
    <footer className='bg-[#F5F5F3] py-[55px]'>
      <div className='max-w-container mx-auto'>
        <div className='flex gap-x-[145px]'>
            <div className='flex gap-x-[140px]'>
              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>Menu</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    navarr.map((item,index)=>(
                      <li key={index}>
                        <Link className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>shop</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    shoparr.map((item,index)=>(
                      <li key={index}>
                        <Link className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
              <div>
                <h5 className='uppercase font-dm text-base leading-[23px] text-[#262626] pb-4 font-bold'>help</h5>
                <ul className='flex flex-col gap-y-[6px]'>
                  {
                    helparr.map((item,index)=>(
                      <li key={index}>
                        <Link className='capitalize font-dm text-[14px] text-[#6D6D6D] leading-[23px]'>{item.text}</Link>
                      </li>
                    ))
                  }
                  
                </ul>
              </div>
            </div>
            <div className='flex gap-x-[256px]'>
                <div>
                  <address>
                    <span className='not-italic font-dm font-bold text-base text-[#262626] leading-[27px]'>052 611-5711<br/>company@domain.com</span>
                    <span className='not-italic font-dm text-[14px] text-[#6D6D6D] leading-[23px] block mt-4'>575 Crescent Ave. Quakertown, PA 18951</span>
                  </address>
                </div>
                <div>
                  <Link>
                    <Image source={FooterLogo} alt="Logo"/>
                  </Link>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center mt-[65px]'>
          <div className='flex items-center gap-x-[25px]'>
            <Link to="#">
              <FaFacebookF className='text-[#262626]'/>
            </Link>
            <Link to="#">
              <FaFacebookF className='text-[#262626]'/>
            </Link>
            <Link to="#">
              <FaFacebookF className='text-[#262626]'/>
            </Link>
          </div>
          <div>
            <span className='text-right font-dm font-normal text-sm text-[#6D6D6D] capitalize'>2023 Orebi Minimal eCommerce Figma Template by FDR 2304</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer