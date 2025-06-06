import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const CartPanel = () => {
  const {
    cartItems,
    isCartVisible,
    toggleCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotal,
  } = useCart();

  // Close cart if the user clicks outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.cart-panel') && !e.target.closest('.cart-button')) {
      toggleCart();
    }
  };

  // Use effect to manage cart visibility and prevent body scroll
  useEffect(() => {
    if (isCartVisible) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isCartVisible]);

  // Checkout button handler
  const handleCheckout = () => {
    alert('Feature not implemented yet');
  };

  return (
    <div
      className={`cart-panel  ${
        isCartVisible ? 'translate-x-0' : 'translate-x-full'
      } w-80 z-50 p-4`}
    >
      <button
        onClick={toggleCart}
        className="close-cart"
        aria-label="Close Cart"
      >
        &times;
      </button>

      <h2 className="text-xl font-bold mb-4 mt-8">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="controls">
                  <img src={item.image} alt={item.title}  />
                  <div className="info">
                    <p className="font-medium">{item.title}</p>
                    <p className="price">Price: ksh{item.price}</p>
                    <p className="total">
                      Subtotal: ksh{(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="controls">
                      <button
                        
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                       
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>

                      <button
                        className="delete"
                        onClick={() => removeFromCart(item.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <p>Total: ksh{getTotal()}</p>
          </div>

          {/* Checkout Button */}
          <button
            className="checkout-button "
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPanel;
