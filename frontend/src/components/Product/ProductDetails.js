import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './styles.css'
import { useContext } from 'react';
import { UserContext } from '../../Context';
import axios from 'axios';

function ProductDetails() {
    const { product_id } = useParams();
    const url = 'http://localhost:8000/api';
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productInWishlist, setProductInWishlist] = useState(false);
    const userContext = useContext(UserContext);

    useEffect(() => {
        fetchProducts(url + '/product/' + product_id + '/');
        checkProductInWishlist();
    }, []);

    const fetchProducts = (fetchUrl) => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data);
                console.log(data);
                setProductImgs(data.product_imgs);
                setLoading(false);
            });
    };

    // Add to wishlist
    function saveInWishList() {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('product', productData.id);

        axios.post(url + '/wishlist/', formData)
            .then(function (response) {
                if (response.data.id) {
                    setProductInWishlist(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const checkProductInWishlist = () => {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);
        formData.append('product', product_id);

        axios.post(url + '/check-in-wishlist/', formData)
            .then(function (response) {
                if (response.data.bool == true) {
                    setProductInWishlist(true);
                } else {
                    setProductInWishlist(false);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };


    return (
        loading ? <div> Loading...</div> :

            <>
                <Header />
                <section className='container mt-4 product-details-main mb-4 full-height'>
                    <div className='row product-details'>
                        <div className='col-md-5 product-details-image'>
                            {/* <img src={logo} className="img-thumbnail mb-5" alt="..." /> */}
                            <div id="productThumbnailSlider" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#productThumbnailSlider"
                                        data-bs-slide-to='0' className="active" aria-current="true" aria-label="Slide 1"></button>
                                    {
                                        productImgs.map((image, index) => {
                                            if (index === 0) {
                                                return <button type="button" data-bs-target="#productThumbnailSlider"
                                                    data-bs-slide-to={index+1} className="active" aria-current="true" aria-label="Slide 1"></button>
                                            } else {
                                                return <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to={index+1}
                                                    aria-current="true" aria-label="Slide 1"></button>
                                            }
                                        })
                                    }
                                    {/* <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={productData.image} className="img-thumbnail mb-5 object-fit-cover" alt="..." style={{ width: "100%", height: '35em', width: '35rem'  }} /></div>
                                    {
                                        productImgs.map((image, index) => {
                                            if (index === 0) {
                                                return <div className="carousel-item">
                                                    <img src={image.image} className="img-thumbnail mb-5 object-fit-cover" alt="..." style={{ width: "100%", height: '35em', width: '35rem'  }} /></div>
                                            } else {
                                                return <div className="carousel-item">
                                                    <img src={image.image} className="img-thumbnail mb-5 object-fit-cover" alt="..." style={{ width: "100%", height: '35em', width: '35rem'  }} /></div>
                                            }
                                        })
                                    }
                                    {/* <div className="carousel-item active">
                                        <img src={logo} className="img-thumbnail mb-5" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={logo} className="img-thumbnail mb-5" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={logo} className="img-thumbnail mb-5" alt="..." />
                                    </div> */}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <h3>{productData.title}</h3>

                            <h4 className='card-title mt-3 text-info'>{productData.price} ₽</h4>

                            <h5 className='mt-3'>Description</h5>
                            <p>{productData.detail}</p>
                            <hr></hr>

                            <h4 className='mt-4'>Contact Seller</h4>
                            <button className='btn btn-outline-primary mt-1'><i className="fa-brands fa-telegram "></i> Telegram</button>
                            <button className='btn btn-outline-primary mt-1 ms-1'><i className="fa-solid fa-phone"></i> Call</button>

                            {/* <h5 className='mt-4'>Address</h5> */}
                            {/* <p>some address</p> */}
                            <br />
                            <hr></hr>
                            {
                                (userContext.login && !productInWishlist) &&
                                <button onClick={saveInWishList} title='Add to wishlist' className='btn btn-outline-danger mt-4'><i className="fa-regular fa-heart"></i> Add to Wishlist</button>
                            }
                            {
                                (userContext.login && productInWishlist) &&
                                <button title='Remove from wishlist' className='btn btn-outline-danger active mt-4'><i className="fa-regular fa-heart"></i> Item in   Wishlist</button>
                            }
                            {
                                !userContext.login &&
                                <button title='Add to wishlist' className='btn btn-outline-dark disabled mt-4'><i className="fa-regular fa-heart"></i> Add to Wishlist</button>
                            }
                        </div>
                    </div>

                </section>
                <Footer />
            </>
    );
}

export default ProductDetails;