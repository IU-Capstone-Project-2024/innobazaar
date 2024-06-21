import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const products = [
  { id: 1, name: 'Samsung A71', price: 570, image: 'path_to_image', rating: 5 },
  { id: 2, name: 'Samsung iPhone', price: 2200, image: 'path_to_image', rating: 5 },
  // ДОБАВИТЬ ДАЛЬШЕ
];

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;