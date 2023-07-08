/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Container } from "@mui/material";

import "./style/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
// import UserDetailsForm from './components/UserDetailsForm'
import CakeDetailsForm from "./components/CakeDetailsForm";
import RegisterForm from "./components/Register";

import data from "../../cake.json"

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        {...item}
        // item = {item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* <Hero/> */}
        <section className="cards">
          {cards}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
