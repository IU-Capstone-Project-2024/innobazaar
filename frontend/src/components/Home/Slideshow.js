import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles/Slideshow.css';

const categories = [
  { id: 1, name: 'Electronics', value: 'electronics', image: "./images/electronics.png" },
  { id: 2, name: 'Handicrafts', value: 'handicrafts', image: './images/handicrafts.png' },
  { id: 3, name: 'Accessories', value: 'accessories', image: './images/accessories.png' },
  { id: 4, name: 'Books', value: 'books', image: './images/books.png' },
  { id: 5, name: 'Women\'s shoes', value: 'women\'s shoes', image: './images/womans_shoes.png' },
  { id: 6, name: 'Men\'s clothes', value: 'men\'s clothes', image: './images/mans_clothes.png' },
  { id: 7, name: 'Kid\'s shoes', value: 'kid\'s shoes', image: './images/kids_shoes.png' },
  { id: 8, name: 'Jewelry', value: 'jewelry', image: './images/jewellery.png' },
  { id: 9, name: 'Home & Kitchen', value: 'home & Kitchen', image: './images/kitchen.png' },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const history = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + categories.length) % categories.length);
  };

  const handleCategoryClick = (category) => {
    history(`/products/${category.value}`);
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerPage).concat(
    currentIndex + itemsPerPage > categories.length ? categories.slice(0, (currentIndex + itemsPerPage) % categories.length) : []
  );

  return (
    <div className="category-carousel">
      <h1>Shop with categories</h1>
      <div className="carousel-container">
        <button className="carousel-button prev-button" onClick={handlePrev}>&lt;</button>
        <div className="carousell">
          {visibleCategories.map(category => (
            <div key={category.id} className="carousel-item-own" onClick={() => handleCategoryClick(category)}>
              <img src={require(`${category.image}`)} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next-button" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Slideshow;
