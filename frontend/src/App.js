import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Authorization/SignIn';
import SignUp from './components/Authorization/SignUp';
import ProductsPageWrapper from './components/ProductsPage/ProductsPageWrapper';
import Home from './components/Home/Home';
import { AuthProvider } from './components/AuthContext';
import ProductUpload from './components/Upload/ProductUpload';
import ProductDetails from './components/Product/ProductDetails'
import Dashboard from './components/Dashboard/Dashboard';
import Wishlist from './components/Dashboard/Wishlist';
import ChangePassword from './components/Dashboard/ChangePassword';
import AddItem from './components/Dashboard/AddItem';
import MyItems from './components/Dashboard/MyItems';
import SignOut from './components/Authorization/SignOut';
import GenDescription from './components/Dashboard/GenDescription';

function App() {
  return (
    // <AuthProvider> {}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<SignOut />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/products/:category_id?" element={<ProductsPageWrapper />} />
        <Route path="/product/:product_id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/wishlist" element={<Wishlist />} />
        <Route path="/dashboard/additem" element={<AddItem />} />
        <Route path="/dashboard/changepwd" element={<ChangePassword />} />
        <Route path="/dashboard/myitems" element={<MyItems />} />
        <Route path="/dashboard/gendesc" element={<GenDescription />} />
        {/* <Route path="/upload" element={<ProductUpload />} /> Add this line */}
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
