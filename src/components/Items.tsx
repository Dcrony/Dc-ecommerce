import React from 'react'
import './css/Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
      <div >
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
      </div>
      <div className='item_price'>
        <div>${props.price}</div>
        <span className='p'>${props.realprice}</span>
      </div>
    </div>
  )
}

export default Items