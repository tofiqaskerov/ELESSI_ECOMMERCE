import React, { createContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductCountContext } from '../Context/UserContext'
import Cart from '../Pages/Cart/Cart'
import Detail from '../Pages/Detail/Detail'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'
function Routers() {

  const [methods,  setMethods] = useState({})
  return (

    <ProductCountContext.Provider value={"Hello World"}>          
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </ProductCountContext.Provider>
    
  )
}

export default Routers