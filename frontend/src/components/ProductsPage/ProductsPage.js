import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Filters from './Filters';
import ProductList from '../ProductList';
import SortDropdown from './SortDropdown';
import Pagination from './Pagination';
import './styles/ProductsPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const url = 'http://localhost:8000/api';
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [CategoryData, setCategoryData] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // New state

  useEffect(() => {
    fetchProducts();
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isSmallScreen);

  useEffect(() => {
    fetchProducts(url + '/products/');
  }, []);

  const fetchProducts = (fetchUrl) => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResults(data.count);
      });
    setLoading(false);
  };

  const filterProducts = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [searchQuery, products]);

  useEffect(() => {
    fetchCategory(url + '/categories/');
  }, []);

  const fetchCategory = (fetchUrl) => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data.data);
      });
  };

  console.log(CategoryData);

  return (
    <div>
      <Header />
      <div className="app container mt-4">
        <div className='row'>
          <div className={`col-2 border-end ${isSmallScreen ? 'd-none' : 'd-block'}`}>
            <h3 className='mb-3'>Category</h3>
            {
              CategoryData.map((item, index) => {
                return (
                  <div className="form-check" key={index}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${index}`} value={item.id} />
                    <label className="form-check-label" htmlFor={`flexRadioDefault${index}`}>
                      {item.title}
                    </label>
                  </div>
                );
              })
            }
          </div>
          <div className={`col-12 ${isSmallScreen ? 'd-block mb-4' : 'd-none'}`}>
            <select className="form-select" aria-label="Category select">
              <option selected>Select Category</option>
              {
                CategoryData.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>{item.title}</option>
                  );
                })
              }
            </select>
          </div>
          <div className="col-md-10 col-12">
            {loading ? (
              <div>Fetching data...</div>
            ) : (
              <>
                <ProductList products={searchQuery ? filteredProducts : products} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
