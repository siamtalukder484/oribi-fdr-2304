import React from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    const { id } = useParams();
    

  return (
    <div>
        <h1 className='text-[50px]'>aita amar product er unique id:  {id}</h1>
    </div>
  )
}

export default SingleProduct