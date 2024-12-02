import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Stylesheets/Checkout.css';

const Checkout = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state || { cart: {} }; 

  const shippingCost = 5;

  const totalAmount = Object.keys(cart).reduce((total, itemId) => {
    const product = products.find((p) => p.id === Number(itemId)); 
    return total + (product ? product.price * cart[itemId] : 0);
  }, 0);

  const grandTotal = totalAmount + shippingCost; 

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { cart } }); 
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <p>Items Value :</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <div className="summary-row">
          <p>Shipping :</p>
          <p>${shippingCost}</p>
        </div>
        <div className="summary-row">
          <p>Order Total :</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>
      
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;