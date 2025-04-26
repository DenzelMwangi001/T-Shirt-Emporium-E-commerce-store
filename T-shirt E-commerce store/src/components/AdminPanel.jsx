import React, { useState } from 'react';
import '../styles/styles.css';

const AdminPanel = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new product object
    const newProduct = {
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      category: productCategory, // Add category to the product object
    };

    // POST request to send data to the backend (replace URL with your API endpoint)
    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct), // Sending the new product as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added:', data);
        // Clear the form after submission
        setProductName('');
        setProductPrice('');
        setProductImage('');
        setProductCategory(''); // Clear category input
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div className="admin-panel">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <input 
          type="text" 
          placeholder="Product Name" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Product Price" 
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        <input 
          type="text" 
          placeholder="Product Image URL" 
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          required
        />
        <select 
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="jewelery">Jewelry</option>
          <option value="sneakers">Sneakers</option>
          <option value="womens clothing">Women's Clothing</option>
          <option value="mens clothing">Men's Clothing</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
