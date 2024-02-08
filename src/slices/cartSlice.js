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
    deleteItem(state, action) {
      const itemIdToDelete = action.payload;
      state.value = state.value.filter(item => item.id !== itemIdToDelete);
    },
    quantityUpdate(state, action){
      const index = action.payload
      console.log(index.id);
    }
  },
});
export const { addtocard,deleteItem,quantityUpdate } = cartSlice.actions;

export default cartSlice.reducer;
