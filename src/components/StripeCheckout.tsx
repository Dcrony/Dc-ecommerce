import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShopContext } from '../contexts/ShopContext';
import { useContext } from 'react';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { currentUser } = useAuth();
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // Create payment intent on your backend
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${await currentUser.getIdToken()}`
      },
      body: JSON.stringify({
        amount: getTotalCartAmount() * 100, // in cents
        currency: 'usd',
        items: Object.keys(cartItems).filter(id => cartItems[id] > 0)
      })
    });

    const { clientSecret } = await response.json();

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: currentUser.email
          }
        }
      }
    );

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      // Handle successful payment
      alert('Payment succeeded!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div>{error}</div>}
      <button disabled={!stripe || processing}>
        {processing ? 'Processing...' : `Pay $${getTotalCartAmount()}`}
      </button>
    </form>
  );
}

export default function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}