// src/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';

const AppRoutes = ({ products }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList products={products} />} />
    </Routes>
  );
};

export default AppRoutes;
