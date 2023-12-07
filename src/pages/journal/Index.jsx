import React from 'react'
import { useSelector } from "react-redux";

const Journal = () => {

  let countvalue = useSelector((state)=>state)
  // console.log(countvalue.counter.value);

  return (
    <>
      <div>Journal page</div>
      <h1 className="text-[100px]">Count Value: {countvalue.counter.value}</h1>
    </>
  );
}

export default Journal