import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "../../components/utilities/Image";
import singleproduct from "../../components/dummoyData/dummyProduct";

const SingleProduct = () => {
  const { id } = useParams();
  let [newsingleproduct, setNewsingleProduct] = useState();

  useEffect(() => {
    setNewsingleProduct(singleproduct.filter(checkid));
    function checkid(pid) {
      return id == pid.id;
    }
  }, [id]);

  console.log(newsingleproduct);
  return (
    <div className="py-[100px]">
      {/* <h1 className='text-[50px]'>aita amar product er unique id:  {id}</h1> */}
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          {[0, 1, 2, 3].map((item, index) => (
            <div key={index} className="h-[780px] bg-slate-400 overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                source={newsingleproduct && newsingleproduct[0].productimage}
                alt="img"
              />
            </div>
          ))}
        </div>
        <div className="mt-[50px]">
          <h3 className="font-dm font-bold text-[#262626] capitalize text-[40px]">
            {newsingleproduct && newsingleproduct[0].productname}
          </h3>
          <div>
            {newsingleproduct && newsingleproduct[0].discount == "false" ? (
              <span className="text-[#26262] text-xl font-dm font-bold mt-5">
                {newsingleproduct && newsingleproduct[0].productprice}
              </span>
            ) : (
              <>
                <del className="text-[#767676] text-xl font-dm font-bold mt-5">
                  {newsingleproduct && newsingleproduct[0].productprice}
                </del>
                <span className="text-[#262626] text-xl font-dm font-bold ml-5 mt-5">
                  {
                    Math.floor(
                      newsingleproduct && newsingleproduct[0].productprice - 
                  parseInt(newsingleproduct &&
                    newsingleproduct[0].discount) * parseInt(newsingleproduct && newsingleproduct[0].productprice) / 100
                    )
                  }
                </span>
              </>
            )}
          </div>
          {newsingleproduct && newsingleproduct[0].color == "false" ? (
            ""
          ) : (
            <div className="mt-7">
              <span className="font-dm font-bold text-[#262626] text-lg">
                Color: {newsingleproduct && newsingleproduct[0].color}
              </span>
            </div>
          )}
          <div className="mt-7">
            <span className="font-dm font-bold text-[#262626] text-lg">
              Status:{" "}
              {newsingleproduct && newsingleproduct[0].stock > 0
                ? "In Stock"
                : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
