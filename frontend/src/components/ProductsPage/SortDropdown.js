import React from 'react';
import './styles/Dropdown.css';

const SortDropdown = ({ sortBy, handleSortChange, searchQuery, handleSearchInputChange }) => (
    <div className='dropdownn'>
        <div className='search-dropdown'>
            <form method="get" className="searchbar_drop" onSubmit={e => e.preventDefault()}>
                <label>
                    <input type="text" placeholder="Search items..." value={searchQuery} onChange={handleSearchInputChange}/>
                </label>
            </form>
        </div>
        <div className="sort-dropdown">
            <select value={sortBy} onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="cheapest">Cheapest</option>
                <option value="rating">Highest rating</option>
            </select>
        </div>
    </div>
);

export default SortDropdown;
