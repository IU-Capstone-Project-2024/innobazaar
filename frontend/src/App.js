// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';
import ProductsPageWrapper from './components/ProductsPage/ProductsPageWrapper';
import Home from './components/Home/Home';
// import ProductDetail from './components/ProductDetail/ProductDetail'; // Assuming you have this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:category?" element={<ProductsPageWrapper />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
