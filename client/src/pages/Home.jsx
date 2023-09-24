import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../style/App.css';

import Card from '../components/Card';

function Home() {
  const [cakes, setCakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cakesPerPage] = useState(12); // Number of cakes to display per page

  useEffect(() => {
    fetchCakeData();
  }, []);

  const fetchCakeData = () => {
    fetch(import.meta.env.VITE_APP_ORIGIN + "/api/cake")
      .then((response) => response.json())
      .then((data) => {
        setCakes(data);
      })
      .catch((error) => {
        console.error('Error fetching cake data:', error);
      });
  };

  const indexOfLastCake = currentPage * cakesPerPage;
  const indexOfFirstCake = indexOfLastCake - cakesPerPage;
  const currentCakes = cakes.slice(indexOfFirstCake, indexOfLastCake);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const cards = currentCakes.map((item) => (
    <Card key={item.id} {...item} />
  ));

  // Create an array of page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cakes.length / cakesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <h1 className="title d-flex justify-content-center">Welcome to the Cake Factory</h1>
      <section className="container cards1 products">
        {cards}
      </section>

      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
