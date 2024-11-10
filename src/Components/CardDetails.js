import React, { useState } from 'react';

const CardDetails = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    // Simple validation
    if (!/^\d{16}$/.test(cardNumber)) {
      setError('Card number must be 16 digits.');
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError('CVV must be 3 digits.');
      return;
    }
    if (!/^(0[1-9]|1[0-2])$/.test(expiryMonth)) {
      setError('Expiry month must be between 01 and 12.');
      return;
    }
    if (!/^\d{4}$/.test(expiryYear)) {
      setError('Expiry year must be 4 digits.');
      return;
    }

    // Process the card details here
    console.log('Card Details Submitted:', { cardNumber, cvv, expiryMonth, expiryYear });

    // Optionally, reset the form or redirect
    // Reset form
    setCardNumber('');
    setCvv('');
    setExpiryMonth('');
    setExpiryYear('');
  };

  return (
    <div className="card-details">
      <h1>Enter Card Details</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            maxLength="16"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="password" // Masking CVV input
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            maxLength="3"
          />
        </div>
        <div>
          <label>Expiry Month:</label>
          <input
            type="text"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            required
            maxLength="2"
          />
        </div>
        <div>
          <label>Expiry Year:</label>
          <input
            type="text"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            required
            maxLength="4"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CardDetails;