import React, { createContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductCountContext } from '../Context/ProductCountContext'
import Cart from '../Pages/Cart/Cart'
import Detail from '../Pages/Detail/Detail'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'
function Routers() {

  // const [methods,  setMethods] = useState({})
  // const appendMethods = newMethods =>{
  //    setMethods({
  //     ...methods,
  //     ...newMethods
  //    })
  // }
  // const data ={
  //  appendMethods,
  //  ...methods
  // }
  return (

    // <ProductCountContext.Provider value={data}>          
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    // </ProductCountContext.Provider>
    
  )
}

export default Routers