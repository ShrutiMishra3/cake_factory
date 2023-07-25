import React from "react";
import { useParams } from "react-router-dom";

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
  console.log("ID: ",cakeId);
  console.log(cake);

  return (
    <>
    <h1>Cake Details: </h1>
      <div className="container d-flex flex-row m-3 p-3">
        {/* Update this condition based on whether value found in database or not */}
        {cake &&
            <div className="p-2">
                <img src={cake.image} alt={cake.name} className="img-fluid rounded mx-auto"/>
                <h2 className="title">{cake.name}</h2>
                <p>{cake.description}</p>
                <p>Price: ${cake.price}</p>
            </div>
        }
        {!cake && <h2>Cake Not Found</h2>}
      </div>
    </>
  );
}

export default CakeDetails;
