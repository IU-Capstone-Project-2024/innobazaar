import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useContext } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

function ChangePassword(props) {

    return (
        <>
            <Header />
            <div className='container mt-4 mb-4 full-height'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar/>
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='col-md-4 mb-2'>
                                <div className='card'>
                                    <div className='card-body text-cener'>
                                        <h4>Change Password</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ChangePassword;
