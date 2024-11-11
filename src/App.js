// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import PaymentOptions from "./Components/PaymentOptions"; // Import PaymentOptions
import Address from "./Components/Address";
import Checkout from "./Components/Checkout";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [products, setProducts] = useState({
    mobiles: [],
    laptops: [],
    accessories: [],
  });

  const [marginTop] = useState("240px");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/Data/product.json");
        if (!response.ok) {
          throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        setProducts({
          mobiles: data.products.mobiles,
          laptops: data.products.laptops,
          accessories: data.products.accessories,
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Flatten the products for easier access
  const allProducts = [...products.mobiles, ...products.laptops, ...products.accessories];

  return (
    <Router>
      <Navbar cart={cart} totalItems={Object.keys(cart).reduce((acc, itemId) => acc + cart[itemId], 0)} />
      <div style={{ marginTop }}> 
      <Routes>
        < Route path="/" element={<ProductList category="all" cart={cart} setCart={setCart} products={allProducts}/>} />
        <Route path="/mobiles" element={<ProductList category="mobiles" cart={cart} setCart={setCart} />} />
        <Route path="/laptops" element={<ProductList category="laptops" cart={cart} setCart={setCart} />} />
        <Route path="/accessories" element={<ProductList category="accessories" cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} products={allProducts} setCart={setCart} />} />
        <Route path="/address" element={<Address cart={cart} />} />
        <Route path="/checkout" element={<Checkout products={allProducts} cart={cart} setCart={setCart} />} />
        { <Route path="/payment" element={<PaymentOptions cart={cart} setCart={setCart} />} /> }
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;