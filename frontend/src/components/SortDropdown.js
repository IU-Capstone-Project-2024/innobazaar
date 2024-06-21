import React from 'react';

const SortDropdown = ({ sortBy, handleSortChange }) => (
    <div className="sort-dropdown">
        <label>Sort by:</label>
        <select value={sortBy} onChange={handleSortChange}>
            <option value="newest">Newest</option>
            <option value="cheapest">Cheapest</option>
            <option value="rating">Highest rating</option>
        </select>
    </div>
);

export default SortDropdown;
