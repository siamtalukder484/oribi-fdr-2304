import React from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Input from '../../components/utilities/Input'

const Contacts = () => {

  let pathname =  window.location.href
  let patharray = pathname.split("/")
  let finalpath = patharray[patharray.length - 1]


  return (
    <section>
      <div className='mx-auto max-w-container'>
          <div className='py-[125px]'>
            <h3 className="text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]">
              contacts
            </h3>
            <BreadCrumb lastpath={finalpath} />
          </div>
          <div>
            <h3 className='font-dm text-[39px] text-[#262626] leading-normal font-bold'>Fill up a Form</h3>
            <div className='w-[780px] mt-[42px] mb-[140px] flex flex-col gap-y-[23px]'>
                <div className='flex flex-col'>
                  <label className='font-dm text-[#262626] text-base font-bold leading-[23px]'>Name</label>
                  <Input style="border-b border-[#F0F0F0] outline-none py-3" type="text" placeholder="Your Name Here"/>
                </div>
                <div className='flex flex-col'>
                  <label className='font-dm text-[#262626] text-base font-bold leading-[23px]'>Email</label>
                  <Input style="border-b border-[#F0F0F0] outline-none py-3" type="text" placeholder="Your Email Here"/>
                </div>
                <div className='flex flex-col'>
                  <label className='font-dm text-[#262626] text-base font-bold leading-[23px]'>Email</label>
                  <textarea className="border-b border-[#F0F0F0] outline-none py-3 h-[100px] accent-none"></textarea>
                </div>
                <button className='bg-[#262626] text-white text-base font-bold font-dm w-[200px] mt-[7px] py-[16px] capitalize'>post</button>
            </div>
          </div>
          <div className='h-[572px] relative'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.605510543724!2d90.38426189999998!3d23.75089605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ae4e52eabd%3A0x113b1873c9a9c2c1!2sSquare%20Hospital%20~%20PanthaPath!5e0!3m2!1sen!2sbd!4v1704193629128!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className='h-[450px] w-[400px] bg-white absolute left-20 top-20'>
                
              </div>
          </div>
      </div>
    </section>
  )
}

export default Contacts