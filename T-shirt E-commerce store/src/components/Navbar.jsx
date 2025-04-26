import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="container">
        <h1>WOOLWORTHS.</h1>
        <div>
        
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/products">Shop</Link>
          
          
      
         <button 
            className="cart-button"
            onClick={toggleCart}
          >
            <FiShoppingCart />
            {itemCount > 0 && (
              <span className="cart-count">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;