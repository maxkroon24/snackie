import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/over-ons' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/bestellen' element={<Order/>} />
      </Routes>
      </BrowserRouter>
  )
}
export default App
