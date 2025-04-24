// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';  // Import your CSS
import { CartProvider } from './context/CartContext';  // Import your CartContext
import App from './App';  // Import your App component

// Make sure CartProvider is wrapping your App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* Wrapping the App in CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);