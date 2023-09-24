import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import CakeDetails from './pages/CakeDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cake = {
  id : 1,
  name: 'Unbranded Cotton Bacon',
  description: 'Iste quo pariatur.',
  price: '249.00',
  flavors: ['in'],
  sizes: 'Medium',
  ingredients: ['quae', 'consequatur', 'ullam'],
  image: 'https://loremflickr.com/640/480?lock=536150682894336',
  category: 'sed',
  ratings: [],
  stock: 90.45918564774476,
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cake/:cakeId" element={<CakeDetails key={cake.id} {...cake} />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route component={<NotFound />} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default App;
