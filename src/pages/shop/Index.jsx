import React, { useState } from "react";
import BreadCrumb from "../../components/utilities/BreadCrumb";
import Pagination from "../../components/pagintion/Pagination";
import Grid1 from "../../assets/product/grid1.png";
import Grid2 from "../../assets/product/grid2.png";

const Shop = () => {
  let [input, setInput] = useState(12);
  let [cata1, setCata1] = useState(false);
  let [moblie, setMoblie] = useState(false);

  let hanldeCategory1=()=>{
    setCata1(!cata1)
    
    
  }
  let hanldeMoblid=()=>{
    setMoblie(!moblie)
    
    
  }

  return (
    <>
      <div className="max-w-container mx-auto">
        <div className="py-40">
          <h2 className="text-[#262626] text-[49px] font-bold pb-3">
            Products
          </h2>
          <div className="flex gap-x-2">
            <BreadCrumb />
            <span className="text-[#767676] text-xs">Products</span>
          </div>
        </div>
        {/* work area start */}
        <div className="flex">
          <div className="w-3/12">
            <div className="pr-10 ">
              <h2>Shop by Category</h2>
              <div className="">
                <div className="flex justify-between py-5" >

                <p className="">Category 1</p>
                <p onClick={hanldeCategory1} className="cursor-pointer">{cata1?"-":"+"}</p>
                </div>
                {
                cata1&& <ul className="py-4 pl-10">
                <li className="">
                  <div className="flex justify-between ">

                <span>Mobile</span>
                <span className="cursor-pointer" onClick={hanldeMoblid}>{moblie?"-":"+"}</span>
                  </div>
                  {
                  moblie&& <ul className="pl-8 ">
                    <li className="py-2">Readmi</li>
                    <li className="py-2">realme</li>
                    <li className="py-2">Readmi</li>
                    <li className="py-2">Readmi</li>
                  </ul>
                }
                
                </li>
                <li className="flex justify-between ">
                <span>Desktop</span>
                <span>+</span>
                </li>
                <li className="flex justify-between ">
                <span>Laptop</span>
                <span>+</span>
                </li>
                <li className="flex justify-between ">
                <span>Tap</span>
                <span>+</span>
                </li>
                <li className="flex justify-between ">
                <span>Watch</span>
                <span>+</span>
                </li>
              </ul>

               }
               
              </div>
              <div className="flex justify-between py-5">
                <p className="cursor-pointer">Category 2</p>
              </div>
              <div className="flex justify-between py-5">
                <p className="cursor-pointer">Category 3</p>
                <p className="">+</p>
              </div>
              <div className="flex justify-between py-5">
                <p className="cursor-pointer">Category 4</p>
              </div>
              <div className="flex justify-between py-5">
                <p className="cursor-pointer">Category 5</p>
                <p className="">+</p>
              </div>
            </div>
          </div>
          <div className="w-9/12">
            <div className="flex justify-between">
              <div className="flex gap-x-5  pb-10">
                <img src={Grid1} alt="" />
                <img src={Grid2} alt="" />
              </div>
              <div className="flex gap-x-6">
                <div>
                  <label htmlFor="Featured">Sort by:</label>
                  <select
                    id="Featured"
                    className="py-2 px-10 border-solid border-black border"
                  >
                    <option value="">Featured</option>
                    <option value="">Featured</option>
                    <option value="">Featured</option>
                    <option value="">Featured</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="product">Show</label>
                  <select
                    onChange={(e) => setInput(e.target.value)}
                    id="product"
                    className="py-2 px-10 border-solid border-black border"
                  >
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                  </select>
                </div>
              </div>
            </div>
            <Pagination
              itemsPerPage={
                input == 8
                  ? 8
                  : input == 12
                  ? 12
                  : input == 16
                  ? 16
                  : input == 20
                  ? 20
                  : ""
              }
            />
          </div>
          
        </div>
        {/* work area end */}
      </div>
    </>
  );
};

export default Shop;
