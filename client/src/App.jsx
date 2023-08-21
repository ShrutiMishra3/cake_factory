/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import "./style/App.css";

import Home from "./pages/Home";
import CakeDetails from './pages/CakeDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

import Login from "./pages/login/Login";

import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import Card from "./components/Card";
// // import ProductPage from './components/ProductPage';
// import FilterBar from "./components/FilterBar";

// // import UserDetailsForm from './components/UserDetailsForm'
// import CakeDetailsForm from "./components/CakeDetailsForm";
// import RegisterForm from "./components/Register";

import data from "../../cake.json"

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
  // const cards = data.map(item => {
  //   return (
  //     <Card 
  //       key = {item.id}
  //       {...item}
  //       // item = {item}
  //     />
  //   )
  // })
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/cake/:cakeId" element={ <CakeDetails key={cake.id} {...cake}/> } />
        <Route exact path="/cart" element={ <ShoppingCart/> } />
        <Route exact path="/checkout" element={ <Checkout/> } />
        <Route component={ <NotFound/> } />
      </Routes>
      <hr />
      <Footer />
    </>
    // <div>
    //   <div className="container">
    //     <Hero/>
    //     <FilterBar/>
    //     <section className="cards">
    //       {cards}
    //     </section>
    //     <hr />
    //   </div>
    // </div>
  );
}

export default App;
