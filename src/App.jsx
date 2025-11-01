import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productdetails from './assets/shopping_elements/Productdetails';
import Cart from './assets/shopping_elements/Cart';
import Checkout from './assets/shopping_elements/Checkout';
import Home from './assets/shopping_elements/Home';

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState('all');

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');

        setProduct(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const addToCart = (item) => {
    const exists = cart.find((product) => product.id === item.id);

    if (!exists) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setSelectedcategory={setSelectedcategory}
                selectedcategory={selectedcategory}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/productdetails/:id"
            element={
              <Productdetails
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
