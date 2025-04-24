import React from 'react';
import '../styles/styles.css'

const Sidebar = ({ setSortOrder, setFilterCategory }) => {
  return (
      
    <div className="sidebar">
      <h2>Sort By</h2>
      <button onClick={() => setSortOrder('lowToHigh')} >Price: Low to High</button>
      <button onClick={() => setSortOrder('highToLow')} >Price: High to Low</button>

      <h2 className="font-bold mt-6 mb-4">Filter By Category</h2>
      <button onClick={() => setFilterCategory('electronics')} >Electronics</button>
      <button onClick={() => setFilterCategory('jewelery')} >Jewelery</button>
      <button onClick={() => setFilterCategory('men\'s clothing')} >Men's Clothing</button>
      <button onClick={() => setFilterCategory('women\'s clothing')} >Women's Clothing</button>
      <button onClick={() => setFilterCategory('')} >Clear Filter</button>
    </div>
  );
};

export default Sidebar;
