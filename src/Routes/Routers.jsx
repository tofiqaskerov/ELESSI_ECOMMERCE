import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'

function Routers() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
  )
}

export default Routers