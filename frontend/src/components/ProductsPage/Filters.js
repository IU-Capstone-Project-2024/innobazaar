import React from 'react';
import './styles/Filters.css'
import Input from './Input';

const Filters = ({ categories, handleCategoryToggle, minPrice, maxPrice, handleMinPriceChange, handleMaxPriceChange, handleChange }) => (
  <div className="filters">
    <h2>Category</h2>
    <ul>
      {categories.map(category => (
        <li key={category.id} className='category-option'>
          <label className='category'>
            <input
              type="radio"
              checked={category.selected}
              onChange={() => handleCategoryToggle(category.id)}
            />
            <span class="checkmark"></span>
            {category.name}
          </label>
        </li>
      ))}
    </ul>
    <div className="price-filter">
      <h2>Price Range</h2>
      <div className='min-max'>
        <div>
          <input placeholder='Min Price' type="number" value={minPrice} onChange={handleMinPriceChange} />
        </div>
        <div>
          <input placeholder='Max Price' type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        </div>
      </div>
    </div>
  </div>
);

export default Filters;
