import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={"https://placehold.co/150x200.png"} alt={product.name} />
    <p>Rating: {product.rating} stars</p>
    <h4>{product.name}</h4>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;