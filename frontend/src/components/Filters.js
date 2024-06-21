import React from 'react';

const Filters = ({ categories, handleCategoryToggle, minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange }) => (
  <div className="filters">
    <h2>Category</h2>
    <ul>
      {categories.map(category => (
        <li key={category.id} class='category-option'>
          <label>
            <input
              type="checkbox"
              checked={category.selected}
              onChange={() => handleCategoryToggle(category.id)}
            />
            {category.name}
          </label>
        </li>
      ))}
    </ul>
    <div className="price-filter">
      <h2>Price Range</h2>
      <div>
        <label>Min Price:</label>
        <input type="number" value={minPrice} onChange={handleMinPriceChange} />
      </div>
      <div>
        <label>Max Price:</label>
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      </div>
    </div>
  </div>
);

export default Filters;
