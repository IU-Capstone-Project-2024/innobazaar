import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import './styles/NewItems.css';

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewItems();
  }, []);

  const fetchNewItems = async () => {
    try {
      const response = await axios.post('http://localhost:8000/front/v1/products', {
        limit: 8,
        sort_by: 'newest'
      });
      setNewItems(response.data.products);
    } catch (error) {
      console.error('Error fetching new items:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-items">
      <h2>New items</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="new-items-grid">
          {newItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewItems;
