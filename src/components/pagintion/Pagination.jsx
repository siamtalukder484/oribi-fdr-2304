import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import dummyProducts from "../dummoyData/dummyProduct"
import ProductCard from '../product/ProductCard';



function Items({ currentItems }) {
  return (
    <div className='flex flex-wrap gap-x-[44px]'>
      {currentItems &&
        currentItems.map((item,index) => (
          <div className='w-[370px]'>
            <ProductCard key={index} allinfo={item} productprice={item.productprice} productname={item.productname} productimage={item.productimage} isnew={item.isnew} discount={item.discount} color={item.color} id={item.id}/>
          </div>
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dummyProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dummyProducts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % dummyProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
   <div className='py-20 flex justify-between'>
       <ReactPaginate
        breakLabel="...."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        containerClassName='flex'
        pageClassName="m-3"
        pageLinkClassName=' bg-black text-white p-4'
        renderOnZeroPageCount={null}
      />
   
   <h2>Products from {itemOffset+1} to {endOffset<dummyProducts.length?endOffset:dummyProducts.length} of {dummyProducts.length}</h2>
   </div>
    </>
  );
}
export default Pagination