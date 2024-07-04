import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../logo.svg';
import ProductCard from '../ProductCard';
import ProductList from '../ProductList';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Wishlist(props) {

    const { product_id } = useParams();
    const url = 'http://localhost:8000/api';
    const customerId = localStorage.getItem('customer_id');
    const [wishItems, setWishItems] = useState([]);
    const [productImgs, setProductImgs] = useState([]);


    useEffect(() => {
        fetchProducts(url + '/customer/' + customerId + '/wishitems/');
    }, []);

    const fetchProducts = (fetchUrl) => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                const WishItems = [];
                // data.data.map((item, index) => {
                //     WishItems.push(item.product)
                // });
                setWishItems(data.data);
            });
    };
    
    function removeFromWishlist(wishlist_id) {
        const formData = new FormData();
        formData.append('wishlist_id', wishlist_id);
        axios.post(url + '/remove-from-wishlist/', formData)
        .then(function (response) {
            document.getElementById('row'+wishlist_id).remove();
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <>
            <Header />
            <div className='container mt-4 mb-4 full-height'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        {/* <ProductList products={wishItems} /> */}
                        {/* <div className=''> */}
                            <div className='row'>
                                {wishItems.map((item, index) => {
                                    return (
                                        <div className='col-12 col-md-4 mb-4' id={`row${item.id}`}>
                                            <div className="card shadow h-100"> {/*style="width: 18rem;">*/}
                                                <Link to={`/product/${item.product.id}`}>
                                                    <img src={'http://localhost:8000/'+item.product.image} className="card-img-top object-fit-cover " alt="..." style={{ minHeight: "15vw" }} />
                                                </Link>
                                                {/* <hr/> */}
                                                <div className="card-body d-flex flex-column justify-content-between">
                                                    <Link to={`/product/${item.product.id}`}>
                                                        <h5 className="card-title">{item.product.title}</h5>
                                                    </Link>
                                                    <h5 className="card-title text-muted">{item.product.price} ₽</h5>
                                                </div>
                                                <div className='card-footer'>
                                                    <button title='Add to wishlist' className='btn btn-danger' onClick={()=>removeFromWishlist(item.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Wishlist;
