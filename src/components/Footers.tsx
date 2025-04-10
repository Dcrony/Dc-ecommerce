import React from 'react'
import { FaCopyright, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTiktok, FaVoicemail } from 'react-icons/fa'
import './css/Footer.css'
import { FaMessage } from 'react-icons/fa6'

const Footers = () => {
  return (
    <div className='footers'>
    <div className='footer'>
      <div className='contact'>
        <h1>Contact</h1>
        <p> <FaLocationArrow className='icon' /> Eruda Ilorin</p>
        <p> <FaPhone className='icon'/> 09039492387</p>
        <p> <FaEnvelope className='icon'/> realdcrony001@gmail.com</p>
      </div>
      <div className='icons'>
        <h1>Social</h1>
        <FaFacebook className='icon' />
        <FaInstagram className='icon' />
        <FaTiktok className='icon' />
        <FaLinkedin className='icon' />
      </div>
      <div className='category'>
        <h1>Category</h1>
        <a href="">Chains</a>
        <a href="">Books</a>
        <a href="">Foods</a>
        <a href="">Phones</a>
        <a href="">Toys</a>
      </div>
      
    </div>
    <div className='copywrite'>
      <p>Copyright <FaCopyright /> 2025. All Right Reserved. </p>
    </div>
    </div>
  )
}

export default Footers