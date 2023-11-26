import React from 'react'
import List from '../utilities/List'
import ListItem from '../utilities/ListItem'

const CategoryCard = () => {
  return (
    <div className='w-[263px] bg-[#262626] text-white absolute left-0 mt-4'>
        <List style="">
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="accories"/>
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="fourniture"/>
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="electronics"/>
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="cloths"/>
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="bags"/>
            <ListItem style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text="home applience"/>
        </List>
    </div>
  )
}

export default CategoryCard