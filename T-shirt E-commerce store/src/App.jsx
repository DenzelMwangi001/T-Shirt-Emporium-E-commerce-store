
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCart } from './context/CartContext';  
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import Home from './pages/Home';  
import './styles/styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [filterCategory, setFilterCategory] = useState('');

  const { isCartVisible, toggleCart } = useCart();  // Get CartContext state

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const sortProducts = (products) => {
    if (sortOrder === 'lowToHigh') {
      return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortOrder === 'highToLow') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const filterProducts = (products) => {
    if (filterCategory) {
      return products.filter((product) => product.category === filterCategory);
    }
    return products;
  };

  const filteredAndSortedProducts = filterProducts(sortProducts(products));

  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Sidebar setSortOrder={setSortOrder} setFilterCategory={setFilterCategory} />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <ProductList products={filteredAndSortedProducts} />
          </div>
          <CartPanel isVisible={isCartVisible} />
        </div>
      </div>
    </Router>
  );
};

export default App;
