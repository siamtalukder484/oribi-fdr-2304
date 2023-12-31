import React, { useState } from 'react'
import Banner from '../../components/home/Banner'
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from '../../slices/counterSlice';


const Home = () => {
  let [count, setCount] = useState(0)

  const data = useSelector((state) => state);
  // console.log(data);
  const dispatch = useDispatch();

let handelIncrement = () => {
  count++;
  setCount(count);
  dispatch(increment(count));
};
let handelDecrement = () => {
  count--;
  setCount(count);
  dispatch(decrement(count))
};


  return (
    <>
      <Banner />
      <button onClick={handelIncrement}>Increment</button>
      <h1 className='text-[60px]'>{count}</h1>
      <button onClick={handelDecrement}>Decrement</button>
    </>
  );
}

export default Home