// src/components/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => (
  <div className=' gradient-custom'>
    <div class="container">
      <footer class="py-3 mt-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><Link to="/" class="nav-link px-2 text-white">Home</Link></li>
          <li class="nav-item"><Link to="/products" class="nav-link px-2 text-white">All Products</Link></li>
          <li class="nav-item"><Link to="/dashboard" class="nav-link px-2 text-white">Dashboard</Link></li>
        </ul>
        <p class="text-center text-white">© 2024 Innobazaar, Inc</p>
      </footer>
    </div>
  </div>
);

export default Footer;
