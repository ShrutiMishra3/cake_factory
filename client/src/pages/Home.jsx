import React from 'react';
import { Link } from 'react-router-dom';

import "../style/App.css"

import Card from "../components/Card";
import data from "../../../cake.json"

function Home() {
    // Your home page content
    const cards = data.map(item => {
    return (
      <Card key = {item.id} {...item} />
    )
  })
    
  return (
    <div>
      <h1>Welcome to the Cake Shop</h1>
      <section className='container cards1 products'>
        {cards}
      </section>
    </div>
  );
}

export default Home;
