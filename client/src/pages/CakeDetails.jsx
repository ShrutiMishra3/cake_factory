import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

import data from "../../../cake.json";

function CakeDetails() {
  // Assume we receive cakeId as a parameter
  const { cakeId } = useParams();

  //   we can get cake details from database using axios or fetch
  var cake;
  for(const row in data){
    if(data[row].id == cakeId)
        cake = data[row];
  }
  // console.log("ID: ",cakeId);
  // console.log(cake);

  const { addToCart } = useContext(ShopContext);

  return (
    <>
    <h1>Cake Details: </h1>
      <div className="container d-flex flex-row m-3 p-3">
        {/* Update this condition based on whether value found in database or not */}
        {cake &&
            <div className="p-2">
                <img src={cake.image} alt={cake.name} className="img-fluid rounded mx-auto"/>
                <h2 className="title mt-3">{cake.name}</h2>
                <p className="description">{cake.description}</p>
                <p className="card-title mb-2">Price: <strong>₹ {cake.price}</strong></p>
                <button className="btn btn-warning" onClick={() => addToCart(cake.id)}>
                    Add to Cart <i className="fas fa-shopping-cart" /> 
                </button>
            </div>
        }
        {!cake && <h2>Cake Not Found</h2>}
      </div>
    </>
  );
}

export default CakeDetails;
