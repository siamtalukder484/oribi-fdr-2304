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
      // state.value = state.value.filter((item)=>{
      //   item.id !== itemIdToDelete
      // })
    },
    quantityIncrement(state, action){
      const index = action.payload
      state.value[index].quantity += 1
    },
    quantityDecrement(state, action){
      const index = action.payload
      if(state.value[index].quantity > 1){
        state.value[index].quantity -= 1
      }
    },

  },
});
export const { addtocard,deleteItem,quantityIncrement,quantityDecrement } = cartSlice.actions;

export default cartSlice.reducer;
