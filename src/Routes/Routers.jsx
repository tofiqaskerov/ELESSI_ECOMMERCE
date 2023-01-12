import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import GoToTop from '../Components/GoToTop/GoToTop'
import Detail from '../Pages/Detail/Detail'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="detail/:id" element={<Detail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
    
  )
}

export default Routers