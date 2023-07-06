import { useState } from "react";
import axios from "axios";

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
      .post("/api/cakes", cake)
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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={cake.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={cake.description}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={cake.price}
          onChange={handleChange}
          step="0.01"
          required
        />
        <br />
        <br />

        <label htmlFor="flavors">Flavors:</label>
        <input
          type="text"
          id="flavors"
          name="flavors"
          value={cake.flavors}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="sizes">Sizes:</label>
        <input
          type="text"
          id="sizes"
          name="sizes"
          value={cake.sizes}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={cake.ingredients}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <br />

        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={cake.image}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={cake.category}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={cake.stock}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CakeDetailsForm;
