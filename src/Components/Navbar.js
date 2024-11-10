import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../index.css";

const Navbar = ({ cart, totalItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`container ${isMenuOpen ? "active" : ""}`}>
      {!isMenuOpen && (
        <div className="menu-icon" onClick={toggleMenu}>
          <IoMenu size={24} color="black" />
        </div>
      )}

      {isMenuOpen && (
        <div className="close-icon" onClick={toggleMenu}>
          <MdClose size={24} color="black" />
        </div>
      )}

      {/* Navigation Items */}
      <div className={`nav-items ${isMenuOpen ? "visible" : "hidden"}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
      </div>

      <div className={`nav-items ${isMenuOpen ? "visible" : "hidden"}`}>
        <Link to="/mobiles" onClick={toggleMenu}>
          Mobiles
        </Link>
      </div>

      <div className={`nav-items ${isMenuOpen ? "visible" : "hidden"}`}>
        <Link to="/laptops" onClick={toggleMenu}>
          Laptops
        </Link>
      </div>

      <div className={`nav-items ${isMenuOpen ? "visible" : "hidden"}`}>
        <Link to="/accessories" onClick={toggleMenu}>
          Accessories
        </Link>
      </div>

      <div className={`nav-items ${isMenuOpen ? "visible" : "hidden"}`}>
        <Link to="/contact-me" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>

      {/* Cart Icon wrapped in Link */}
      <div className="cart-icon">
        <Link to="/cart">
          <FaCartShopping size={24}  aria-label="Shopping Cart" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;