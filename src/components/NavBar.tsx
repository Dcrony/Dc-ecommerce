import React, { useContext, useState } from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { ShopContext } from '../contexts/ShopContext'
import { useAuth } from '../contexts/AuthContext' // Import the auth hook
import logo from './assets/logo10_1_13251.png'

const NavBar = () => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartItems } = useContext(ShopContext);
    const { currentUser, logout } = useAuth(); // Get auth state and logout function

    const handleLogout = async () => {
        try {
            await logout();
            // Optional: redirect after logout
            // navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <div className='navbar'>
            <div className='navlogo'>
                <img src={logo} alt="Dcrony Store Logo" />
                <p>Dcrony Store</p>
            </div>
            <ul>
                <li onClick={() => { setMenu("home") }}>
                    <Link className='li' style={{ textDecoration: 'none' }} to="/">Home</Link>
                    {menu === "home" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("about") }}>
                    <Link className='li' style={{ textDecoration: 'none' }} to="/about">About</Link>
                    {menu === "about" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("contact") }}>
                    <Link className='li' style={{ textDecoration: 'none' }} to="/contact">Contact</Link>
                    {menu === "contact" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("products") }}>
                    <Link className='li' style={{ textDecoration: 'none' }} to="/products">Product</Link>
                    {menu === "products" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='navcart'>
                {/* Conditionally render login/logout */}
                {currentUser ? (
                    <>
                        <span className="welcome-message">Welcome, {currentUser.displayName}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <button>Login</button>
                    </Link>
                )}
                
                <Link style={{ textDecoration: 'none' }} to="/cart">
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