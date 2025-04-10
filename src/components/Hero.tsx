import React from 'react'
import hero from './assets/bandana-removebg-preview.png'
import './css/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>WELLCOME TO <br /> OUR MULTI PRODUCT STORE</h1>
        <p>Discover amzing product like never before</p>
      </div>
      <div className='hero-image'>
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero