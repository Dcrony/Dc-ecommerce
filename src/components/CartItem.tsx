import React, { useContext } from 'react';
import './css/CartItems.css';
import { ShopContext } from '../contexts/ShopContext';
import { FaEraser } from 'react-icons/fa';

const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    return (
        <div className='cartitem'>
            <div className="cartitem-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format">
                                <img src={e.image} alt={e.name} />
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.price * cartItems[e.id]}</p>
                                <div onClick={() => { removeFromCart(e.id) }} className="remove-icon">X</div>
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;