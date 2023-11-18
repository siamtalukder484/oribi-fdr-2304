import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Image from '../utilities/Image'
import Logo from '../../assets/images/logo.png'

const Navbar = () => {


  return (
    <nav className='py-8'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <Image source={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-x-[40px]'>
                        <li>
                            <NavLink className="text-base font-medium font-dm capitalize text-[#767676] transition-all  duration-300 hover:text-[rgb(38,38,38)] [&.active]:text-red-700" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium font-dm capitalize text-[#767676] transition-all  duration-300 hover:text-[rgb(38,38,38)] [&.active]:text-red-700" to="shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium font-dm capitalize text-[#767676] transition-all  duration-300 hover:text-[rgb(38,38,38)] [&.active]:text-red-700" to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium font-dm capitalize text-[#767676] transition-all  duration-300 hover:text-[rgb(38,38,38)] [&.active]:text-red-700" to="contacts">Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink className="text-base font-medium font-dm capitalize text-[#767676] transition-all  duration-300 hover:text-[rgb(38,38,38)] [&.active]:text-red-700" to="journal">Journal</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar