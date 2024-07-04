import React from 'react';
import './styles/Filters.css'

const Pagination = ({ totalResults }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Page navigation" className='pagination-nav'>
    </nav>
  );
};

export default Pagination;
