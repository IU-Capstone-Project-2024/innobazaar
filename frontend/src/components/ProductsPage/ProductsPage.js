import axios from 'axios';
import React from 'react';
import Filters from './Filters';
import ProductList from '../ProductList';
import SortDropdown from './SortDropdown';
import './styles/ProductsPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class FilterPage extends React.Component {
  state = {
    products: [],
    loading: true,
    categories: [
      { id: 0, name: 'all', selected: true },
      { id: 1, name: 'books', selected: false },
      { id: 2, name: 'electronics', selected: false },
      { id: 3, name: 'accessories', selected: false },
      { id: 4, name: 'handicrafts', selected: false },
      { id: 5, name: 'women\'s shoes', selected: false },
      { id: 6, name: 'men\'s clothes', selected: false },
      { id: 8, name: 'kid\'s shoes', selected: false },
      { id: 9, name: 'toys', selected: false },
      { id: 10, name: 'jewelry', selected: false },
      { id: 11, name: 'home & kitchen', selected: false },
    ],
    minPrice: '',
    maxPrice: '',
    searchQuery: '',
    sortBy: 'cheapest'
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.categories !== this.state.categories ||
      prevState.minPrice !== this.state.minPrice ||
      prevState.maxPrice !== this.state.maxPrice ||
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.sortBy !== this.state.sortBy
    ) {
      this.fetchProducts();
    }
  }

  fetchProducts = () => {
    const { categories, minPrice, maxPrice, searchQuery, sortBy } = this.state;
    let cat = categories.filter(category => category.selected).map(category => category.name);
    if (!cat) {
      cat = 'all';
    }
    let requestData = {
      limit: 20,
      searchQuery,
      category: cat[0],
      min_cost: minPrice !== '' ? parseFloat(minPrice) : undefined,
      max_cost: maxPrice !== '' ? parseFloat(maxPrice) : undefined,
      sort_by: sortBy
    };

    axios.post('http://localhost:8000/front/v1/products', requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(requestData.categories);
        this.setState({
          products: res.data.products,
          loading: false
        });
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        this.setState({
          loading: false
        });
      });
  };

  handleSearchInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleCategoryToggle = (categoryId) => {
    const { categories } = this.state;
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return { ...category, selected: !category.selected };
      } else {
        return { ...category, selected: false };
      }
    });

    const selectedCategory = updatedCategories.find(category => category.id === categoryId && category.selected);

    this.setState({
      categories: updatedCategories,
      selectedCategory: selectedCategory || null
    });
  };

  handleMinPriceChange = (event) => {
    this.setState({
      minPrice: event.target.value
    });
  };

  handleMaxPriceChange = (event) => {
    this.setState({
      maxPrice: event.target.value
    });
  };

  handleSortChange = (event) => {
    this.setState({
      sortBy: event.target.value
    });
  };

  render() {
    const { products, loading, categories, minPrice, maxPrice, searchQuery, sortBy } = this.state;

    return (
      <div>
        <Header />
        <div className="app-container">
          <Filters
            categories={categories}
            handleCategoryToggle={this.handleCategoryToggle}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handleMinPriceChange={this.handleMinPriceChange}
            handleMaxPriceChange={this.handleMaxPriceChange}
          />
          <div className="main-content">
            <SortDropdown sortBy={sortBy} handleSortChange={this.handleSortChange} />
            {loading ? (
              <div>Fetching data...</div>
            ) : (
              <>
              <ProductList products={products} />
              
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FilterPage;
