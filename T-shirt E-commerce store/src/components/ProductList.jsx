// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Sidebar from './Sidebar';
import '../styles/styles.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (filterCategory) {
      filtered = filtered.filter(p => p.category === filterCategory);
    }

    if (sortOrder === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setDisplayedProducts(filtered);
  }, [products, sortOrder, filterCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) return <div className='spinner'></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Sidebar setSortOrder={setSortOrder} setFilterCategory={setFilterCategory} />

      <div className="product-list">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Ksh {product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
