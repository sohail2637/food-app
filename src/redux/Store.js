import { configureStore } from "@reduxjs/toolkit";
import sellerReducer from "./sellerReducer";

export default configureStore({
  reducer: {
    cartItem: sellerReducer,
  },
});
