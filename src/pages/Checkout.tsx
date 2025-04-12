import React, { useContext, useState } from 'react';
import { ShopContext } from '../contexts/ShopContext';
import './css/checkout.css'

const CheckoutPage = () => {
  const { checkout, getTotalCartAmount, getTotalCartItems } = useContext(ShopContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'stripe'
  });
  const [checkoutResult, setCheckoutResult] = useState<CheckoutResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await checkout(customerInfo);
    setCheckoutResult(result);
    setIsLoading(false);
  };

  if (getTotalCartItems() === 0) {
    return <div>Your cart is empty. Please add some items first.</div>;
  }

  if (checkoutResult?.success) {
    return (
      <div className="checkout-success">
        <h2>Order Confirmed!</h2>
        <p>Your order #{checkoutResult.orderId} has been placed successfully.</p>
        <p>Total: ${getTotalCartAmount().toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className='checkout-input'>
        <input
          type="text"
          placeholder="Full Name"
          value={customerInfo.name}
          onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
          required
        />
        <textarea
          placeholder="Shipping Address"
          value={customerInfo.address}
          onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
          required
        />
        <select
          value={customerInfo.paymentMethod}
          onChange={(e) => setCustomerInfo({...customerInfo, paymentMethod: e.target.value})}
        >
          <option value="stripe">Credit Card (Stripe)</option>
          <option value="paypal">PayPal</option>
        </select>
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : `Pay $${getTotalCartAmount().toFixed(2)}`}
        </button>
      </form>
      
      {checkoutResult && !checkoutResult.success && (
        <div className="error-message">{checkoutResult.message}</div>
      )}
    </div>
  );
};

export default CheckoutPage;