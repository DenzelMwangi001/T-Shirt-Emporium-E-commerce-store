
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import AdminPage from '../src/components/AdminPanel'; 


const AppRoutes = ({ products, setProducts }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage setProducts={setProducts} />} /> 
      <Route path="/products" element={<ProductList products={products} />} />
     
      
    </Routes>
  );
};

export default AppRoutes;
