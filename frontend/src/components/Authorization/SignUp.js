import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/Authorization.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function SignIn() {

    const baseUrl = 'http://localhost:8000/api';
    const [formError, setFormError] = useState(false);
    const [errorMsg, seterrorMsg] = useState('');
    const [successMsg, setsuccessMsg] = useState('');
    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        'last_name': '',
        'username': '',
        'email': '',
        'mobile': '',
        'telegram': '',
        'password': '',
    });

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
        console.log(registerFormData);
    };

    const buttonEnable = (registerFormData.first_name !== '') && (registerFormData.first_name !== '') &&
        (registerFormData.username !== '') && (registerFormData.email !== '') && (registerFormData.password !== '')

    const submitHandler = (event) => {
        const formData = new FormData();
        formData.append('first_name', registerFormData.first_name);
        formData.append('last_name', registerFormData.last_name);
        formData.append('username', registerFormData.username);
        formData.append('email', registerFormData.email);
        formData.append('mobile', registerFormData.mobile);
        formData.append('telegram', registerFormData.telegram);
        formData.append('password', registerFormData.password);

        axios.post(baseUrl + '/customer/register/', formData)
            .then(function (response) {
                if (response.data.bool === false) {
                    setFormError(true);
                    seterrorMsg(response.data.msg);
                    setsuccessMsg('');
                } else {
                    setRegisterFormData({
                        "first_name": '',
                        'last_name': '',
                        'username': '',
                        'email': '',
                        'mobile': '',
                        'telegram': '',
                        'password': '',
                    });
                    setFormError(false);
                    seterrorMsg('');
                    setsuccessMsg(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <>
            <Header />
            <div className='container mt-4 mb-4 full-height'>
                <div className='row'>
                    <div className='col-md-6 col-12 offset-md-3'>
                        <div className='card'>
                            <h4 className='card-header'>Register</h4>
                            <div className='card-body'>
                            <p className='text-muted'>*All field are required</p>
                                {formError &&
                                    <p className='text-danger'>{errorMsg}</p>
                                }
                                {successMsg && <p className='text-success'>{successMsg}</p>}
                                <form>
                                    <div className='mb-3'>
                                        <label for="firstName" className='form-label'>First Name</label>
                                        <input name='first_name' onChange={inputHandler} value={registerFormData.first_name} type='text' className='form-control' id='firstName' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="lastName" className='form-label'>Last Name</label>
                                        <input name='last_name' onChange={inputHandler} value={registerFormData.last_name} type='text' className='form-control' id='lastName' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="username" className='form-label'>Username</label>
                                        <input name='username' onChange={inputHandler} value={registerFormData.username} type='text' className='form-control' id='username' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="email" className='form-label'>Email</label>
                                        <input name='email' onChange={inputHandler} value={registerFormData.email} type='email' className='form-control' id='email' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="mobile" className='form-label'>Mobile</label>
                                        <input name='mobile' onChange={inputHandler} value={registerFormData.mobile} type='number' className='form-control' id='mobile' />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="telegram" className='form-label'>Telegram alias</label>
                                        <input name='telegram' onChange={inputHandler} value={registerFormData.telegram} type='text' className='form-control' id='telegram' />
                                    </div>
                                    <div className='mb-3'>
                                        <div className='mb-3'>
                                            <label for='pwd' className='form-label'>Password</label>
                                            <input type='password' onChange={inputHandler} value={registerFormData.password} name="password" className='form-control' id='pwd' />
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
