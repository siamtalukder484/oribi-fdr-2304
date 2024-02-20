import React from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Pagination from '../../components/pagintion/Pagination'

const Shop = () => {
  return (
    <>
        <div className='max-w-container mx-auto'>
          <div className='py-40'>
            <h2 className='text-[#262626] text-[49px] font-bold pb-3'>Products</h2>
          <div className='flex gap-x-2'><BreadCrumb/><span className='text-[#767676] text-xs'>Products</span></div>
          </div>
          {/* work area start */}
          <div className='flex'>
            <div className='w-3/12'>Shop by Category</div>
            <div className='w-9/12'>
              <Pagination itemsPerPage={12} />

            </div>
          </div>
          {/* work area end */}

        </div>
    </>
  )
}

export default Shop