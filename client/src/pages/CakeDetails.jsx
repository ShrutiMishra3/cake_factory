import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import.meta.env.VITE_APP_ORIGIN

function CakeDetails() {
  const { cakeId } = useParams();
  const { cartItems, addToCart } = useContext(ShopContext);
  const [cake, setCake] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(import.meta.env.VITE_APP_ORIGIN);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        const foundCake = jsonData.find((item) => item.id == cakeId);
        setCake(foundCake);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [cakeId]);

  // Function to handle the "Add to Cart" button click
  const handleAddToCartClick = () => {
    // Update the buttonClicked state to true
    setButtonClicked(true);

    // Add the item to the cart
    addToCart(cake.id);
  };

  return (
    <div className="container mt-5">
      {cake ? (
        <div className="row">
          <div className="col-md-6">
            <img src={cake.image} alt={cake.name} className="img-fluid rounded mx-auto" />
          </div>
          <div className="col-md-6">
            <h2 className="display-4 mt-3">{cake.name}</h2>
            <p className="lead">{cake.description}</p>
            <p className="card-text mb-2">
              Price: <strong>₹ {cake.price}</strong>
            </p>
            <button
              className={`btn btn-warning m-2 btn-cart ${buttonClicked ? "button-clicked" : ""}`}
              onClick={handleAddToCartClick}
            >
              {buttonClicked ? "Added to Cart" : "Add to Cart"}{" "}
              <i className="fas fa-shopping-cart" />
              {cartItems[cake.id] > 0 && (
                <sup className="--bs-danger-text-emphasis">{cartItems[cake.id]}</sup>
              )}
            </button>
          </div>
        </div>
      ) : (
        <h2>Cake Not Found</h2>
      )}
    </div>
  );
}

export default CakeDetails;
