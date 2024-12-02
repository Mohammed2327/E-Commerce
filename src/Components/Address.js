import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Stylesheets/Address.css';

const Address = ({ cart, products }) => {
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
        });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, street, city, state, zip, phone } = shippingAddress;

        const nameRegex = /^[a-zA-Z\s]+$/;
        const addressRegex = /^[a-zA-Z0-9\s]+$/;
        const cityStateRegex = /^[a-zA-Z\s]+$/;
        const phoneRegex = /^\d{10}$/;
        const zipRegex = /^\d{6}$/;

        if (!nameRegex.test(name)) {
            setError('Name must contain only alphabets.');
            return;
        }
        if (!addressRegex.test(street)) {
            setError('Street address must contain only alphanumeric characters.');
            return;
        }
        if (!cityStateRegex.test(city)) {
            setError('City must contain only alphabets.');
            return;
        }
        if (!cityStateRegex.test(state)) {
            setError('State must contain only alphabets.');
            return;
        }
        if (!zipRegex.test(zip)) {
            setError('Zip code must be exactly 6 digits.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            setError('Phone number must be exactly 10 digits.');
            return;
        }

        navigate('/checkout', { state: { cart, shippingAddress, products } });
    };

    return (
        <div className="address-container">
            <h2>Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={shippingAddress.name} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Street Address:
                        <input type="text" name="street" value={shippingAddress.street} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input type="text" name="city" value={shippingAddress.city} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        State:
                        <input type="text" name="state" value={shippingAddress.state} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Zip Code:
                        <input type="text" name="zip" value={shippingAddress.zip} onChange={handleInputChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" value={shippingAddress.phone} onChange={handleInputChange} required />
                    </label>
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Address;