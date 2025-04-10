import React from 'react'
import Items from './Items'
import data from './assets/phone'
import './css/Popular.css'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>OUR PRODUCTS</h1>
      <hr />
      <div className='popular-item'>
        {data.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.price} realprice={item.realprice} />
        })}
      </div>
    </div>
  )
}

export default Popular