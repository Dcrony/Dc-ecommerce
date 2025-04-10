import React, { useContext, useState } from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { ShopContext } from '../contexts/ShopContext'
import logo from './assets/logo10_1_13251.png'



const NavBar = () => {
    const[menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={logo} alt="" />
            <p>Dcrony Store</p>
        </div>
        <ul>
            <li onClick={()=>{setMenu("home")}}>
                <Link className='li' style={{textDecoration: 'none'}} to="/" >Home</Link>
                {menu === "home" ? <hr/> : <></>}
            </li>
            <li onClick={()=>{setMenu("about")}}>
                <Link className='li' style={{textDecoration: 'none'}} to="/about">About</Link>
                {menu === "about" ? <hr/> : <></>}
            </li>
            <li onClick={()=>{setMenu("contact")}}>
                <Link className='li' style={{textDecoration: 'none'}} to="/contact">Contact</Link>
                {menu === "product" ? <hr/> : <></>}
            </li>
            <li onClick={()=>{setMenu("products")}}>
                <Link className='li' style={{textDecoration: 'none'}} to="/products">Product</Link>
                {menu === "products" ? <hr/> : <></>}
            </li>
            
        </ul>
        <div className='navcart'> 
            <Link style={{textDecoration: 'none'}} to="/signup"><button>login</button></Link>
            
            <Link style={{textDecoration: 'none'}} to="/cart">
                <FaShoppingCart className='cart-icon' />
                <div className='nav-count'>{getTotalCartItems()}</div>
            </Link>
        </div>
        <div className="toggle">
            <button className='open-toggle'>|||</button>
            <button className='close-toggle'>X</button>
        </div>
    </div>
  )
}

export default NavBar