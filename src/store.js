import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";


export default configureStore({
  reducer: {
    counter: counterSlice,
    cartinfo: cartSlice
  },
});
