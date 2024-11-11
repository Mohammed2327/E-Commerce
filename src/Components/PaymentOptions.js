// PaymentOptions.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/PaymentOptions.css';

const PaymentOptions = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleProceed = () => {
    if (selectedMethod) {
      console.log(`Selected payment method: ${selectedMethod}`);
      // Display success message
      alert('Order placed successfully!');
      // Reset the cart
      setCart({});
      // Navigate to home or any other page if needed
      navigate('/'); 
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-options">
      <h1>Payment Options</h1>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="COD"
              checked={selectedMethod === 'COD'}
              onChange={handlePaymentMethodChange}
            />
            Cash on Delivery (COD)
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="DEBIT CARD"
              checked={selectedMethod === 'DEBIT CARD'}
              onChange={handlePaymentMethodChange}
            />
            Debit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="CREDIT CARD"
              checked={selectedMethod === 'CREDIT CARD'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={selectedMethod === 'UPI'}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>
      </form>
      <button onClick={handleProceed}>Proceed</button>
    </div>
  );
};

export default PaymentOptions;