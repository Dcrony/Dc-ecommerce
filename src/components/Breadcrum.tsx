import React from 'react'
import './css/Breadcrun.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrun'>
        HOME &gt; SHOP &gt; {product.name}
    </div>
  )
}

export default Breadcrum