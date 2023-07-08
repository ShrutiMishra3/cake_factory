import { useState } from "react";
import axios from "axios";
import { Input,InputLabel, FormControl } from '@mui/material';



const CakeDetailsForm = () => {
  const [cake, setCake] = useState({
    name: "",
    description: "",
    price: 0,
    flavors: "",
    sizes: "",
    ingredients: "",
    image: "",
    category: "",
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCake((prevCake) => ({
      ...prevCake,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make POST request to the server to save the cake data
    axios
      .post("http://localhost:5500/api/cake", cake)
      .then((response) => {
        console.log("Cake data saved successfully:", response.data);
        // Reset the form fields
        setCake({
          name: "",
          description: "",
          price: 0,
          flavors: "",
          sizes: "",
          ingredients: "",
          image: "",
          category: "",
          stock: 0,
        });
      })
      .catch((error) => {
        console.error("Error saving cake data:", error);
      });
  };

  return (
    <div>
      <h2>Cake Details</h2>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="name">Name:</InputLabel>
        <Input type="text" id="name" name="name" value={cake.name} onChange={handleChange} required/>
        <br />
        <br />

        <InputLabel htmlFor="description">Description:</InputLabel>
        <textarea id="description" name="description" value={cake.description} onChange={handleChange} required></textarea>
        <br />
        <br />

        <InputLabel htmlFor="price">Price:</InputLabel>
        <Input type="number" id="price" name="price" value={cake.price} onChange={handleChange} step="0.01" required />
        <br />
        <br />

        <InputLabel htmlFor="flavors">Flavors:</InputLabel>
        <Input type="text" id="flavors" name="flavors" value={cake.flavors} onChange={handleChange} required />
        <br />
        <br />

        <InputLabel htmlFor="sizes">Sizes:</InputLabel>
        <Input type="text" id="sizes" name="sizes" value={cake.sizes} onChange={handleChange} required />
        <br />
        <br />

        <InputLabel htmlFor="ingredients">Ingredients:</InputLabel>
        <textarea id="ingredients" name="ingredients" value={cake.ingredients} onChange={handleChange} required></textarea>
        <br />
        <br />

        <InputLabel htmlFor="image">Image URL:</InputLabel>
        <Input type="text" id="image" name="image" value={cake.image} onChange={handleChange} required />
        <br />
        <br />

        <InputLabel htmlFor="category">Category:</InputLabel>
        <Input type="text" id="category" name="category" value={cake.category} onChange={handleChange} required />
        <br />
        <br />

        <InputLabel htmlFor="stock">Stock:</InputLabel>
        <Input type="number" id="stock" name="stock" value={cake.stock} onChange={handleChange} required />
        <br />
        <br />

        <Input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CakeDetailsForm;
