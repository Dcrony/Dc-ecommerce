// import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Footers from './components/Footers'
import Signup from './pages/signup'
import MoreProduct from './pages/MoreProduct'

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<MoreProduct/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
        </Routes>
        <Footers/>
      </BrowserRouter>
    </>
  )
}

export default App
