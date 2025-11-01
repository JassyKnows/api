import React from 'react';
import { useParams } from 'react-router-dom';

function Productdetails({ product, addToCart, removeFromCart }) {
  const { id } = useParams();
  const productID = Number(id);
  const prod = product.find((p) => p.id === productID);
  return (
    <div className="bodysite">
      <div key={id} className="product-details">
        <img src={prod.image} alt={prod.title} width={150} height={170} />
        <h3>{prod.title}</h3>
        <h5>${prod.price}</h5>
        <p>{prod.description}</p>
        <h6>
          {prod.rating.rate} ({prod.rating.count})
        </h6>

        <button onClick={() => addToCart(prod)}>Add to Cart</button>
        <button onClick={() => removeFromCart(prod.id)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default Productdetails;
