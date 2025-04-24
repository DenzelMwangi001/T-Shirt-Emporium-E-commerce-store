import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.length;

  return (
    <nav>
      <div className="container">
        <h1>WOOLWORTHS.</h1>
        <div>
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
