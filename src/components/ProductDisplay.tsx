import React, { useContext } from 'react'
import './css/ProductDisplay.css'
import { FaStar } from 'react-icons/fa'
import { ShopContext } from '../contexts/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props ;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-star'>
                <FaStar style={{color:'gold'}} />
                <FaStar style={{color:'gold'}} />
                <FaStar style={{color:'gold'}} />
                <FaStar style={{color:'white'}} />
                <p>(110)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-old">${product.realprice}</div>
                <div className="productdisplay-right-price-new">${product.price}</div>
            </div>
            <div className="productdisplay-right-description">{product.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quam beatae eaque minus obcaecati quibusdam tenetur quae vitae enim perspiciatis, ea aliquid repellendus repellat, provident, accusantium numquam molestias libero totam.</div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        </div>

    </div>
  )
}

export default ProductDisplay