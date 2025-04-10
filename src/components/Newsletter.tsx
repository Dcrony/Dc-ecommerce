import React from 'react'
import './css/newsletter.css'

const Newsletter = () => {
  return (
    <div className='news'>
        <div>
            <h1>Subscribe on  our newsletter to stay updated</h1>
            
        </div>
        <div className='input'>
            <input type="email" placeholder='Enter valid email' />
            <button>Subcribe</button>
        </div>

    </div>
  )
}

export default Newsletter