import React from 'react';

const SearchBar = ({ searchQuery, handleSearchInputChange }) => (
  <div className="search-container">
    <input
      type="text"
      placeholder="Search for anything..."
      value={searchQuery}
      onChange={handleSearchInputChange}
    />
  </div>
);

export default SearchBar;
