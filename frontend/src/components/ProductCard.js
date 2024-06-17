import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h4>{product.name}</h4>
    <p>${product.price}</p>
    <p>Rating: {product.rating} stars</p>
  </div>
);

export default ProductCard;