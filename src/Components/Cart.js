import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md"; 
import '../Stylesheets/Cart.css';

const Cart = ({ cart, products, setCart }) => {
  const navigate = useNavigate();

  // Function to increment item quantity
  const handleIncrement = (itemId) => {
    setCart({ ...cart, [itemId]: (cart[itemId] || 0) + 1 });
  };

  // Function to decrement item quantity
  const handleDecrement = (itemId) => {
    const currentQuantity = cart[itemId];
    if (currentQuantity > 1) {
      setCart({ ...cart, [itemId]: currentQuantity - 1 });
    } else {
      handleRemove(itemId);
    }
  };

  // Function to remove an item from the cart
  const handleRemove = (itemId) => {
    const newCart = { ...cart };
    delete newCart[itemId];
    setCart(newCart);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    navigate("/address", { state: { cart } });
  };

  // Function to get product details by item ID
  const getProductDetails = (itemId) => {
    return products.find(product => product.id === Number(itemId)) || {};
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return Object.keys(cart).reduce((total, itemId) => {
      const product = getProductDetails(itemId);
      return total + (product.price * (cart[itemId] || 0));
    }, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {Object.keys(cart).length > 0 ? (
        <div>
          {Object.keys(cart).map((itemId) => {
            const product = getProductDetails(itemId);  
            return (
              <div key={itemId} className="cart-item">
                <div className="cart-item-details">
                  <img 
                     src={`${process.env.PUBLIC_URL}/${product.image || 'images/default.jpg'}`} 
                    alt={product.title || 'Product Image Not Available'} 
                    className="product-image" 
                  />
                  <div className="product-info">
                    <h3>{product.title || 'Product Title Not Available'}</h3>
                    <p>Price: ${product.price !== undefined ? product.price : 'N/A'}</p>
                  </div>
                </div>
                <div className="quantity-controls">
                  <div className="quantity-box">
                    {cart[itemId] > 1 ? (
                      <>
                        <button onClick={() => handleDecrement(itemId)}>-</button>
                        <span>{cart[itemId]}</span>
                        <button onClick={() => handleIncrement(itemId)}>+</button>
                      </>
                    ) : (
                      <>
                        <MdDelete 
                          onClick={() => handleRemove(itemId)} 
                          style={{ cursor: 'pointer', color: 'red', marginRight: '10px', fontSize: '40px' }} 
                          title="Remove item"
                        />
                        <span>{cart[itemId]}</span>
                        <button onClick={() => handleIncrement(itemId)}>+</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="total-price-container">
            <h2 className="total-price">Total Price: ${calculateTotalPrice()}</h2>
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
