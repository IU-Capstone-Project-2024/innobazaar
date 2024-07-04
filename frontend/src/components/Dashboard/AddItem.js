import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';
function AddItem(props) {

    const customer_id = localStorage.getItem('customer_id');
    const [CategoryData, setCategoryData] = useState([]);
    const [ErroMsg, setErrorMsg] = useState('');
    const [SuccessMsg, setSuccessMsg] = useState('');
    const [ProductData, setProductData] = useState({
        'category': '',
        'vendor': '',
        'customer': customer_id,
        'title': '',
        'slug': '',
        'detail': '',
        'price': '',
        'tags': '',
        'image': '',
    });
    
    const [ImageUploadErroMsg, setImageUploadErrorMsg] = useState('');
    const [ImageUploadSuccessMsg, setImageUploadSuccessMsg] = useState('');
    const [ProductImgs, setProductImgs] = useState([]);

    const inputHandler = (event) => {
        setProductData({
            ...ProductData,
            [event.target.name]: event.target.value
        });
    };

    const fileHandler = (event) => {
        setProductData({
            ...ProductData,
            [event.target.name]: event.target.files[0]
        });
    };

    const multipleFilesHandler= (event) => {
        var files = event.target.files;
        if (files.length > 0) {
            setProductImgs(files);
            console.log("------------");
        }
    }

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('category', ProductData.category);
        formData.append('vendor', ProductData.vendor);
        formData.append('customer', ProductData.customer);
        formData.append('title', ProductData.title);
        formData.append('slug', ProductData.slug);
        formData.append('detail', ProductData.detail);
        formData.append('price', ProductData.price);
        formData.append('tags', ProductData.tags);
        formData.append('image', ProductData.image);

        axios.post(baseUrl + '/products/', formData, {
            headers: {
                'content-type': 'multipart/form-data',
            },
        })
            .then(function (response) {
                if (response.status == 201) {
                    setErrorMsg('');
                    setSuccessMsg(response.statusText);
                    setProductData({
                        'category': '',
                        'vendor': '',
                        'customer': customer_id,
                        'title': '',
                        'slug': '',
                        'detail': '',
                        'price': '',
                        'tags': '',
                        'image': '',
                    });

                    for (let i = 0; i < ProductImgs.length; i++) {
                        console.log("brooooooooooo"+`${i}`)
                        console.log(ProductImgs[i])
                        const ImageFormData = new FormData();
                        ImageFormData.append('product', response.data.id);
                        ImageFormData.append('image ', ProductImgs[i]);
                        // Submit images
                        axios.post(baseUrl + '/product-imgs/', ImageFormData)
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    }

                    setProductImgs([]);

                } else {
                    setErrorMsg('Invalid Data');
                    setSuccessMsg(response.statusText);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    useEffect(() => {
        fetchProducts(baseUrl + '/categories/');
    }, []);

    const fetchProducts = (fetchUrl) => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                setCategoryData(data.data);
            });
    };

    const buttonEnable = (ProductData.title != '') && (ProductData.category != '')
    && (ProductData.price != '') && (ProductData.image != '') && (ProductData.detail != '')

    return (
        <>
            <Header />
            <div className='container mt-4 full-height'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='card'>
                            <h4 className='card-header'>Add Product</h4>
                            <div className='card-body'>
                                {ErroMsg &&
                                    <p className='text-danger'>{ErroMsg}</p>
                                }
                                {SuccessMsg && <p className='text-success'>{SuccessMsg}</p>}
                                <form>
                                    <div className='mb-3'>
                                        <label for='Title' className='form-label'>Title</label>
                                        <input type='text' name='title' value={ProductData.title} onChange={inputHandler} className='form-control' id='Title' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for='Category' className='form-label'>Category</label>
                                        <select className='form-control' name='category' onChange={inputHandler}>
                                            {
                                                CategoryData.map((item, index) => {
                                                     return (<option value={item.id}>{item.title}</option>);
                                                })
                                            }
                                            {/* <option value='python'>Python</option>
                                            <option value='php'>Php</option>
                                            <option value='js'>JS</option> */}
                                        </select>
                                    </div>
                                    <div className='mb-3'>
                                        <label for='Price' className='form-label'>Price</label>
                                        <input type='number' name='price' value={ProductData.price} onChange={inputHandler} className='form-control' id='Price' />
                                    </div>
                                    <div className='mb-3'>
                                        <div className='mb-3'>
                                            <label for='Images' className='form-label'>Main Image</label>
                                            <input type='file' name='image' onChange={fileHandler} className='form-control' id='Images' />
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <div className='mb-3'>
                                            <label for='Images' className='form-label'>Product Images</label>
                                            <input type='file' multiple name='image' onChange={multipleFilesHandler} className='form-control' id='Images' />
                                        </div>
                                    </div>
                                    <div className='mb-3'>
                                        <label for='Description' className='form-label'>Description</label>
                                        <textarea type='text' name='detail' value={ProductData.detail} onChange={inputHandler} className='form-control' rows='8' id='Description'></textarea>
                                    </div>
                                    <button type='button' disabled={!buttonEnable} className='btn btn-primary' onClick={submitHandler}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddItem;
