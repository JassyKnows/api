import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart-container">
      <div className="cart-item">
        {cart.map((items) => (
          <ul>
            <li>
              {items.title}{' '}
              <button onClick={() => removeFromCart(items.id)}>
                Remove from Cart
              </button>
            </li>
          </ul>
        ))}
      </div>
      <Link to="/checkout">
        <button>Go to checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
