import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './Slices/HeaderSlice'
import cartReducer from './Slices/CartSlice'
import productReducer from './Slices/Product/ProductSlice'
import blogReducer from './Slices/Blog/BlogSlice'
import sliderReducer from './Slices/Slider/SliderSlice'
 const store  = configureStore({
    reducer:{
      header: headerReducer,
      cart: cartReducer,
      products: productReducer,
      blogs: blogReducer,
      sliders: sliderReducer
    }

})

export default store