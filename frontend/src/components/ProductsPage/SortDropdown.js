import React from 'react';
import './styles/Dropdown.css';

const SortDropdown = ({ sortBy, handleSortChange }) => (
    <div className='dropdown'>
        <div className='search-dropdown'>
            <form action="https://www.google.com/search" method="get" className="searchbar_drop">
                <label>
                    <input type="text" placeholder="Search items..." />
                </label>
            </form>
        </div>
        <div className="sort-dropdown">
            <label>Sort by:</label>
            <select value={sortBy} onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="cheapest">Cheapest</option>
                <option value="rating">Highest rating</option>
            </select>
        </div>
    </div>
);

export default SortDropdown;
