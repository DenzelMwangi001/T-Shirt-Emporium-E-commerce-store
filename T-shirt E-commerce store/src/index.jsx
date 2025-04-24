
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';  
import { CartProvider } from './context/CartContext';  
import App from './App';  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  
      <App />
    </CartProvider>
  </React.StrictMode>
);
