import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const ProductList = ({ category = "all", cart, setCart }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({
    mobiles: [],
    laptops: [],
    accessories: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/Data/product.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts({
          mobiles: data.products.mobiles,
          laptops: data.products.laptops,
          accessories: data.products.accessories,
        });
      } catch (error) {
        console.log("Error Fetching Data:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleAddToCart = (item) => {
    const existingQuantity = cart[item.id] || 0;
    setCart({ ...cart, [item.id]: existingQuantity + 1 });
  };

  return (
    <div className="product-list">
      {category === "all" && (
        <>
          <h2>All Products</h2>
          <h3>Mobiles</h3>
          <div className="product-grid">
            {products.mobiles.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                    loading="lazy"
                  />
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">Price: ${item.price}</p>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <h3>Laptops</h3>
          <div className="product-grid">
            {products.laptops.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                    loading="lazy"
                  />
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">Price: ${item.price}</p>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <h3>Accessories</h3>
          <div className="product-grid">
            {products.accessories.map((item) => (
              <div key={item.id} className="product-card">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                    loading="lazy"
                  />
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">Price: ${item.price}</p>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {category !== "all" && (
        <>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="product-grid">
            {products[category]?.length > 0 ? (
              products[category].map((item) => (
                <div key={item.id} className="product-card">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.title }
                      className="product-image"
                    />
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-price">Price: ${item.price}</p>
                  </Link>
                  <button
                    className="add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <p>No products available in this category.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
