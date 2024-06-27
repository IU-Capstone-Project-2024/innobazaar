import React from 'react';
import './styles/Authorization.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const SignUp = () => (
    <div>
        <Header />
        <div id="middle">
            <div id="registration-window">
                <div class="sign-buttons">
                    <div class="sign-in-up" id='sign-in'>
                        <Link to='/signin'>
                            <button class="wide_button" id="sign-in-button-registration" onclick="{signInClicked()}">
                                Sign In
                            </button>
                        </Link>
                    </div>
                    <div class="sign-up-up" id='sign-up'>
                        <button class="wide_button" id="sign-up-button-registration" onclick="{signUpClicked()}">Sign Up
                        </button>
                    </div>
                </div>
                <div class="main-content">
                    <label for="name-input-registration">
                        Name
                        <input type="text" class="input_box" id="name-input-registration" />
                    </label>
                    <label for="email-input-registration">
                        Email address
                        <input type="text" class="input_box" id="email-input-registration" />
                    </label>
                    <label for="password-input-registration">
                        Password
                        <input placeholder="Type password..." type="password" class="input_box" id="password-input-registration" />
                    </label>
                    <label for="password-input-registration">
                        Confirm password
                        <input placeholder="Repeat password..." type="password" class="input_box" id="password-input-confirmation" />
                    </label>
                    <button class="wide_button" id="bottom_sign_up">SIGN UP AS USER</button>
                    <button class="wide_button" id="bottom_sign_up_vendor">SIGN UP AS VENDOR</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default SignUp;