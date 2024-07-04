import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useContext, useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';
function MyItems(props) {

    const [ProductData, setProductData] = useState([]);

    useEffect(() => {
        fetchData(baseUrl + '/products/')
    }, []);

    const fetchData = (fetchUrl) => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data.results);
            });
    };

    console.log(ProductData);

    return (
        <>
            <Header />
            <div className='container mt-4 mb-4 full-height'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <h3><Link to='/dashboard/additem' className='btn btn-primary mb-2'><i className='fa fa-plus-circle'></i> Add Item</Link></h3>
                        <div className='table'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ProductData.map((product, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        {
                                                            !product.publish_status && 'Not Published'
                                                        }
                                                        {
                                                            product.publish_status && <span className='text-success'>Published</span>
                                                        }
                                                    </td>
                                                    <td>
                                                        <a href='#' className='btn btn-primary me-1'>Edit</a>
                                                        <a href='#' className='btn btn-danger'>Delete</a>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MyItems;
