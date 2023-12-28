import React from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import { Link, NavLink, Outlet } from 'react-router-dom'

const MyAccount = () => {

    let pathname =  window.location.href
    let patharray = pathname.split("/")
    let finalpath = patharray[patharray.length - 1]

  return (
    <section className='mt-[124px]'>
        <div className="mx-auto max-w-container">
            <div className='mb-[127px]'>
                <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">
                    My Account
                </h3>
                <BreadCrumb lastpath={finalpath} />
            </div>
            <div className='flex justify-between gap-10 mb-[140px]'>
                <div className='w-[234px] flex flex-col '>
                    <NavLink to="dashboard" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0] pt-0">Dashboard</NavLink>
                    <NavLink to="others" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0]">Others</NavLink>
                    <NavLink to="download" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0]">Downloads</NavLink>
                    <NavLink to="addresses" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0]">Addresses</NavLink>
                    <NavLink to="accountdetails" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0]">Account Details</NavLink>
                    <Link to="#" className="font-dm leading-[30px] text-base font-normal text-[#767676] py-5 border-b border-[#F0F0F0]">Logout</Link>
                </div>
                <div className='w-[1330px]  h-[100px] bg-red-300'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyAccount