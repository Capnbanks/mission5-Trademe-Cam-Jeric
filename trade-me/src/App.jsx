import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ProductSubpage from './pages/product-subpage/ProductSubpage'
import ProductDescription from './pages/product-description/ProductDescription'
import Home from './pages/home/Home'

function App() {
  

  return (
    <> <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product-subpage" element={<ProductSubpage/>} />
      <Route path="/product-description" element={<ProductDescription/>} />
  
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
