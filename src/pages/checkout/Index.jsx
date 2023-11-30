import React, { useState } from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Peragraph from '../../components/utilities/Peragraph'
import Input from '../../components/utilities/Input'

const CheckoutPage = () => {

  let countryName = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kosovo", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"]

  let pathname =  window.location.href
  let patharray = pathname.split("/")
  let finalpath = patharray[patharray.length - 1]

  let [couponShow, setCouponShow] = useState(false)


  return (

    <section className='pt-[124px] pb-[140px]'>
      <div className='max-w-container mx-auto'>
          <div>
            <h3 className='text-[49px] text-[#262626] font-bold font-dm capitalize mb-[11px]'>checkout</h3>
            <BreadCrumb lastpath={finalpath}/>
          </div>
          <div className='mt-[127px] flex items-center gap-1'>
            <Peragraph text="Have a coupon?" style="text-[#767676] text-base leading-[30px] font-normal"/>
            <span onClick={()=>setCouponShow(!couponShow)} className='cursor-pointer text-[#262626] text-base leading-[30px] font-medium'>Click here to enter your code</span>
          </div>
          {couponShow &&
            <div className='mt-8'>
              <from>
                <Input style="w-[300px] px-5 py-3 border-[1px] border-[#000]" type="text" placeholder="Enter your coupon"/>
                <div className='flex items-center gap-4 mt-4'>
                  <button className='bg-[#000] text-white text-base font-medium font-dm leading-normal px-10 py-3' type='submit'>Apply</button>
                  <button onClick={()=>setCouponShow(false)} className='bg-[red] text-white text-base font-medium font-dm leading-normal px-10 py-3'>Cancel</button>
                </div>
              </from>
            </div>
          }
          <div>
            <h3 className='mt-[120px] text-[39px] font-bold font-dm'>Billing Details</h3>
            <form className='mt-[42px]'>
              <div className='flex gap-10 items-center'>
                <div className='w-1/2'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>First Name*</label>
                  <input className='checkoutinput' placeholder='First Name' type='text' name='firstName'/>
                </div>
                <div className='w-1/2'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Last Name*</label>
                  <input className='checkoutinput' placeholder='Last Name' type='text' name='lastName'/>
                  <span className='font-dm font-[14px] text-[red]'>Enter your Last Name</span>
                </div>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Company Name (Optional)</label>
                  <input className='checkoutinput' placeholder='Company Name' type='text' name='companyName'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Country*</label>
                  <select className='block w-full outline-none  border-b-[1px] pt-[10px] pb-4 border-[#F0F0F0]' name='country'>
                    {countryName.map((item,index)=>(
                      <option key={index}>{item}</option>
                    ))}
                  </select>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Street Address*</label>
                  <input className='checkoutinput' placeholder='House Number and street Name' type='text' name='streetAddress'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>City/Town*</label>
                  <input className='checkoutinput' placeholder='City/Town' type='text' name='citytown'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Country (Optional)</label>
                  <input className='checkoutinput' placeholder='Country (Optional)' type='text' name='countryoptional'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Post Code*</label>
                  <input className='checkoutinput appearance-none' placeholder='Post Code' type='number' name='postcode'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Phone*</label>
                  <input className='checkoutinput appearance-none' placeholder='Phone' type='number' name='phone'/>
              </div>
              <div className='w-full mt-6'>
                  <label className='text-base leading-[23px] text-[#262626] font-dm font-bold '>Email*</label>
                  <input className='checkoutinput' placeholder='Email' type='email' name='email'/>
              </div>
            </form>
            <h3 className='checkoutheading'>Additional Information</h3>
          </div>
      </div>
    </section>
  )
}

export default CheckoutPage