import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../utilities/Image'
import Homead1 from '../../svg/homead1.svg'
import Homead2 from '../../svg/homead2.svg'
import Homead3 from '../../svg/homead3.svg'

const DiscountBanner = () => {
  return (
    <section className='pt-[174px]'>
        <div className='max-w-container mx-auto'>
            <div className='grid grid-cols-2 gap-x-10'>
                <div className='bg-red-400 h-[780px] overflow-hidden'>
                    <Link to="#">
                        <Image className="object-cover w-full h-full" source={Homead1} alt="img"/>
                    </Link>
                </div>
                <div className='h-[780px] flex flex-col gap-y-10'>
                    <div className='h-[370px]'>
                        <Link to="#">
                            <Image className="object-cover w-full h-full" source={Homead2} alt="img"/>
                        </Link>
                    </div>
                    <div className='h-[370px]'>
                        <Link to="#">
                            <Image className="object-cover w-full h-full" source={Homead3} alt="img"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DiscountBanner