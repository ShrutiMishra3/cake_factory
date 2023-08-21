import {React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "../style/App.css"

import Card from "../components/Card";
import data from "../../../cake.json"


function Home() {
  // Getting data from backend server
  const [cakes, setCakes] = useState([])

  const fetchCakeData = () => {
    fetch("http://127.0.0.1:5500/api/cake")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCakes(data)
      })
  }

  useEffect(() => {
    fetchCakeData()
  }, [])
  console.log(cakes);

    // Your home page content
    const cards = cakes.map(item => {
    return (
      <Card key = {item.id} {...item} />
    )
  })
    
  return (
    <div>
      <h1 className='title d-flex justify-content-center'>Welcome to the Cake Factory</h1>
      <section className='container cards1 products'>
        {cards}
      </section>
    </div>
  );
}

export default Home;
