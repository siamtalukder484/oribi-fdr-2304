import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addtocard: (state,action) => {
        // state.value = state.addtocard.push([...state.addtocard, action.payload]);
      state.value = [...state.value, action.payload]
    //   console.log(action.payload);
    //   console.log(state.value);
    },
    // decrement: (state,actions) => {
    //   state.value = actions.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addtocard } = cartSlice.actions;

export default cartSlice.reducer;
