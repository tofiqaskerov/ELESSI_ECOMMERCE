import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './Slices/HeaderSlice'
import cartReducer from './Slices/CartSlice'
 const store  = configureStore({
    reducer:{
      header: headerReducer,
      cart: cartReducer,
    }
})

export default store