import React, { useEffect, useState } from 'react'
import List from './utilities/List'
import ListItem from './utilities/ListItem'
import axios from 'axios';

const CategoryCard = () => {
  let [category, setCategory] = useState();

  useEffect(()=>{
    let response = async ()=>{
      let data = await axios.get("https://dummyjson.com/products/categories")
      setCategory(data.data);
    }
    response()
  },[])

  console.log(category);

  return (
    <div className='w-[263px] bg-[#262626] text-white absolute left-0 mt-4 z-30'>
        <List style="h-[500px] overflow-y-scroll">
          {category?.map((item,index)=>(
            <ListItem key={index} style="font-dm text-[14px] font-medium leading-normal text-[#d6d2d2] capitalize py-4 pl-5 border-b-[1px] border-[#424141] cursor-pointer transition-all duration-300 hover:text-white hover:pl-[30px] hover:font-bold last:border-[transparent]" text={item}/>
          ))}
            
        </List>
    </div>
  )
}

export default CategoryCard