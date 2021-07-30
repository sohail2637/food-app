import { createSlice } from "@reduxjs/toolkit";

const sellerReducer = createSlice({
  name: "cartItem",
  initialValue: {
    value: 0,
    postitem: [],
  },
  reducers: {
    // incrementcart: (state, action) => {
    //   state.value = state.value + action.payload;
    // },
    sellerPost: (state, action) => {
      console.log("this is redus seller data", action.payload);
      state.postitem = action.payload;
    },
  },
});

export const {
  // incrementcart,
  sellerPost
} = sellerReducer.actions;
export default sellerReducer.reducers;
