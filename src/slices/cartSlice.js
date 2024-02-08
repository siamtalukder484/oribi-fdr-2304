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
  },
});
export const { addtocard,deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
