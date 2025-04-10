import React from 'react'
import Items from '../components/Items'
import all_product from '../components/assets/all_products'
import './css/MoreProduct.css'

const MoreProduct = () => {
    return (
        <div className='all-product'>
          <h1>OUR PRODUCTS</h1>
          <hr />
          <div className='all-product-item'>
            {all_product.map((item,i)=>{
              return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.price} realprice={item.realprice} />
            })}
          </div>
        </div>
      )
    }

export default MoreProduct