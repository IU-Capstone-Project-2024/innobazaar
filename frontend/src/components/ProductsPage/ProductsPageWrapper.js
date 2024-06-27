// src/components/ProductsPage/ProductsPageWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsPage from './ProductsPage';

const ProductsPageWrapper = () => {
  const { category } = useParams();
  return <ProductsPage selectedCategory={category} />;
};

export default ProductsPageWrapper;
