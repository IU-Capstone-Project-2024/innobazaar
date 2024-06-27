import React from 'react';
import './styles/Authorization.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";

const SignIn = () => (
    <div>
        <Header />
        <div id="middle">
            <div id="login-window">
                <div class="sign-buttons">
                    <div class="sign-in-in" id='sign-in'>
                        <button class="wide_button" id="sign-in-button-login" onclick="{signInClicked()}">
                            Sign In
                        </button>
                    </div>
                    <div class="sign-up-in" id='sign-up'>
                        <Link to='/signup'>
                            <button class="wide_button" id="sign-up-button-login" onclick="{signUpClicked()}">Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div class="main-content">
                    <label for="email-input-login">
                        Email address
                        <input type="text" class="input_box" id="email-input-login" />
                    </label>
                    <label for="password-input-login">
                        Password
                        <input type="text" class="input_box" id="password-input-login" />
                    </label>
                    <button class="wide_button" id="bottom_sign_in">SIGN IN</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default SignIn;