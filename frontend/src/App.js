// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authorization from './components/Authorization/Authorization';
import Category from './components/ProductsPage/Category';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Home from './components/Home/Home';

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: React.createElement(Home),
      }),
      React.createElement(Route, {
        path: "/auth",
        element: React.createElement(Authorization),
      }),
      React.createElement(Route, {
        path: "/products/:category?",
        element: React.createElement(ProductsPage),
      }),
    )
  );
}

export default App;
