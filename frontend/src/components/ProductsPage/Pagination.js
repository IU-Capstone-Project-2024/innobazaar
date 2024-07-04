import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div></div>
    );
};

export default Pagination;
