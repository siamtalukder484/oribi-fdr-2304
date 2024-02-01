import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state,action) => {
      state.value = [...state.value, action.payload]
    },
  },
});
export const { addtocard } = cartSlice.actions;

export default cartSlice.reducer;
