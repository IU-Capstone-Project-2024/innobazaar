import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useContext } from 'react';
import './styles/Authorization.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useState } from 'react';

function SignIn() {

    const baseUrl = 'http://localhost:8000/api';
    const [formError, setFormError] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');
    const [loginFormData, setloginFormData] = useState({
        "username": '',
        'password': ''
    });

    const inputHandler = (event) => {
        setloginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        })
    };

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('username', loginFormData.username);
        formData.append('password', loginFormData.password);

        axios.post(baseUrl + '/customer/login/', formData)
            .then(function (response) {
                if (response.data.bool == false) {
                    setFormError(true);
                    seterrorMsg(response.data.msg);
                } else {
                    localStorage.setItem('customer_login', true);
                    localStorage.setItem('customer_id', response.data.user_id);
                    localStorage.setItem('customer_username', response.data.user);
                    setFormError(false);
                    seterrorMsg('');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        window.location.href='/dashboard'
    }

    const buttonEnable = (loginFormData.username != '') && (loginFormData.password != '')


    return (
        <>
            <Header />
            <div className='container mt-4 mb-4 full-height'>
                <div className='row'>
                    <div className='col-md-6 col-12 offset-md-3'>
                        <div className='card'>
                            <h4 className='card-header'>Login</h4>
                            <div className='card-body'>
                                {formError &&
                                    <p className='text-danger'>{errorMsg}</p>
                                }
                                <form>
                                    <div className='mb-3'>
                                        <label for="username" className='form-label'>Username</label>
                                        <input type='text' name="username" value={loginFormData.username} onChange={inputHandler} className='form-control' id='username' />
                                    </div>
                                    <div className='mb-3'>
                                        <div className='mb-3'>
                                            <label for='pwd' className='form-label'>Password</label>
                                            <input type='password' name="password" value={loginFormData.password} onChange={inputHandler} className='form-control' id='pwd' />
                                        </div>
                                    </div>
                                    <button type='button' disabled={!buttonEnable} onClick={submitHandler} className='btn btn-primary'>Submit</button>
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

export default SignIn;
