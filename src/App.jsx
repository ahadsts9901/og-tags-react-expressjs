import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Product from './pages/Product/Product.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Product />} />
        <Route path='*' element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  )
}

export default App