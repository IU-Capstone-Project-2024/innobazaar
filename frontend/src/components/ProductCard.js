import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

let product = {
  rating: 3,
  name: 'Product',
  price: 200
};

const url = 'http://localhost:8000/api';
const customerId = localStorage.getItem('customer_id');

function ProductCard(product) {

  const [Wishlisted, setWishlisted] = useState(false);

  // Add to wishlist
  function saveInWishList() {
    const customerId = localStorage.getItem('customer_id');
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', product.id);

    axios.post(url + '/check-in-wishlist/', formData)
      .then(function (response) {
        setWishlisted(response.data.bool);
        console.log(response.data.bool)
        if (!response.data.bool) {
          axios.post(url + '/wishlist/', formData)
            .then(function (response) {
              if (response.data.id) {
                setWishlisted(true);
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        }

        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  useEffect(() => {
    checkProductInWishlist();
  }, []);

  const checkProductInWishlist = () => {
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', product.id);
    axios.post(url + '/check-in-wishlist/', formData)
      .then(function (response) {
        setWishlisted(response.data.bool);
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  return (
    <div to={`/product/${product.id}`} className='col-6 col-md-4 mb-4'>
      {/* "https://placehold.co/150x200.png" */}
      {/* <img src={product.image} alt={product.title} />
    <div className='product-card-details'>
      <p>Rating: {product.rating} stars</p>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div> */}
      <div className="card h-100"> {/*style="width: 18rem;">*/}
        <Link to={`/product/${product.id}`} className='h-75'>
          <img src={product.image} className="card-img-top object-fit-cover h-100" alt="..." style={{ maxHeight: "18em", minHeight: "18em" }} />
        </Link>
        
        {/* <hr/> */}
        <div className="card-body d-flex flex-column justify-content-between">
          <Link to={`/product/${product.id}`}>
            <h4 className="card-title">{product.title}</h4>
          </Link>
          <h5 className="card-title text-muted">{product.price} ₽</h5>
        </div>
        <div className='card-footer'>
          {
            !Wishlisted &&
            <button onClick={saveInWishList} title='Add to wishlist' className='btn btn-outline-danger'><i class="fa-regular fa-heart"></i></button>
          }
          {
            Wishlisted &&
            <button title='Remove from wishlist' className='btn btn-outline-danger active'><i class="fa-regular fa-heart"></i></button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;