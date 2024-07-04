import React from 'react';
import './styles/Filters.css'
import { Link } from "react-router-dom";
import Input from './Input';
import Pagination from './Pagination';

const Filters = ({ categories, handleCategoryToggle, minPrice, maxPrice,
  handleMinPriceChange, handleMaxPriceChange, handleChange, totalResults,
  changeUrl }) => {


  var links = [];
  var limit = 5;
  var totalLinks = totalResults / limit;
  if (totalResults % limit != 0) {
    totalLinks += 1;
  }
  for (let i = 1; i <= totalLinks; i++) {
    links.push(<li className="page-item"><Link onClick={() => changeUrl(`/products/?page=${i}`)} to={`/products/?page=${i}`} className="page-link">{i}</Link></li>)
  }

  return (
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
              <span className="checkmark"></span>
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
      <nav aria-label="Page navigation" className='pagination-nav'>
        <ul className="pagination">
          {/* <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li> */}
          {links}
          {/* <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Filters;
