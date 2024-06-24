import React from 'react';
import './Authorization.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Authorization = () => (
    <div>
        <Header />
        <div id="middle">
            <div id="login-window">
                <div class="sign-buttons">
                    <div class="sign-in">
                        <button class="wide_button" id="sign-in-button-login" onclick="{signInClicked()}">
                            Sign In
                        </button>
                    </div>
                    <div class="sign-up">
                        <button class="wide_button" id="sign-up-button-login" onclick="{signUpClicked()}">Sign Up</button>
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

            <div id="registration-window">
                <div class="sign-buttons">
                    <div class="sign-in">
                        <button class="wide_button" id="sign-in-button-registration" onclick="{signInClicked()}">
                            Sign In
                        </button>
                    </div>
                    <div class="sign-up">
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
                        <input placeholder="Type password..." type="text" class="input_box" id="password-input-registration" />
                    </label>
                    <label for="password-input-registration">
                        Confirm password
                        <input type="text" class="input_box" id="password-confirmation" />
                    </label>
                    <button class="wide_button" id="bottom_sign_up">SIGN UP AS USER</button>
                    <button class="wide_button" id="bottom_sign_up_vendor">SIGN UP AS VENDOR</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
);

export default Authorization;