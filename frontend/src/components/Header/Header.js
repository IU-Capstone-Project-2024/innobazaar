import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to='/'>
      <div className="logo">
        <div className='logo_circle'>ib</div>
        <p>innobazaar</p>
      </div>
    </Link>
    <form action="https://www.google.com/search" method="get" className="searchbar">
      <label>
        <input type="text" placeholder="Search items..." />
      </label>
      {/* <button type="submit" id="search-button"><img src={require("./images/search.png")} id="search-image" alt="search" /></button> */}
    </form>
    <div className='user_action'>
      <a href="https://www.vk.com"><img src={require("./images/heart.png")} alt="wishlist" className="wishlist" /></a>
      <Link to='/signin'>
        <a className='login'>
          <img src={require("./images/login.png")} alt="profile" />
          <p>Sign In</p>
        </a>
      </Link>
    </div>
  </div>
);

export default Header;