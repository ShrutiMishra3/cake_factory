import React from 'react';
import { Link } from 'react-router-dom';


const ProductPage = ({ id, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
};

export default ProductPage;