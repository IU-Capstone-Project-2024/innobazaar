// src/components/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className='footer_top'>
      <div className="footer-links">
        <Link to='/'>
        <a href="https://www.google.com"><p>Home</p></a>
        </Link>
        <Link to='/products'>
        <a href="https://www.google.com"><p>All products</p></a>
        </Link>
      </div>
    </div>
    <div className='footer_bot'>
      <div className="logo_footer">
        <div className='logo_circle_footer'>ib</div>
        <p>innobazaar</p>
      </div>
      <p>2024 capstone project</p>
      <p>innobazaar team</p>
    </div>
  </div>
);

export default Footer;
