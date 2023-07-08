/* eslint-disable react/prop-types */

export default function Card(cake) {
  return (
    <div className="card">
      <img src={cake.image} alt={cake.name} />
      <div className="card-body">
        <h2>{cake.name}</h2>
        <p>{cake.description}</p>
        <p>Price: ${cake.price}</p>
        <p>Flavors: {cake.flavors.join(", ")}</p>
        <p>Size: {cake.sizes}</p>
        <p>Ingredients: {cake.ingredients.join(", ")}</p>
        <p>Category: {cake.category}</p>
        <p>Stock: {cake.stock}</p>
      </div>
    </div>
  );
}
