import React from 'react';

const categories = ["Smartphones", "Headphones", "Laptops", "Monitors", "Smart Watches", "Mobile Holders", "Data Cables", "Phone Cases", "Keyboards & Mice", "Home & Kitchen"];

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Category</h3>
    <ul>
      {categories.map(category => (
        <li key={category}>{category}</li>
      ))}
    </ul>
    <h3>Price Range</h3>
    <div>
      <input type="number" placeholder="Min price" />
      <input type="number" placeholder="Max price" />
    </div>
  </aside>
);

export default Sidebar;