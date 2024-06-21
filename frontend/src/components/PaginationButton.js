import React from 'react';

const PaginationButton = ({ onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <button onClick={onClick} className="load-more">
      Load More
    </button>
  );
};

export default PaginationButton;